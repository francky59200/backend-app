import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Data Source has been initialized!');
    console.log(
      '📦 Entities loaded:',
      AppDataSource.entityMetadatas.map((e) => e.name)
    );

    // Ici tu peux lancer le serveur NestJS si tu l’utilises
    // Exemple : await app.listen(3000);
  })
  .catch((err) => {
    console.error('❌ Error during Data Source initialization:', err);
  });

dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
