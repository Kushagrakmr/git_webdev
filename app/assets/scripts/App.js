//ES6 way of importing 
import Person from './modules/Person';

class Adult extends Person {
  patTaxes() {
    console.log(this.name + " have zero tax");
  }
}
alert("Testing 123");

var kush = new Person("Kushagra", "blue");
kush.greet();

var rimmi = new Adult("Anamika", "ornage");
rimmi.greet();
rimmi.patTaxes();
