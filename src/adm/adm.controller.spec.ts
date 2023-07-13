import { Test, TestingModule } from '@nestjs/testing';
import { AdmController } from './adm.controller';

describe('AdmController', () => {
  let controller: AdmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdmController],
    }).compile();

    controller = module.get<AdmController>(AdmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
