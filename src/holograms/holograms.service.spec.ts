import { Test, TestingModule } from '@nestjs/testing';
import { HologramsService } from './holograms.service';

describe('HologramsService', () => {
  let service: HologramsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HologramsService],
    }).compile();

    service = module.get<HologramsService>(HologramsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
