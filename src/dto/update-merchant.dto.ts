import {
    IsString,
    IsEmail,
    IsOptional,
  } from 'class-validator';
  
  export class UpdateMerchantDto {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @IsString()
    phone?: string;
  
    @IsOptional()
    @IsString()
    address?: string;
  
    @IsOptional()
    @IsString()
    city?: string;
  
    @IsOptional()
    @IsString()
    postalCode?: string;
  
    @IsOptional()
    @IsString()
    country?: string;
  }
  