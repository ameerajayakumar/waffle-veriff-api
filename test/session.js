import request from '../config/superTest';
import { expect } from 'chai';
const faker = require('faker');
const url = '';

describe('New Session Endpoint', () => {
  describe('POST/ positive flows', () => {
    it('POST/ with default data set', async () => {
      const data = {
        full_name: faker.name.firstName() + ' ' + faker.name.lastName(),
        additionalData: { isTest: false },
      };
      const response = await request.post(url).send(data);
      expect(response.body).to.not.be.empty;
    });

    it('POST/ with default data set as empty ', async () => {
      const data = {
        full_name: '',
        additionalData: '',
      };
      const response = await request.post(url).send(data);
      expect(response.body).to.not.be.empty;
    });
  });

  describe('POST/ negative flows', () => {
    it('POST/ with null data set ', async () => {
      const data = {};
      const response = await request.post(url).send(data);
      expect(response.body).to.be.empty;
    });
  });
});
