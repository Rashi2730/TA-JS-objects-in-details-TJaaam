## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output / error  Hello John
console.log(user2.sayHello()); // output / error Hello Arya
console.log(user.sayHello.call(user2)); // output / error Hello Arya
console.log(user.sayHello.call(user2, 'Hey')); // output / error Hey Arya
console.log(user.sayHello.apply(user2, ['Hey'])); // output / error  Hey Arya
console.log(typeof user.sayHello.bind(user2)); // output / error function 
console.log(user.sayHello.bind(user2)()); // output / error   Hello Arya
console.log(userSayHello()); // output / error => Hello undefined ; since sayHello is there noT SayHello
console.log(typeof userSayHello.bind(user2)); // output / error Hello Arya
console.log(userSayHello.bind(user2)()); // output / error Hello Arya
console.log(user3.sayHello()); // output / error => no sayHello function at user3
console.log(userSayHello.apply(user3)); // output / error Hello Bran
console.log(userSayHello.call(user3)); // output / error Hello Bran 
console.log(typeof new MainUser()); // output / error
console.log(typeof new MainUser()); // output / error object
console.log(new MainUser().sayHello()); // output / error Hello Tyrion
console.log(new MainUser().sayHello.call(user2)); // output / error Hello Arya
console.log(new MainUser().sayHello.call(user)); // output / error Hello John
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // output / error  => Welcome John
```
