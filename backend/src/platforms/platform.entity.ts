import { Collaboration } from 'src/collaborations/collaboration.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  name: string;

  @OneToMany(() => Collaboration, (collaboration) => collaboration.platform)
  collaborations: Collaboration[];
}
