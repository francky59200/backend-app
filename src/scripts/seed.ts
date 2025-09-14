
import { Product } from './../database/entities/product.entity';
import axios from 'axios';
import { AppDataSource } from '../data-source';
import { ProductFake } from '../models/product';
import { Category } from '../database/entities/category.entity';

async function seed() {
  await AppDataSource.initialize();

  const { data: products } = await axios.get<ProductFake[]>(
    'https://api.escuelajs.co/api/v1/products',
  );

  for (const item of products) {
    // Vérifie si la catégorie existe déjà
    let category = await AppDataSource.manager.findOne(Category, {
      where: { slug: item.category.slug },
    });

    // Si non, on la crée
    if (!category) {
      category = AppDataSource.manager.create(Category, {
        id: item.category.id, // facultatif, si tu veux garder l’ID d’origine
        name: item.category.name,
        slug: item.category.slug,
        image: item.category.image,
      });

      await AppDataSource.manager.save(category);
    }

    // Crée le produit
    const product = new Product();
    product.title = item.title;
    product.slug = item.slug;
    product.description = item.description;
    product.price = item.price;
    product.images = item.images;
    product.category = category;

    await AppDataSource.manager.save(product);
  }

  console.log('✅ Seed terminé.');
  process.exit();
}

seed().catch((err) => {
  console.error('❌ Seed error:', err);
  process.exit(1);
});
