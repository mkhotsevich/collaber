import { Category } from 'src/categories/category.entity';
import { Platform } from 'src/platforms/platform.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Collaboration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  owner: User;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @ManyToOne(() => Platform, (platform) => platform.id)
  platform: Category;
}
