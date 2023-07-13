import { Test, TestingModule } from '@nestjs/testing';
import { PixService } from './pix.service';

describe('PixService', () => {
  let service: PixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PixService],
    }).compile();

    service = module.get<PixService>(PixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
