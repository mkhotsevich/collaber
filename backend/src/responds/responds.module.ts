import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Respond } from './respond.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Respond])],
})
export class RespondsModule {}
