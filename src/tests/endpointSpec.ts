import supertest from 'supertest';
import app from '../index';

const server = supertest(app);

describe('Checking endpoint testing', () => {
  describe('Checking the Orignal Image', () => {
    it('Image not exists', async () => {
      const result = await server.get('/image').query({
        name: 'website.png',
        width: '200',
        height: '200',
      });
      expect(result.status).toBe(401);
    });
    afterEach((done)=>{
      done();
    })
  });

  describe('Checking first and muti-accessing', () => {
    it('first Access', async () => {
      const result = await server.get('/image').query({
        name: 'website.jpg',
        width: '200',
        height: '200',
      });
      expect(result.status).toBe(200);
    });

    it('subsequent Access', async () => {
      const result = await server.get('/image').query({
        name: 'website.jpg',
        width: '200',
        height: '200',
      });
      expect(result.status).toBe(201);
    });

    afterEach((done)=>{
      done();
    })
  });
  describe('Checking wrong parameters', () => {
    it('No queries have been set', async () => {
      const result = await server.get('/image');
      expect(result.status).toBe(400);
    });
    it('width or height parameter is missing', async () => {
      const result = await server.get('/image').query({
        name: 'website.jpg',
      });
      expect(result.status).toBe(402);
    });
    
    afterEach((done)=>{
      done();
    })
  });
});
