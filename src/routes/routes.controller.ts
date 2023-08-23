import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Routes')
@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  async create(@Body() createRouteDto: CreateRouteDto) {
    return await this.routesService.create(createRouteDto);
  }

  @Get()
  async findAll() {
    return await this.routesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.routesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return await this.routesService.update(id, updateRouteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.routesService.remove(id);
  }
}
