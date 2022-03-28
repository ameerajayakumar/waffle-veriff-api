import request from '../config/sessionsSuperTest';
import { expect } from 'chai';
const { createNewSession } = require('../helper/session_helper');
const token = '';

describe('Sessions Endpoint', () => {
  describe('Positive flows', () => {
    before(async () => {
      token = await createNewSession();
    });

    it('', () => {});
  });
  describe('Negative flows', () => {});
});
