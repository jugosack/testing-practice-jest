const { capitalize } = require('./capitalize');

it('should return a capitalize text', () => {
	expect(capitalize('jugoslav')).toBe('Jugoslav');
});