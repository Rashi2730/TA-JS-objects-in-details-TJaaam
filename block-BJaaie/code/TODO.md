# Inheritance

Convert the below requirements into inheritance using:

- Pseudoclassical Pattern
- Class Pattern

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

CreateAnimal.prototype = {
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

CreateDog.prototype = {
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

CreateCat.prototype = {
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


Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);
Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);


function CreateAnimal(location,noOfLegs){
    this.location = location;
    this.noOfLegs = noOfLegs;
}

function CreateDog(name,color,location,noOfLegs){
    CreateAnimal.apply(this,[name,color]);
    this.name = name;
    this.color = color;
}


function createCat(name,colorOfEyes,location,noOfLegs){
    CreateAnimal.apply(this,[name,colorOfEyes]);
    this.name = name;
    this.color = colorOfEyes;
}



let cat1 = new CreateCat("Sushi","green","Paris",4);



#CLASS METHOD 



class CreateAnimal{
    constructor(location,noOfLegs){
    this.location = location;
    this.noOfLegs = noOfLegs;
}
    eat(){
        console.log(`I live in ${this.location} location and I can eat`);
    }
    changeLocation(newLocation){
        this.location = newLoaction ;
        console.log(`The new updated location is ${this.location}`);
    }
    summary(){
        return  `I live in ${this.location} and I have ${this.noOfLegs}` 
    }

}
class CreateDog extends CreateAnimal{
    constructor(name,color,location,noOfLegs){
        super(location,noOfLegs)
        this.name = name;
        this.color = color;
}
    bark (){
        alert(`I am ${this.name} and I can bark 🐶`);
    }
    changeName(newName) {
        this.name = newName ;
        return this.name;
    }
    changecolor(newcolor) {
        this.color = newcolor ;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }

}


class CreateCat extends CreateAnimal{
    constructor(name,colorOfEyes,location,noOfLegs){
        super(location,noOfLegs)
        this.name = name;
        this.colorOfEyes = colorOfEyes;
}
    meow(){
        alert(`I am ${this.name} and I can meow meow 😹`);
    }
    changeName(newName) {
        this.name = newName ;
        return this.name;
    }
    changecolorOfEye(newcolor) {
        this.colorOfEyes = newcolor ;
        return this.colorOfEyes;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }

}



let cat1 = new CreateCat("Sushi","green","Paris",4);

```