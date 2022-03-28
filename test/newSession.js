import request from '../config/newSessionSuperTest';
import { expect } from 'chai';
const url = '';
const {
  createInvalidDataSet,
  createValidDataSet,
  createDefaultDataSet,
  createEmptyDataSet,
} = require('../helper/randomData');

xdescribe('New Session Endpoint', () => {
  describe('Positive flows', () => {
    it('POST/ with default data set', async () => {
      const data = await createDefaultDataSet();
      return await request
        .post(url)
        .send(data)
        .then((response) => {
          expect(response.status).to.be.equal(200);
          expect(response.body).to.not.be.empty;
        });
    });

    it('POST/ with default data set as empty ', async () => {
      const data = await createEmptyDataSet();
      return await request
        .post(url)
        .send(data)
        .then((response) => {
          expect(response.status).to.be.equal(200);
          expect(response.body).to.not.be.empty;
        });
    });

    it('POST/ with valid values for all inputs ', async () => {
      const data = await createValidDataSet();
      return await request
        .post(url)
        .send(data)
        .then((response) => {
          expect(response.status).to.be.equal(200);
          expect(response.body).to.not.be.empty;
        });
    });

    it('GET/ new session ', async () => {
      return await request.get(url).then((response) => {
        expect(response.status).to.be.equal(200);
      });
    });
  });

  describe('Negative flows', () => {
    it('POST/ with null data set ', async () => {
      const data = {};
      return await request
        .post(url)
        .send(data)
        .then((response) => {
          expect(response.status).to.be.equal(500);
        });
    });

    it('POST/ with invalid data for some inputs', async () => {
      const data = await createInvalidDataSet();
      return await request
        .post(url)
        .send(data)
        .then((response) => {
          expect(response.status).to.be.equal(400);
        });
    });
  });
});
