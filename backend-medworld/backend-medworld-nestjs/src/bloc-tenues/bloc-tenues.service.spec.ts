import { Test, TestingModule } from '@nestjs/testing';
import { BlocTenuesService } from './bloc-tenues.service';

describe('BlocTenuesService', () => {
  let service: BlocTenuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlocTenuesService],
    }).compile();

    service = module.get<BlocTenuesService>(BlocTenuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
