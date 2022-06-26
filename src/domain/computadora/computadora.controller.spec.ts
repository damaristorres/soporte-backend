import { Test, TestingModule } from '@nestjs/testing';
import { ComputadoraController } from './computadora.controller';

describe('ComputadoraController', () => {
  let controller: ComputadoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputadoraController],
    }).compile();

    controller = module.get<ComputadoraController>(ComputadoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
