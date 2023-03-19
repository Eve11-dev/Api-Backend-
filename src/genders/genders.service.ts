import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
const db =[
  {
  id:1,
  name:'Hola',
  
 },
 {
  id:2,
  name:'JUan',
  
 },
 {
  id:3,
  name:'Hola',
 }
]

@Injectable()
export class GendersService {
  create(createGenderDto: CreateGenderDto) {
    return 'This action adds a new gender';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} gender`;
  }

  update(id: number, updateGenderDto: UpdateGenderDto) {
    return `This action updates a #${id} gender`;
  }

  remove(id: number) {
    return `This action removes a #${id} gender`;
  }
}
