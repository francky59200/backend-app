import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as dotenv from 'dotenv'
import { ValidationPipe } from '@nestjs/common'

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // supprime les champs non attendus
      forbidNonWhitelisted: true, // lève une erreur si champs non attendus
      transform: true, // transforme automatiquement les types (string -> number etc.)
    })
  )
  await app.listen(process.env.PORT ?? 5000)
}
bootstrap()
