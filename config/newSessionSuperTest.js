import supertest from 'supertest';
require('dotenv').config();

const newsessionURL = process.env.BASE_URL;
const request = supertest(newsessionURL);

export default request;
