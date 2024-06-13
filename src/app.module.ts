import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmocrmModule } from './amocrm/amocrm.module';
import { TestController } from './test/test.controller';

@Module({
  imports: [AmocrmModule],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
