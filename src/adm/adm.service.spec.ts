import { Test, TestingModule } from '@nestjs/testing';
import { AdmService } from './adm.service';

describe('AdmService', () => {
  let service: AdmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdmService],
    }).compile();

    service = module.get<AdmService>(AdmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
