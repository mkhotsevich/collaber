import { Collaboration } from 'src/collaborations/collaboration.entity';
import { User } from 'src/users/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Respond {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  explanation: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @OneToOne(() => Collaboration, (collaboration) => collaboration.id)
  @JoinColumn()
  collaboration: Collaboration;
}
