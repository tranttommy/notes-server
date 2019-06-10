require('dotenv').config();
require('../utils/data-helpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('notes routes', () => {
  it('creates a note', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({
        title: 'My Cool Title',
        body: 'My Cool Body',
        comment: 'My Cool Comment'
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
