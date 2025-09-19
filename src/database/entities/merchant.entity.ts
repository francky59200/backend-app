import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Merchant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /* 🧍 Informations personnelles */
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  /* 🏪 Informations commerce */
  @Column()
  companyName: string;

  @Column()
  businessSector: string; // Ex: Boulangerie

  @Column()
  siretNumber: string;

  /* 📍 Localisation basique */
  @Column()
  postalCode: string;

  @Column()
  city: string;

  @Column()
  country: string;
}
