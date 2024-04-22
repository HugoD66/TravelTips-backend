import { Injectable } from '@nestjs/common';
import { UserRole } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { CountryService } from '../country/country.service';
import { CityService } from '../city/city.service';
import { CategoryService } from '../category/category.service';
import { TipsService } from '../tips/tips.service';
import { RateService } from '../rate/rate.service';
import { CommentService } from '../comment/comment.service';
import { ItineraryService } from '../itinerary/itinerary.service';
import { DayItineraryService } from '../day-itinerary/day-itinerary.service';
import { TipsApprovate } from 'src/tips/entities/tip.entity';

@Injectable()
export class Mockups {
  constructor(
    private usersService: UsersService,
    private countryService: CountryService,
    private cityService: CityService,
    private categoryService: CategoryService,
    private tipsService: TipsService,
    private rateService: RateService,
    private commentService: CommentService,
    private itineraryService: ItineraryService,
    private dayItineraryService: DayItineraryService,
  ) {}
  async seedAll() {
    await this.generateUser();
    await this.generateCountry();
    await this.generateCity();
    await this.generateCategory();
    await this.generateTips();
    await this.generateRate();
    await this.generateComment();
    await this.generateItinerary();
    await this.generateInineraryDay();
  }

  async generateUser() {
    await this.usersService.create({
      firstName: 'JeanAdmin',
      lastName: 'DupontAdmin',
      birthday: '1990-05-15',
      mail: 'jeandupontadmin@example.com',
      role: UserRole.Admin,
      password: 'Azeaze.11',
    });
    await this.usersService.create({
      firstName: 'JeanUser',
      lastName: 'DupontUser',
      birthday: '1990-05-15',
      mail: 'jeandupontuser@example.com',
      role: UserRole.User,
      password: 'Azeaze.11',
    });
    await this.usersService.create({
      firstName: 'Jeanne',
      lastName: 'Dupontne',
      birthday: '1990-05-15',
      mail: 'jeannedupont@example.com',
      role: UserRole.User,
      password: 'Azeaze.11',
    });
  }
  async generateCountry() {
    await this.countryService.create({
      name: 'France',
    });
  }

  async generateCity() {
    const countryList = await this.countryService.findAll();
    await this.cityService.create({
      name: 'Bordeaux',
      zipCode: '33000',
      idCountry: countryList[Math.floor(Math.random() * countryList.length)].id,
    });
  }

  async generateCategory() {
    await this.categoryService.create({
      name: 'Tourisme',
    });
  }
  async generateTips() {
    const cityList = await this.cityService.findAll();
    const user = await this.usersService.findAll();

    await this.tipsService.create({
      name: 'Café de la Gare',
      adress: 'Place de la Comédie',
      price: 3,
      approvate: TipsApprovate.Pending,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: cityList[Math.floor(Math.random() * cityList.length)].id,
      lat: '44.837789',
      lng: '-0.57918',
    });
  }
  async generateRate() {
    const user = await this.usersService.findAll();
    const tips = await this.tipsService.findAll();

    await this.rateService.create({
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idTips: tips[Math.floor(Math.random() * tips.length)].id,
      note: 4,
    });
  }

  async generateComment() {
    const user = await this.usersService.findAll();
    const tips = await this.tipsService.findAll();

    await this.commentService.create({
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idTips: tips[Math.floor(Math.random() * tips.length)].id,
      comment:
        'Très bon café, ambiance agréable. ,Le personnel est sympathique et le service est rapide , Je recommande vivement ce café à tous ceux qui visitent la région.',
      date: new Date(),
    });
  }

  async generateItinerary() {
    const user = await this.usersService.findAll();
    const category = await this.categoryService.findAll();

    const dayOne = new Date();
    const lastDay = new Date(dayOne);
    lastDay.setDate(dayOne.getDate() + 2);

    await this.itineraryService.create({
      name: 'Découverte de Bordeaux',
      numberDay: 3,
      dayOne: dayOne,
      lastDay: lastDay,
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });
  }

  async generateInineraryDay() {
    const itinerary = await this.itineraryService.findAll();
    const tips = await this.tipsService.findAll();

    await this.dayItineraryService.create({
      idDay: itinerary[Math.floor(Math.random() * itinerary.length)].id,
      OrderInDay: 1,
      date: new Date(),
      idItinerary: itinerary[Math.floor(Math.random() * itinerary.length)].id,
      idTips: tips[Math.floor(Math.random() * tips.length)].id,
    });
  }
}
