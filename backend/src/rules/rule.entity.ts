import { Subscription } from 'src/subscriptions/subscription.entity';
import { Role } from 'src/roles/role.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Rule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Role, (role) => role.id)
  @JoinTable()
  roles: Role[];

  @ManyToMany(() => Subscription, (subscription) => subscription.id)
  @JoinTable()
  subscriptions: Subscription[];
}
