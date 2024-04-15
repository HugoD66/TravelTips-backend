import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFixtureDto } from './dto/create-fixture.dto';
import { UpdateFixtureDto } from './dto/update-fixture.dto';
import { Mockups } from './datas';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../users/entities/user.entity';
import { City } from '../city/entities/city.entity';
import { Country } from '../country/entities/country.entity';
import { Tip } from '../tips/entities/tip.entity';
import { Comment } from '../comment/entities/comment.entity';
import { Rate } from '../rate/entities/rate.entity';
import { Category } from '../category/entities/category.entity';
import { Itinerary } from '../itinerary/entities/itinerary.entity';
import { DayItinerary } from '../day-itinerary/entities/day-itinerary.entity';
import { Fixture } from './entities/fixture.entity';

@Injectable()
export class FixturesService {
  constructor(
    @InjectRepository(Country) private countryRepository: Repository<Country>,
    @InjectRepository(City) private cityRepository: Repository<City>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Tip) private tipRepository: Repository<Tip>,
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    @InjectRepository(Rate) private rateRepository: Repository<Rate>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Itinerary)
    private itineraryRepository: Repository<Itinerary>,
    @InjectRepository(DayItinerary)
    private dayItineraryRepository: Repository<DayItinerary>,
    private datas: Mockups,
  ) {}
  async seedMockups() {
    await this.datas.seedAll();
    /*
    await this.countryRepository.save(data.country);
    await this.cityRepository.save(data.city);
    await this.userRepository.save(data.user);
    await this.categoryRepository.save(data.category);
    await this.tipRepository.save(data.tip);
    await this.commentRepository.save(data.comment);
    await this.rateRepository.save(data.rate);
    await this.itineraryRepository.save(data.itinerary);
    await this.dayItineraryRepository.save(data.dayItinerary);
    */

    return 'Mockups created';
  }
}
