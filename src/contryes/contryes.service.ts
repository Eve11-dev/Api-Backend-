import { Injectable } from '@nestjs/common';
import { CreateContryeDto } from './dto/create-contrye.dto';
import { UpdateContryeDto } from './dto/update-contrye.dto';


@Injectable()
export class ContryesService {
  create(createContryeDto: CreateContryeDto) {
    return 'This action adds a new contrye';
  }

  findAll() {
    return `This action returns all contryes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contrye`;
  }

  update(id: number, updateContryeDto: UpdateContryeDto) {
    return `This action updates a #${id} contrye`;
  }

  remove(id: number) {
    return `This action removes a #${id} contrye`;
  }
}
