import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaboration } from './collaboration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collaboration])],
})
export class CollaborationsModule {}
