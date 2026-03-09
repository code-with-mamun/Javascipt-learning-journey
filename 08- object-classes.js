// class Car {
//   constructor(model, brand, color) {
//     this.model = model;
//     this.brand = brand;
//     this.color = color;
//   }

//   // ক্লাসের ভেতরে মেথড এভাবেই লিখতে হয়
//   start() {
//     this.stop();
//     console.log("Car started");
//   }

//   stop() {
//     console.log("Car stopped");
//   }

//   drive() {
//     return `${this.brand} ${this.model} is driving`;
//   }
// }

// class ElectricCar extends Car {
//   constructor(model, brand, color, batteryCapacity) {
//     super(model, brand, color); // বাবা (Car) এর থেকে প্রপার্টিগুলো নিয়ে আসা
//     this.batteryCapacity = batteryCapacity;
//   }

//   info() {
//     // এখানে return দিতে হবে যাতে console.log এ রেজাল্ট দেখা যায়
//     return this.drive() + " with battery capacity of " + this.batteryCapacity;
//   }
// }

// let tesla = new ElectricCar("Model S", "Tesla", "Red", "100 kWh");
// console.log(tesla.info()); // আউটপুট: Tesla Model S is driving with battery capacity of 100 kWh

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  study() {
    console.log(this.name + " is studying");
  }
}
let student1 = new Student("Mamun", 20);
console.log(student1);
student1.study();

// /ekhane class + inheritance bujha jabe
class Car {
  constructor(model, brand, color) {
    this.model = model;
    this.brand = brand;
    this.color = color;
  }

  drive() {
    return `${this.brand} ${this.model} is driving`;
  }
}

const car = {
  model: "x5",
  brand: "bmw",
  color: "black",
  start: function () {
    this.stop();
    console.log("car started");
  },
  stop: function () {
    console.log("car stopped");
  }
};

class ElectricCar extends Car {
  constructor(model, brand, color, batteryCapacity) {
    super(model, brand, color);
    this.batteryCapacity = batteryCapacity;
  }

  info() {
  console.log(`${this.drive()} with battery capacity of ${this.batteryCapacity}`);
  }
}

let tesla = new ElectricCar("Model S", "Tesla", "Red", "100 kWh");

console.log(tesla);
console.log(tesla.info());


// /ekhane class + inheritance bujha jabe kintu mistake ache
class Car {
  constructor(model, brand, color) {
    this.model = model;
    this.brand = brand;
    this.color = color;
  }

  drive() {
    return `${this.brand} ${this.model} is driving`;
  }
}

class ElectricCar extends Car {
  constructor(model, brand, color, batteryCapacity) {
    super(model, brand, color);
    this.batteryCapacity = batteryCapacity;
  } 
   from () {
   console.log (`$this.drive()  with battery capacity of   this.batteryCapacity;`)
    }
}
 

// apna college practis
console.log("mamun");

class user {
    constructor(name,email){
        this.nam=name;
        this.gmail=email;
    }
    viewdata (){
        console.log(`${this.nam} is a good boy`);
    }
}

let user1 = new user("mamun", "mamunlevel22gmail.com")


class admin extends user {
    editdata(){
        console.log(`${this.nam} is a bad boy`);     
    }
}

let admin1 = new admin ("Mijan" , "mijan22gmail.com");



// let tesla2 = new ElectricCar("Model S", "Tesla", "Red", "100 kWh");
// console.log(tesla2);
// console.log(tesla2.from());


// let car1 = new Car("X5", "BMW", "Black");
// console.log(car1);





