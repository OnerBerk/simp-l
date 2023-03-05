import supertest from 'supertest';
import { app } from '../index';

describe('Server', () => {
    const request = supertest.agent(app);
    it('should get /', () => {
        request.get('/').expect(200, { data: 'IT Works!' });
    });
});