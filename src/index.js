class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.initialValue = initialValue;
    //this.expression = "";
  }


  add(number) {
    // your implementation
    this.initialValue += number;
    return this;
  }

  subtract(number) {
    // your implementation
    this.initialValue -= number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.initialValue *= number;
    return this;
  }

  devide(number) {
    // your implementation
    this.initialValue /= number;
    return this;
  }
  pow(number) {
    // your implementation
    this.initialValue = Math.pow(this.initialValue, number);
    return this;
  }
 /* get result() {
    //return this.initialValue;
    return initialValue.initialValue;
  }*/
}
module.exports = SmartCalculator;