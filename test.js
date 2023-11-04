const add = require('./index')
test('adds 1 + 2 to equal 3', async () => {
    expect(await add(1, 2)).toBe(3);
  });