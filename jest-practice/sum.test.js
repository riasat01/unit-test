const sumObject = require('./sum');

const { sum } = sumObject;
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('through invalid input error', () => {
    expect(() => {
        sum('a', 'b')
    }).toThrow();
})

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
})

test('truthy and falsy', () => {
    expect(null).toBeFalsy();
    expect('null').toBeTruthy();
})