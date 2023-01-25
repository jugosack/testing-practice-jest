const stringLength = require('./stringLength.js');


it('Jugoslav length equal 8', () => {
  expect(stringLength('Jugoslav')).toBe(8);
});

it('should be greater than zero', () => {
	expect(stringLength('Javascript')).toBeGreaterThan(1);
});
/*
it('should be at last one character', () => {
	expect(stringLength('')).toThrow();
});
*/
