import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateMerchantDto {
  /* 🧍 Informations personnelles */
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+?\d{7,15}$/, { message: 'Numéro de téléphone invalide' })
  phoneNumber: string;

  @IsString()
  @Length(6, 50, { message: 'Le mot de passe doit faire au moins 6 caractères' })
  password: string;

  /* 🏪 Informations commerce */
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  businessSector: string;

  @IsString()
  @Matches(/^\d{14}$/, { message: 'Le numéro SIRET doit contenir 14 chiffres' })
  siretNumber: string;

  /* 📍 Localisation basique */
  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}
