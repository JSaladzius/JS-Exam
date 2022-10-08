/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = a;
  this.b = b;
  console.log("Results are:");
  this.sum = function () {
    return `Sum:` + ` ` + `${this.a + this.b}`;
  };
  this.subtraction = function () {
    return `Difference:` + ` ` + `${this.a - this.b}`;
  };
  this.multiplication = function () {
    return `Product:` + ` ` + `${this.a * this.b}`;
  };
  this.division = function () {
    return `Quotient:` + ` ` + `${this.a / this.b}`;
  };
}

const numbers = new Calculator(2, 2);
console.log(numbers.sum());
console.log(numbers.subtraction());
console.log(numbers.multiplication());
console.log(numbers.division());
