import supertest from 'supertest';
import test from './testEnv';
const request = supertest(test.baseUrl);

export default request;
