import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

export interface Travel {
  id: number;
  country: string;
  city: string;
  description: string;
  price: number;
  discount: number;
}

@Injectable()
export class AppService {
  private travels: Travel[] = [
    { id: 1, country: 'Hungary', city: 'Budapest', description: 'Wonderful city', price: 20000, discount: 0 },
  ];

  getAllTravels() {
    return this.travels;
  }

  getTravelById(id: string) {
    return this.travels.find(travel => travel.id === parseInt(id));
  }

  createTravel(createTravelDto: CreateTravelDto) {
    const newTravel: Travel = {
      id: this.travels.length + 1,
      ...createTravelDto,
    };
    this.travels.push(newTravel);
    return newTravel;
  }

  updateTravel(id: string, updateTravelDto: UpdateTravelDto) {
    const travel = this.travels.find(t => t.id === parseInt(id));
    if (travel) {
      Object.assign(travel, updateTravelDto);
      return travel;
    }
    return null;
  }

  deleteTravel(id: string) {
    const index = this.travels.findIndex(travel => travel.id === parseInt(id));
    if (index !== -1) {
      this.travels.splice(index, 1);
      return { message: 'Travel deleted successfully' };
    }
    return null;
  }
}
