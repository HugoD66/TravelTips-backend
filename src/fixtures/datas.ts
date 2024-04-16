import { Injectable } from '@nestjs/common';
import { Country } from '../country/entities/country.entity';
import { City } from '../city/entities/city.entity';
import User, { UserRole } from '../users/entities/user.entity';
import { Tip } from '../tips/entities/tip.entity';
import { Comment } from '../comment/entities/comment.entity';
import { Rate } from '../rate/entities/rate.entity';
import { Category } from '../category/entities/category.entity';
import { Itinerary } from '../itinerary/entities/itinerary.entity';
import { DayItinerary } from '../day-itinerary/entities/day-itinerary.entity';
import { UsersService } from '../users/users.service';
import { CountryService } from '../country/country.service';
import { CityService } from '../city/city.service';
import { CategoryService } from '../category/category.service';
import { TipsService } from '../tips/tips.service';
import { RateService } from '../rate/rate.service';
import { CommentService } from '../comment/comment.service';
import { ItineraryService } from '../itinerary/itinerary.service';
import { DayItineraryService } from '../day-itinerary/day-itinerary.service';

/*

const tip = this.generateTip();
const comment = this.generateComment();
const rate = this.generateRate();
const itinerary = this.generateItinerary();
const dayItinerary = this.generateDayItinerary();
 */

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
      firstName: 'Jean',
      lastName: 'Dupont',
      birthday: '1990-05-15',
      mail: 'jeandupont@example.com',
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
      numberAdress: 1,
      adress: 'Place de la Comédie',
      price: 3,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: cityList[Math.floor(Math.random() * cityList.length)].id,
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

      //idItinerary: itinerary[Math.floor(Math.random() * itinerary.length)].id,
      //idTips: tips[Math.floor(Math.random() * tips.length)].id,
    });
  }
}

/*


import { Injectable } from '@nestjs/common';
import { Country } from '../country/entities/country.entity';
import { City } from '../city/entities/city.entity';
import User, { UserRole } from '../users/entities/user.entity';
import { Tip } from '../tips/entities/tip.entity';
import { Comment } from '../comment/entities/comment.entity';
import { Rate } from '../rate/entities/rate.entity';
import { Category } from '../category/entities/category.entity';
import { Itinerary } from '../itinerary/entities/itinerary.entity';
import { DayItinerary } from '../day-itinerary/entities/day-itinerary.entity';

@Injectable()
export class Mockups {
  static user: User;
  static country: Country;
  static city: City;
  static category: Category;

  static init() {
    this.user = this.generateUser();
    this.country = this.generateCountry();
    this.city = this.generateCity();
    this.city.idCountry = this.country;
    this.category = this.generateCategory();
  }

  static generateAllData(): any {
    const tip = this.generateTip();
    const comment = this.generateComment();
    const rate = this.generateRate();
    const itinerary = this.generateItinerary();
    const dayItinerary = this.generateDayItinerary();

    return {
      country: this.country,
      city: this.city,
      user: this.user,
      category: this.category,
      tip,
      comment,
      rate,
      itinerary,
      dayItinerary,
    };
  }

  static generateCountry(): Country {
    const country = new Country();
    country.name = 'France';
    return country;
  }

  static generateCity(): City {
    const city = new City();
    city.name = 'Bordeaux';
    city.zipCode = 33000;
    city.idCountry = this.country; // Use the single instance of country
    return city;
  }

  static generateUser(): User {
    const user = new User();
    user.firstName = 'Jean';
    user.lastName = 'Dupont';
    user.birthday = '1990-05-15';
    user.mail = 'jeandupont@example.com';
    user.password = 'hashedpassword';
    user.role = UserRole.User;
    return user;
  }

  static generateTip(): Tip {
    const tip = new Tip();
    tip.name = 'Café de la Gare';
    tip.numberAdress = 1;
    tip.adress = 'Place de la Comédie';
    tip.price = 3;
    tip.idUser = this.user; // Use the single instance of user
    tip.idCity = this.city; // Use the single instance of city
    return tip;
  }

  static generateComment(): Comment {
    const comment = new Comment();
    comment.comment = 'Très bon café, ambiance agréable.';
    comment.date = new Date();
    comment.idTips = this.generateTip(); // Creates a new Tip instance
    comment.idUser = this.user; // Use the single instance of user
    return comment;
  }

  static generateRate(): Rate {
    const rate = new Rate();
    rate.idUser = this.user.id; // Use the ID of the single user instance
    rate.idTips = this.generateTip().id; // Creates a new Tip and uses its ID
    rate.note = '4.5';
    return rate;
  }

  static generateCategory(): Category {
    const category = new Category();
    category.name = 'Tourisme';
    return category;
  }

  static generateItinerary(): Itinerary {
    const itinerary = new Itinerary();
    itinerary.name = 'Découverte de Bordeaux';
    itinerary.numberDay = 3;
    itinerary.dayOne = new Date();
    itinerary.lastDay = new Date();
    itinerary.idCategory = this.category; // Use the single instance of category
    itinerary.idUser = this.user; // Use the single instance of user
    return itinerary;
  }

  static generateDayItinerary(): DayItinerary {
    const dayItinerary = new DayItinerary();
    dayItinerary.OrderInDay = 1;
    dayItinerary.date = new Date();
    dayItinerary.idItinerary = this.generateItinerary(); // Creates a new Itinerary instance
    dayItinerary.idTips = this.generateTip(); // Creates a new Tip instance
    return dayItinerary;
  }
}

Mockups.init(); // Initialize the static instances




 */
