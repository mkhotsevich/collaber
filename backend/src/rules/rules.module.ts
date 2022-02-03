import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rule } from './rule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rule])],
})
export class RulesModule {}
