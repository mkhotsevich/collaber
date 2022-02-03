import { Collaboration } from 'src/collaborations/collaboration.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  name: string;

  @OneToMany(() => Collaboration, (collaboration) => collaboration.category)
  collaborations: Collaboration[];
}
