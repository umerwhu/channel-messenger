import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ChannelModule } from '../src/channel/channel.module';

describe('ChannelController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ChannelModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ Add Channel', async () => {
    const result = await request(app.getHttpServer())
      .post('/channels')
      .send({name: 'email'})
      .then(response => response.body)
      console.log(result); 
      expect(201)
      return expect(result.id).toBe(1)     
  });

  afterAll(async () => {
    await app.close();
  });
});
