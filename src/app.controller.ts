import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Controller('travels')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTravels() {
    return this.appService.getAllTravels();
  }

  @Get(':id')
  getTravelById(@Param('id') id: string) {
    return this.appService.getTravelById(id);
  }

  @Post()
  createTravel(@Body() createTravelDto: CreateTravelDto) {
    return this.appService.createTravel(createTravelDto);
  }

  @Patch(':id')
  updateTravel(@Param('id') id: string, @Body() updateTravelDto: UpdateTravelDto) {
    return this.appService.updateTravel(id, updateTravelDto);
  }

  @Delete(':id')
  deleteTravel(@Param('id') id: string) {
    return this.appService.deleteTravel(id);
  }
}
