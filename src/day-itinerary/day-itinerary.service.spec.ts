import { Test, TestingModule } from '@nestjs/testing';
import { DayItineraryService } from './day-itinerary.service';

describe('DayItineraryService', () => {
  let service: DayItineraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DayItineraryService],
    }).compile();

    service = module.get<DayItineraryService>(DayItineraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
