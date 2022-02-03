import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { RoleModule } from './roles/roles.module';
import { Role } from './roles/role.entity';
import { RulesModule } from './rules/rules.module';
import { Rule } from './rules/rule.entity';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { Subscription } from './subscriptions/subscription.entity';
import { RespondsModule } from './responds/responds.module';
import { Respond } from './responds/respond.entity';
import { CollaborationsModule } from './collaborations/collaborations.module';
import { Collaboration } from './collaborations/collaboration.entity';
import { CategoriesModule } from './categories/categories.module';
import { PlatformsModule } from './platforms/platforms.module';
import { Category } from './categories/category.entity';
import { Platform } from './platforms/platform.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [
        User,
        Role,
        Rule,
        Subscription,
        Respond,
        Collaboration,
        Category,
        Platform,
      ],
      synchronize: true,
    }),
    UsersModule,
    RoleModule,
    RulesModule,
    SubscriptionsModule,
    RespondsModule,
    CollaborationsModule,
    CategoriesModule,
    PlatformsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
