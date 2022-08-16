# Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`


```js

let animalMethods = {
    eat : function () {
        console.log(`I live in ${this.location} location and I can eat`);
    },
    changeLocation : function(newLocation){
        this.location = newLoaction ;
        console.log(`The new updated location is ${this.location}`);
    },
    summary: function (){
        return  `I live in ${this.location} and I have ${this.noOfLegs}` 
    }
};

let dogMethods = {
    bark : function(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(newName) {
        this.name = newName ;
        return this.name;
    },
    changecolor: function(newcolor) {
        this.color = newcolor ;
        return this.color;
    },
    summary : function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
};

let catMethods = {
    meow : function(){
        alert(`I am ${this.name} and I can meow meow 😹`);
    },
    changeName: function(newName) {
        this.name = newName ;
        return this.name;
    },
    changecolorOfEye: function(newcolor) {
        this.colorOfEyes = newcolor ;
        return this.colorOfEyes;
    },
    summary : function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
};


Object.setPrototypeOf(dogMethods,animalMethods);
Object.setPrototypeOf(catMethods,animalMethods);


function createAnimal(location,noOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.noOfLegs = noOfLegs;
    return animal;
}

function createDog(name,color,location,noOfLegs){
    let dog = Object.create(dogMethods);
    dog.location = location;
    dog.noOfLegs = noOfLegs;
    dog.name = name;
    dog.color = color;
    return dog;
}


function createCat(name,colorOfEyes,location,noOfLegs){
    let cat = Object.create(catMethods);
    cat.location = location;
    cat.noOfLegs = noOfLegs;
    cat.name = name;
    cat.color = colorOfEyes;
    return cat;
}

