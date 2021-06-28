
const supertest = require('supertest');
const { server } = require('../src/server');
const req = supertest(server);


describe('Api server', () => {
  test('handles invalid req', async () => {
    const res = await req.get('/foo');
    expect(res.status).toEqual(404);
  });

  it('handles error req', async () => {
    const res = await req.get('/bad');
    expect(res.status).toEqual(500);
  });

  test('handles correct req', async () => {
    const res = await req.get('/');
    expect(res.status).toEqual(200);
  });


});




