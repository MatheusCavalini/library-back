import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id
      }
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      data,
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
