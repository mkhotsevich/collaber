import { Collaboration } from 'src/collaborations/collaboration.entity';
import { Respond } from 'src/responds/respond.entity';
import { Role } from 'src/roles/role.entity';
import { Subscription } from 'src/subscriptions/subscription.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({})
  username: string;

  @Column()
  phone: string;

  @Column()
  telegram: string;

  @Column()
  instagram: string;

  @Column()
  vk: string;

  @Column()
  tiktok: string;

  @Column()
  youtube: string;

  @Column()
  avatar: string;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;

  @ManyToOne(() => Subscription, (subscription) => subscription.id)
  subscription: Subscription;

  @OneToOne(() => Respond, (respond) => respond.user)
  respond: Respond;

  @OneToOne(() => Collaboration, (collaboration) => collaboration.owner)
  collaboration: Collaboration;
}
