import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ProductSchema } from "./user.model"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: ProductSchema}])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})

export class UsersModule {}
