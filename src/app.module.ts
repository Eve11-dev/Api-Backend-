import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CategoryController } from './category/category.controller';
import { ContryesModule } from './contryes/contryes.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [MenuModule, ContryesModule, CategoryModule],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
