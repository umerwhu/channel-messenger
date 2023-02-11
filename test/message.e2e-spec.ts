import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MessageModule } from '../src/message/message.module';

describe('MessageController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MessageModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ Write Message', async () => {
    const result = await request(app.getHttpServer())
      .post('/messages')
      .send({title: 'send code by email', content: 'please verify your code 52', channel: 'email'})
      .then(response => response.body)
      console.log(result); 
      expect(201)
      return expect(result.id).toBe(1)     
  });

  afterAll(async () => {
    await app.close();
  });
});
