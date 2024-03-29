import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: '使用者全名',
  })
  fullName: string;

  @ApiProperty({
    description: 'user email',
  })
  email: string;

  @ApiProperty({
    description: 'user password',
  })
  password: string;

  @ApiProperty({
    description: '電話號碼',
  })
  phoneNumber: string;

  @ApiProperty({
    description: '使用者名稱',
  })
  userName: string;
}