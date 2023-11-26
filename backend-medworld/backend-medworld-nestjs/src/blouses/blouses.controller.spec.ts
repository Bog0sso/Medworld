import { Test, TestingModule } from '@nestjs/testing';
import { BlousesController } from './blouses.controller';
import { BlousesService } from './blouses.service';

describe('BlousesController', () => {
  let controller: BlousesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlousesController],
      providers: [BlousesService],
    }).compile();

    controller = module.get<BlousesController>(BlousesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
