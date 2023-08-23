import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesService {

  constructor(
    private prismaService: PrismaService,
  ) { }

  async create(createRouteDto: CreateRouteDto) {
    return await this.prismaService.route.create({
      data: {
        name: createRouteDto.name,
        source: createRouteDto.source,
        destination: createRouteDto.destination,
      }
    });
  }

  async findAll() {
    return await this.prismaService.route.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.route.findUniqueOrThrow({
      where: { id: String(id) } 
    });
  }

  async update(id: string, updateRouteDto: UpdateRouteDto) {
    return await this.prismaService.route.update({
      where: { id: String(id) },
      data: updateRouteDto
    });
  }

  async remove(id: string) {
    const routeFound = await this.findOne(id);
    if (!routeFound) {
      throw new NotFoundException(`Route with ID ${id} not found`);
    }
    
    return await this.prismaService.route.delete({
      where: { id: String(id) }
    });
  }
}
