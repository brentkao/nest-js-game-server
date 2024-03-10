import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserServiceInterface', // 注入時 tag 的標籤
      useClass: UserService, // 服務的實體
    },
  ],
})
export class UserModule {}