import { Controller, Post } from '@nestjs/common';
import { FixturesService } from './fixtures.service';

@Controller('fixtures')
export class FixturesController {
  constructor(private readonly fixturesService: FixturesService) {}

  @Post(`mockups`)
  async createMockups() {
    return this.fixturesService.seedMockups();
  }
}
