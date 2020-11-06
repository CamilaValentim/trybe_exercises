
const { TestScheduler } = require('jest');
const myRemove = require('./myRemove');

test('remoçao do numero 3', () => {
    expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]);
  });

test('retornar um novo array', () => {
    expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
});

test('retornar um array diferente', () => {
    const myArray = [1,2,3,4];
    myRemove(myArray,1);
    expect(myArray).toEqual([1,2,3,4]);
});

test('retornar um  array', () => {
    expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4]);
});
