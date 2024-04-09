import { Test, TestingModule } from '@nestjs/testing';
import { DayItineraryController } from './day-itinerary.controller';
import { DayItineraryService } from './day-itinerary.service';

describe('DayItineraryController', () => {
  let controller: DayItineraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DayItineraryController],
      providers: [DayItineraryService],
    }).compile();

    controller = module.get<DayItineraryController>(DayItineraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
