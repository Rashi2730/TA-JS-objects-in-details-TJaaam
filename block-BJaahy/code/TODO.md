# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

```js 

class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
}


```
- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`

```js

class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${width} x ${height}`);
    }
}

```

- Create another method named `calcArea` that will return the area of the square.

```js

class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${width} x ${height}`);
    }
    calcArea(){
        let area = width * height;
    }
}

```

- Create a getter method named `area` that will return area of the square.


```js
class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${width} x ${height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    }
}

let squ1 = new Square(20);
```

- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

```js

class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${width} x ${height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    }
    set area(value){
        this.width = (Math.sqrt(value));
        this.height = (Math.sqrt(value));
    }
}

let squ1 = new Square(20);


```

- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

```js
class Square {
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${width} x ${height}`);
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    }
    set area(value){
        this.width = (Math.sqrt(value));
        this.height = (Math.sqrt(value));
    }
    static isEqual(a1,a2){
        return a1.area === a2.area;
    }
}
let squ1 = new Square(20);
let squ2 = new Square(20);



```

- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)

```js 

let squ1 = new Square(20);
let squ2 = new Square(20);

```

- Check the `area` getter method on both square.



- Check the `isEqual` method and pass the two instance you created above.
```js

Square.isEqual(squ1,squ2);

```

## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property
```js

class User {
    constructor(firstName,lastName){
        this.fName = firstName;
        this.lName = lastName;
    }
}

```
- Create a getter method named `fullName` that will return the full name of the person.

```js

class User {
    constructor(firstName,lastName){
        this.fName = firstName;
        this.lName = lastName;
    }
    get fullName(){
        return this.fName + " " + this.lName;
    }
}

let user1 = new User("Arya","Stark");

```

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)

```js

class User {
    constructor(firstName,lastName){
        this.fName = firstName;
        this.lName = lastName;
    }
    get fullName(){
        r
        return  this.fName + " " + this.lName;
    }
    set fullName(value){
        let _name = value.split(" ");
        this. fName = _name[0];
        this.lName = _name[1];
        if(value.length < 5>){
            alert (`Full name should be more than 5 characters`);
        }
    }
}

let user1 = new User("Arya","Stark");

```

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

```js

class User {
    constructor(firstName,lastName){
        this.fName = firstName;
        this.lName = lastName;
    }
    get fullName(){
        r
        return  this.fName + " " + this.lName;
    }
    set fullName(value){
        let _name = value.split(" ");
        this. fName = _name[0];
        this.lName = _name[1];
        if(value.length < 5>){
            alert (`Full name should be more than 5 characters`);
        }
    }
    nameContains(text){
        return (this.fName == text || this.lName == text); 
        }
}

let user1 = new User("Arya","Stark");

```


- Create two instance of the `User` class

```js
let user1 = new User("Arya","Stark");
let user2 = new User("Bryann","Snow");
```


- Check by using the `fullName` setter method with name bigger than 5 characters.

- Check by using the `fullName` setter method with name less than 5 characters.

- Check the `fullName` using getter

- Check the `nameContains` method
