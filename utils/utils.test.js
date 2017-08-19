const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        done();
      });
    });
  });



  it('should square a number', () => {
    var res = utils.square(4);

    expect(res).toBe(16).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
      expect(res).toBe(25);
      done();
    });
  });


});




// it('should expect some value', () => {
//   // expect(12).toNotBe(14);
//   // expect({name: 'Ryan'}).toEqual({name: 'Ryan'});
//   expect([2,3,4]).toInclude(3);
//   expect([2,3,4]).toNotInclude(5);
//
//   expect({
//     name: 'Ryan',
//     age: 44,
//     location: 'Litchfield Park'
//   }).toInclude({
//     age: 44
//   });
// });


it('should verify first and last names are set', () => {
  var user = {
    age: 44,
    location: 'Litchfield Park'
  };

  var res = utils.setName(user, 'Ryan Chamberlin');

  expect(user).toInclude({
    firstName: 'Ryan',
    lastName: 'Chamberlin'
  }).toBeA('object');
});
