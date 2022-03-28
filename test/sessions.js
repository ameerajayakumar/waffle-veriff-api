import request from '../config/sessionsSuperTest';
import { expect } from 'chai';
const { createValidDataSet } = require('../helper/randomData');
const { createNewSession } = require('../helper/session_helper');
let token, data;
const url = '';

describe('Sessions Endpoint', () => {
  let sessionId;

  describe('Positive flows', () => {
    it('GET/ session return 200', async () => {
      token = await createNewSession();
      data = await createValidDataSet();
      return await request
        .get(url)
        .set('Authorization', `Bearer ${token}`)
        .then((response) => {
          expect(response.status).to.be.equal(200);
          //expect(response.body).to.be.json; --> requires npm install chai-json
          expect(response.body).to.not.be.empty;
          expect(response.body.status).to.be.equal('created');
          expect(response.body.initData.preselectedDocument.type).to.be.equal(
            data.document_type
          );
          expect(
            response.body.initData.preselectedDocument.country
          ).to.be.equal(data.document_country);
          expect(response.body.initData.language).to.be.equal(data.lang);
          expect(response.body.vendorIntegration).to.not.be.empty;
          expect(response.body).to.have.property('activeVerificationSession');
          sessionId = response.body.id;
        });
    });

    it('GET/ session with id', async () => {
      if (sessionId) {
        await request
          .get(`?id=${sessionId}`)
          .set('Authorization', `Bearer ${token}`)
          .expect(200);
      } else {
        throw new Error(`session ID is invalid - ${sessionId}`);
      }
    });

    describe('Negative flows', () => {
      it('GET/ request session without user authorization', async () => {
        token = await createNewSession();
        data = await createValidDataSet();
        return await request.get(url).then((response) => {
          expect(response.status).to.be.equal(401);
          expect(response.body.message).to.be.equal('Authentication failed');
        });
      });

      it('POST/ session with id: unsupported request', async () => {
        if (sessionId) {
          await request
            .post(`?id=${sessionId}`)
            .set('Authorization', `Bearer ${token}`)
            .expect(404);
        }
      });
    });
  });
});
