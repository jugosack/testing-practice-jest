const reverseString= require('./reverseString.js');

it('shoud return ba', () => {
	expect(reverseString('ab')).toBe('ba');
});

it('should return a string', () => {
	expect(typeof reverseString('test')).toBe('string');
});

it('car equal rac', () => {
    expect(reverseString("car")).toBe("rac");
  });
  
  it ('book equal koob', () => {
    expect(reverseString("book")).toBe("koob");
  });