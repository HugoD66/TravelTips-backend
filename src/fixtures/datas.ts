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

@Injectable()
export class Mockups {
  constructor(private usersService: UsersService) {}

  static generateAllData(): any {
    const country = this.generateCountry();
    const city = this.generateCity();
    city.idCountry = country;

    const user = this.generateUser();
    const category = this.generateCategory();

    const tip = this.generateTip();
    tip.idUser = user;
    tip.idCity = city;

    const comment = this.generateComment();
    comment.idTips = tip;
    comment.idUser = user;

    const rate = this.generateRate();
    rate.idUser = user.id;
    rate.idTips = tip.id;

    const itinerary = this.generateItinerary();
    itinerary.idUser = user;
    itinerary.idCategory = category;

    const dayItinerary = this.generateDayItinerary();
    dayItinerary.idItinerary = itinerary;
    dayItinerary.idTips = tip;

    return {
      country,
      city,
      user,
      category,
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
    city.idCountry = this.generateCountry();
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
    tip.idUser = this.generateUser();
    tip.idCity = this.generateCity();
    return tip;
  }

  static generateComment(): Comment {
    const comment = new Comment();
    comment.comment = 'Très bon café, ambiance agréable.';
    comment.date = new Date();
    comment.idTips = this.generateTip();
    comment.idUser = this.generateUser();
    return comment;
  }

  static generateRate(): Rate {
    const rate = new Rate();
    rate.idUser = this.generateUser().id;
    rate.idTips = this.generateTip().id;
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
    itinerary.idCategory = this.generateCategory();
    itinerary.idUser = this.generateUser();
    return itinerary;
  }

  static generateDayItinerary(): DayItinerary {
    const dayItinerary = new DayItinerary();
    dayItinerary.OrderInDay = 1;
    dayItinerary.date = new Date();
    dayItinerary.idItinerary = this.generateItinerary();
    dayItinerary.idTips = this.generateTip();
    return dayItinerary;
  }
}
