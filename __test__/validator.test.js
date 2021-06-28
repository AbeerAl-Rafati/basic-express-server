

const validator = require('../src/middleware/validator');


describe('validator', () => {

  it('Should return name', async () => {

    let req = {
      query: { name: String },
    };
    let res = {};
    let next = jest.fn();

    validator(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });


  it('dit not return name', async () => {

    let req = {
      query: { name: '' },
    };
    let res = {};
    let next = jest.fn();

    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('errrorrr');
  });
});









