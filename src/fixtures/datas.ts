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
import { PictureService } from '../picture/picture.service';

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
    private pictureService: PictureService,
  ) {}
  async seedAll() {
    await this.generateUser();
    await this.generateCountry();
    await this.generateCity();
    await this.generateCategory();
    await this.generateItinerary();
    await this.generateTips();
    await this.generatePictures();
    await this.generateRate();
    await this.generateComment();
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
    await this.usersService.create({
      firstName: 'Hugo',
      lastName: 'Dessauw',
      birthday: '1992-09-22',
      mail: 'dessauw.hugo@example.com',
      role: UserRole.User,
      password: 'Azeaze.11',
    });
    await this.usersService.create({
      firstName: 'Melina',
      lastName: 'Mitterrand',
      birthday: '1992-09-22',
      mail: 'melina.mitterrand@example.com',
      role: UserRole.User,
      password: 'Azeaze.11',
    });
    await this.usersService.create({
      firstName: 'Hugon',
      lastName: 'Maurane',
      birthday: '1992-09-22',
      mail: 'maurane.hugon@example.com',
      role: UserRole.User,
      password: 'Azeaze.11',
    });
  }

  async generateCountry() {
    await this.countryService.create({
      name: 'France',
    });
    await this.countryService.create({
      name: 'Canada',
    });
    await this.countryService.create({
      name: 'Iceland',
    });
    await this.countryService.create({
      name: 'Italy',
    });
  }

  async generatePictures() {
    const tip = await this.tipsService.findAll();
    const user = await this.usersService.findAll();
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-1.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-2.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-3.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-4.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-5.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-6.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-7.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-8.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-9.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-10.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-11.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-12.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
    await this.pictureService.create({
      url: 'uploads\\fixtures\\fixture-13.jpg',
      createdBy: user[Math.floor(Math.random() * user.length)].id,
      idTips: tip[Math.floor(Math.random() * tip.length)],
    });
  }

  async generateCity() {
    const french = await this.countryService.findOneByName('France');
    const canada = await this.countryService.findOneByName('Canada');
    const iceland = await this.countryService.findOneByName('Iceland');
    const italy = await this.countryService.findOneByName('Italy');
    await this.cityService.create({
      name: 'Bordeaux',
      zipCode: '33000',
      idCountry: french.id,
    });
    await this.cityService.create({
      name: 'Tours',
      zipCode: '37000',
      idCountry: french.id,
    });
    await this.cityService.create({
      name: 'Toronto',
      zipCode: 'M1L - M9N',
      idCountry: canada.id,
    });
    await this.cityService.create({
      name: 'Ottawa',
      zipCode: 'H0A - K4C',
      idCountry: canada.id,
    });
    await this.cityService.create({
      name: 'Reykjavik',
      zipCode: '16464',
      idCountry: iceland.id,
    });
    await this.cityService.create({
      name: 'Rome',
      zipCode: '00042',
      idCountry: italy.id,
    });
  }

  async generateCategory() {
    await this.categoryService.create({
      name: 'Tourisme',
      idItinerary: [],
    });
    await this.categoryService.create({
      name: 'Trip',
      idItinerary: [],
    });
    await this.categoryService.create({
      name: 'Découverte',
      idItinerary: [],
    });
    await this.categoryService.create({
      name: 'Soirées',
      idItinerary: [],
    });
    await this.categoryService.create({
      name: 'Culture locale',
      idItinerary: [],
    });
    await this.categoryService.create({
      name: 'Aventure',
      idItinerary: [],
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
      nbApprovate: 2,
      public: true,
      approvate: TipsApprovate.Approvate,
      dayItinerary: [],
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });

    await this.itineraryService.create({
      name: 'Visite de musé',
      numberDay: 2,
      dayOne: dayOne,
      lastDay: lastDay,
      nbApprovate: 0,
      public: true,
      approvate: TipsApprovate.Disapprovate,
      dayItinerary: [],
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });

    await this.itineraryService.create({
      name: 'Promenade en villes',
      numberDay: 3,
      dayOne: dayOne,
      lastDay: lastDay,
      nbApprovate: 3,
      public: true,
      approvate: TipsApprovate.Pending,
      dayItinerary: [],
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });

    await this.itineraryService.create({
      name: 'Lieux insolites',
      numberDay: 3,
      dayOne: dayOne,
      lastDay: lastDay,
      nbApprovate: 1,
      public: true,
      approvate: TipsApprovate.Pending,
      dayItinerary: [],
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });

    await this.itineraryService.create({
      name: 'Lieux multiples',
      numberDay: 3,
      dayOne: dayOne,
      lastDay: lastDay,
      nbApprovate: 1,
      public: true,
      approvate: TipsApprovate.Approvate,
      dayItinerary: [],
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });

    await this.itineraryService.create({
      name: 'Route des vins',
      numberDay: 2,
      dayOne: dayOne,
      lastDay: lastDay,
      nbApprovate: 2,
      public: true,
      approvate: TipsApprovate.Pending,
      dayItinerary: [],
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });

    await this.itineraryService.create({
      name: 'Escapade nature',
      numberDay: 4,
      dayOne: dayOne,
      lastDay: lastDay,
      nbApprovate: 2,
      public: true,
      approvate: TipsApprovate.Approvate,
      dayItinerary: [],
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });

    await this.itineraryService.create({
      name: 'Gastronomie régionale',
      numberDay: 1,
      dayOne: dayOne,
      lastDay: lastDay,
      nbApprovate: 0,
      public: true,
      approvate: TipsApprovate.Disapprovate,
      dayItinerary: [],
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });

    await this.itineraryService.create({
      name: 'Festival et événements',
      numberDay: 3,
      dayOne: dayOne,
      lastDay: lastDay,
      nbApprovate: 4,
      public: true,
      approvate: TipsApprovate.Approvate,
      dayItinerary: [],
      idCategory: category[Math.floor(Math.random() * category.length)].id,
      idUser: user[Math.floor(Math.random() * user.length)].id,
    });
  }

  async generateTips() {
    const user = await this.usersService.findAll();
    const bordeauxCity =
      await this.cityService.fixtureCityGeneration('Bordeaux');
    const toursCity = await this.cityService.fixtureCityGeneration('Tours');
    const torontoCity = await this.cityService.fixtureCityGeneration('Toronto');
    const reykjavikCity =
      await this.cityService.fixtureCityGeneration('Reykjavik');
    const romeCity = await this.cityService.fixtureCityGeneration('Rome');
    const ottawaCity = await this.cityService.fixtureCityGeneration('Ottawa');

    //Rome
    await this.tipsService.create({
      name: 'Trattoria Romana',
      address: 'Trastevere',
      price: 30,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: romeCity.id,
      lat: '41.887856',
      lng: '12.469498',
      nbApprovate: 3,
      createdAt: new Date(),
    });

    await this.tipsService.create({
      name: 'Gelateria del Corso',
      address: 'Via del Corso',
      price: 5,
      approvate: TipsApprovate.Pending,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: romeCity.id,
      lat: '41.902783',
      lng: '12.496366',
      nbApprovate: 2,
      createdAt: new Date(),
    });

    await this.tipsService.create({
      name: 'Trattoria Romana',
      address: 'Trastevere',
      price: 30,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: romeCity.id,
      lat: '41.887856',
      lng: '12.469498',
      nbApprovate: 3,
      createdAt: new Date(),
    });

    // Reykjavik

    await this.tipsService.create({
      name: 'Bains géothermiques de Reykjavik',
      address: 'Laugavegur',
      price: 30,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: reykjavikCity.id,
      lat: '64.146582',
      lng: '-21.942635',
      nbApprovate: 3,
      createdAt: new Date(),
    });

    await this.tipsService.create({
      name: "Musée national d'Islande",
      address: 'Suðurgata',
      price: 12,
      approvate: TipsApprovate.Pending,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: reykjavikCity.id,
      lat: '64.141718',
      lng: '-21.949422',
      nbApprovate: 1,
      createdAt: new Date(),
    });

    await this.tipsService.create({
      name: 'Promenade de la sculpture et de la rive',
      address: 'Sæbraut',
      price: 0,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: reykjavikCity.id,
      lat: '64.149780',
      lng: '-21.938399',
      nbApprovate: 1,
      createdAt: new Date(),
    });

    //Bordeaux
    await this.tipsService.create({
      name: 'Café de la Gare',
      address: 'Place de la Comédie',
      price: 44,
      approvate: TipsApprovate.Pending,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: bordeauxCity.id,
      lat: '44.814439',
      lng: '-0.643281',
      nbApprovate: 3,
      createdAt: new Date(),
    });

    await this.tipsService.create({
      name: 'Lieux agréable',
      address: 'Place de la Bourse',
      price: 70,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: bordeauxCity.id,
      lat: '44.783012',
      lng: '-0.555906',
      nbApprovate: 1,
      createdAt: new Date(),
    });
    await this.tipsService.create({
      name: 'Nature découverte',
      address: 'Place de la nature',
      price: 17,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: bordeauxCity.id,
      lat: '44.848891',
      lng: '-0.507497',
      nbApprovate: 2,
      createdAt: new Date(),
    });

    //Tours
    await this.tipsService.create({
      name: 'Nature découverte',
      address: 'Place de la nature',
      price: 51,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: toursCity.id,
      lat: '44.848891',
      lng: '-0.507497',
      nbApprovate: 2,
      createdAt: new Date(),
    });
    await this.tipsService.create({
      name: 'Nature découverte',
      address: 'Place de la nature',
      price: 16,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: toursCity.id,
      lat: '44.848891',
      lng: '-0.507497',
      nbApprovate: 2,
      createdAt: new Date(),
    });
    await this.tipsService.create({
      name: 'Jolie coin',
      address: 'Rue du coin',
      price: 90,
      approvate: TipsApprovate.Pending,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: toursCity.id,
      lat: '44.848891',
      lng: '-0.507497',
      nbApprovate: 2,
      createdAt: new Date(),
    });

    //Toronto
    await this.tipsService.create({
      name: "Zone d'activité",
      address: 'Place de la nature',
      price: 64,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: torontoCity.id,
      lat: '43.766914',
      lng: '-79.286161',
      nbApprovate: 2,
      createdAt: new Date(),
    });
    await this.tipsService.create({
      name: 'Belle nature',
      address: '126 Rue de la nature',
      price: 55,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: torontoCity.id,
      lat: '43.829926',
      lng: '-79.180122',
      nbApprovate: 2,
      createdAt: new Date(),
    });
    await this.tipsService.create({
      name: 'Café sympa',
      address: 'Place du café',
      price: 41,
      approvate: TipsApprovate.Pending,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: torontoCity.id,
      lat: '43.733685',
      lng: '-79.597060',
      nbApprovate: 2,
      createdAt: new Date(),
    });

    //Ottawa
    await this.tipsService.create({
      name: "Coin d'activité",
      address: "Place de l'activité",
      price: 44,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: ottawaCity.id,
      lat: '45.407056',
      lng: '-75.391058',
      nbApprovate: 2,
      createdAt: new Date(),
    });
    await this.tipsService.create({
      name: 'Joli coin',
      address: '126 Rue Joli coin',
      price: 12,
      approvate: TipsApprovate.Approvate,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: ottawaCity.id,
      lat: '45.396449',
      lng: '-75.690436',
      nbApprovate: 2,
      createdAt: new Date(),
    });
    await this.tipsService.create({
      name: 'Café sympa',
      address: '18 Place du café',
      price: 41,
      approvate: TipsApprovate.Pending,
      idUser: user[Math.floor(Math.random() * user.length)].id,
      idCity: ottawaCity.id,
      lat: '45.378124',
      lng: '-75.819525',
      nbApprovate: 2,
      createdAt: new Date(),
    });
  }

  async generateRate() {
    const users = await this.usersService.findAll();
    const tips = await this.tipsService.findAll();

    const limitedTips = tips.slice(0, 12);
    for (const tip of limitedTips) {
      for (let i = 0; i < 4; i++) {
        const user = users[Math.floor(Math.random() * users.length)];
        const note = Math.floor(Math.random() * 99) + 1;
        await this.rateService.create({
          idUser: user.id,
          idTips: tip.id,
          note: note,
        });
      }
    }
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

  async generateInineraryDay() {
    const itinerary = await this.itineraryService.findAll();
    const tips = await this.tipsService.findAll();
    const timeSlots = [
      '8h - 10h',
      '10h - 12h',
      '12h - 14h',
      '14h - 16h',
      '16h - 18h',
      '18h - 20h',
      '20h - 22h',
      '9h - 11h',
      '11h - 13h',
      '13h - 15h',
    ];

    for (let i = 0; i < 10; i++) {
      await this.dayItineraryService.create({
        idDay: itinerary[Math.floor(Math.random() * itinerary.length)].id,
        slot: timeSlots[i], // Assigns a unique time slot from the array for each iteration
        date: new Date(),
        idItinerary: itinerary[Math.floor(Math.random() * itinerary.length)].id,
        idTips: tips[Math.floor(Math.random() * tips.length)].id,
      });
    }
  }
}
