import supertest from 'supertest';
require('dotenv').config();

const sessionsURL = process.env.SESSIONS_URL;
const request = supertest(sessionsURL);

export default request;
