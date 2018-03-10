class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.initialValue = initialValue.toString();
  }

  add(number) {
    // your implementation
    this.initialValue += '+' + number.toString();
    return this;
  }

  subtract(number) {
    // your implementation
    this.initialValue += '-' + number.toString();
    return this;
  }

  multiply(number) {
    // your implementation
    this.initialValue += '*' + number.toString();
    return this;
  }

  devide(number) {
    // your implementation
    this.initialValue += '/' + number.toString();
    return this;
  }

  pow(number) {
    // your implementation
    this.initialValue += '**' + number.toString();
    return this;
  }

  valueOf() {
    return eval(this.initialValue);
  }
}
module.exports = SmartCalculator;