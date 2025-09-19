import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseIntPipe,
} from '@nestjs/common'
import { MerchantService } from './merchant.service'
import { Merchant } from 'src/database/entities/merchant.entity'
import { CreateMerchantDto } from 'src/dto/create-merchant.dto'
import { UpdateMerchantDto } from 'src/dto/update-merchant.dto'

@Controller('merchant')
export class MerchantController {
  constructor(private readonly MerchantService: MerchantService) {}

  @Get()
  async findAll() {
    return this.MerchantService.findAll()
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return this.MerchantService.findOne(id)
  }
  @Post()
  create(@Body() data: Partial<CreateMerchantDto>): Promise<Merchant> {
    return this.MerchantService.create(data)
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateMerchantDto: Partial<UpdateMerchantDto>
  ): Promise<Merchant> {
    return this.MerchantService.update(id, updateMerchantDto)
  }
}
