import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Merchant } from 'src/database/entities/merchant.entity'
import { CreateMerchantDto } from 'src/dto/create-merchant.dto'
import { Repository } from 'typeorm'

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(Merchant)
    private readonly repoMerchant: Repository<Merchant>
  ) {}
  async findAll(): Promise<Merchant[]> {
    return this.repoMerchant.find()
  }
  async findOne(id: string): Promise<Merchant> {
    const updatedMerchant = await this.repoMerchant.findOneBy({ id })
    if (!updatedMerchant) {
      throw new Error(`Merchant with id ${id} not found`)
    }
    return updatedMerchant
  }
  async create(merchant: Partial<CreateMerchantDto>): Promise<Merchant> {
    const newMerchant = this.repoMerchant.create(merchant)
    return this.repoMerchant.save(newMerchant)
  }
  async update(id: string, merchantData: Partial<Merchant>): Promise<Merchant> {
    await this.repoMerchant.update(id, merchantData)
    const merchant = await this.repoMerchant.findOneBy({ id })
    if (!merchant) {
      throw new Error(`Merchant with id ${id} not found`)
    }
    return merchant
  }
  async remove(id: number): Promise<void> {
    await this.repoMerchant.delete(id)
  }
}
