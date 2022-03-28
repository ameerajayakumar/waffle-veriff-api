import request from '../config/newSessionSuperTest';
const { createValidDataSet } = require('../helper/randomData');

export const createNewSession = async () => {
  const url = '';
  const data = await createValidDataSet();
  return await request
    .post(url)
    .send(data)
    .then((response) => {
      return response.body.sessionToken;
    });
};
