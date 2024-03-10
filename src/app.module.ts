import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';

//=> 延伸
import { UserModule } from './user/user.module';
import { UUIDService } from './uuid/uuid.service';
import { UuidModule } from './uuid/uuid.module';
import { ClockService } from './clock/clock.service';
import { ClockModule } from './clock/clock.module';
import { AllExceptionsFilter } from './all-exceptions.filter';

//=>=======

@Module({
  imports: [UserModule, UuidModule, ClockModule],
  controllers: [AppController],
  providers: [AppService, UUIDService, ClockService,{
    provide: APP_FILTER,
    useClass: AllExceptionsFilter,
  }],
})
export class AppModule {}
