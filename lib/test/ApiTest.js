console.log(`Running tests`);

var expect = require('expect');

describe('addition', () => {
  describe('positive numbers', () => {
    it('should add up and green', () => {
      expect(1 + 2).toBe(3);
    });
  });
});
