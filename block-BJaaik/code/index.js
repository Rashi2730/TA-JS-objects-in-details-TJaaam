class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    return `I can eat`;
  }
  sleep() {
    return `I can sleep`;
  }
  walk() {
    return `I can walk`;
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {
    return `I play sports 🎳🏏🏒`;
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender, sportsName);
    this.teamName = teamName;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {
    return `I teach students 👩🏻‍🏫`;
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {
    return `I create a masterpiece 🎭🎨`;
  }
}

let kushal = new Person("Kushal", 23, "Not defined");
console.log(kushal.name);
console.log(kushal.gender);
