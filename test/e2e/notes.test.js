require('dotenv').config();
require('../utils/data-helpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('notes routes', () => {
  it('creates a note', () => {
    return request(app)
      .post('/notes')
      .send({
        title: 'My Cool Title',
        body: 'My Cool Body'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'My Cool Title',
          body: 'My Cool Body',
          __v: 0
        });
      });
  });
});
