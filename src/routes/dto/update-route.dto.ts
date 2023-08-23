import { PartialType } from '@nestjs/mapped-types';
import { CreateRouteDto, Place } from './create-route.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRouteDto extends PartialType(CreateRouteDto) {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: () => Place })
  source: Place;

  @ApiProperty({ type: () => Place })
  destination: Place;
}
