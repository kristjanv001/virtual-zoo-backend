import { Test, TestingModule } from '@nestjs/testing';
import { HologramsController } from './holograms.controller';

describe('HologramsController', () => {
  let controller: HologramsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HologramsController],
    }).compile();

    controller = module.get<HologramsController>(HologramsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
