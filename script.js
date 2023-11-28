'use strict';

const Person = function(firstname, birthYear){
    this.firstname = firstname;
    this.birthYear = birthYear;
};

const yash  = new Person('Yash', 2002);
// console.log(yash);
// console.log(yash instanceof Person);

//prototypes
Person.prototype.clacAge = function(){
    console.log(2023 - this.birthYear);
};

// yash.clacAge();

// console.log(yash.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(yash));

const arr = [1,1,2,2,3,3,4,4,5];
 Array.prototype.unique= function(){
    return [...new Set(this)];
 }

// console.log(arr.unique());

//Coding challenge - 1
const Car = function(speed){
    this.speed = speed;
};
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(this.speed);
}

Car.prototype.break = function(){
    this.speed -= 5;
    console.log(this.speed);
};

// const car1 = new Car(100);
// car1.accelerate();
// car1.break();
// const car2 = new Car(100);
// car2.accelerate();
// car2.break();


// classes
 class PersonCl{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    clacAge(age){
        console.log( 2023 - age);
    }

    get age(){
        return 2023 - this.birthYear;
    }

    set fullName(name){
        if(name.includes(' '))
        this._fullName = name;
        else
        alert(`${name} is not full Name`);
    }

    get fullName(){
        return this._fullName;
    }

    static hey(){
        console.log('hello');
        console.log(this);
    }
 }

 const p1 = new PersonCl('abcd dfe', 2002);
//  console.log(p1.fullName);




 //getters and setters
 const account = {
    owner: 'Jonas',
    movements: [200,435,123,564,323],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        return this.movements.push(mov);
    }
 }

//  console.log(account.latest);
 account.latest = 999;
//  console.log(account.movements);

//object.create
const PersonProto ={
    clacAge(){
        console.log(2023 - this.birthYear);
    },

    init(firstname, birthYear){
        this.firstname = firstname;
        this.birthYear = birthYear;
    }
};
const steaven = Object.create(PersonProto);
steaven.birthYear = 2022;
// steaven.clacAge();

const sarah = Object.create(PersonProto);
sarah.init('sarah', 1997);
sarah.clacAge();

//Coding Challenge - 2
// class CarCl{
//     constructor(speed){
//         this.speed = speed;
//     }

//     accelerate(){
//         this.speed += 10;
//         console.log(this.speed);
//     }

//     break(){
//         this.speed -= 5;
//         console.log(this.speed);
//     }
//     get speedUS(){
//         return this.speed / 1.6;
//     }

//     set speedUS(speed){
//          this.speed = speed * 1.6;
//     }
// }

// const ford = new CarCl(120);
// ford.speedUS = 800
// console.log(ford.speedUS);

//Inheritance in classes
const Student = function(firstname, birthYear, course){
    // this.firstname = firstname;
    // this.birthYear = birthYear;
    Person.call(this, firstname, birthYear)
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.Introduce = function(){
    console.log(`My name is ${this.firstname} and I study ${this.course}`);
}

const mike = new Student('Mike', 1932, 'cs');
// mike.Introduce();
mike.clacAge();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

//Coding Challenge - 3
// const CarCls = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
//   };
  
//   CarCls.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
  
//   CarCls.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
  
//   const EV = function (make, speed, charge) {
//     CarCls.call(this, make, speed);
//     this.charge = charge;
//   };
  
//   // Link the prototypes
//   EV.prototype = Object.create(CarCls.prototype);
  
//   EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
//   };
  
//   EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//     );
//   };
  
//   const tesla = new EV('Tesla', 120, 23);
//   tesla.chargeBattery(90);
//   console.log(tesla);
//   tesla.brake();
//   tesla.accelerate();

  

  //coding challenge - 4
  class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;
    }
  
    get speedUS() {
      return this.speed / 1.6;
    }
  
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  }
  
  class EVCl extends CarCl {
    #charge;
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      return this;
    }
  
    accelerate() {
      this.speed += 20;
      this.#charge--;
      console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${
          this.#charge
        }`
      );
      return this;
    }
  }
  
  const rivian = new EVCl('Rivian', 120, 23);
  console.log(rivian);
  // console.log(rivian.#charge);
  rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();
  
  console.log(rivian.speedUS);  