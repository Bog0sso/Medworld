import { Test, TestingModule } from '@nestjs/testing';
import { BlousesService } from './blouses.service';

describe('BlousesService', () => {
  let service: BlousesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlousesService],
    }).compile();

    service = module.get<BlousesService>(BlousesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
