import { Test, TestingModule } from '@nestjs/testing';
import { BlocTenuesController } from './bloc-tenues.controller';
import { BlocTenuesService } from './bloc-tenues.service';

describe('BlocTenuesController', () => {
  let controller: BlocTenuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlocTenuesController],
      providers: [BlocTenuesService],
    }).compile();

    controller = module.get<BlocTenuesController>(BlocTenuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
