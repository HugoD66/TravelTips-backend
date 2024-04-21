import { Injectable } from '@nestjs/common';

import { Mockups } from './datas';
@Injectable()
export class FixturesService {
  constructor(private datas: Mockups) {}
  async seedMockups() {
    await this.datas.seedAll();
    return 'Mockups created';
  }
}
