import { ApiProperty } from "@nestjs/swagger";

export class Place {
  @ApiProperty({ type: 'number', format: 'double' })
  lat: number;

  @ApiProperty({ type: 'number', format: 'double' })
  lng: number;
}

export class CreateRouteDto {

  @ApiProperty()
  name: string;

  @ApiProperty({ type: () => Place })
  source: Place;

  @ApiProperty({ type: () => Place })
  destination: Place;

}
