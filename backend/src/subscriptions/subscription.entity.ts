import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Rule } from 'src/rules/rule.entity';
import { User } from 'src/users/user.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToMany(() => Rule, (rule) => rule.name)
  @JoinTable()
  rules: Rule[];

  @OneToMany(() => User, (user) => user.subscription)
  users: User[];
}
