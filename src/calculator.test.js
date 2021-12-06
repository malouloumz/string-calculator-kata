const { Calculator } = require("./calculator");

describe("Calculator", () => {
  const calculator = new Calculator();

  it('zero for empty string ', () => {
    expect(calculator.add('')).toEqual(0);
  });

  it('number for single number string', () => {
    expect(calculator.add('2')).toEqual(2);
    expect(calculator.add('1')).toEqual(1);
  });

  it('sum of 2 numbers', () => {
    expect(calculator.add('1,2')).toEqual(3);
    expect(calculator.add('3,4')).toEqual(7);
  });

  it('newline delimited returns the sum', () => {
    expect(calculator.add('1\n2')).toEqual(3);
    expect(calculator.add('6\n4')).toEqual(10);
  });

  it('three numbers delimited either way returns the sum', () => {
    expect(calculator.add('2\n3,4')).toEqual(9);
  });
});
