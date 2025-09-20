import { Test, TestingModule } from '@nestjs/testing';
import { QueueClientController } from './queue-client.controller';

describe('QueueClientController', () => {
  let controller: QueueClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueueClientController],
    }).compile();

    controller = module.get<QueueClientController>(QueueClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
