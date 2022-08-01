# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object

function createObj (){
  let obj = {};
}

- [ ] Using Object.create (prototypal pattern)

function createObj (){
  let obj = Object.create({});
}

- [ ] Using Pseudoclassical Way

function CreateObj(){

}

let user1 = new CreateObj();

- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

```js
class User {
  constructor (name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.projects = noOfProjects;
  }
  getProjects(){
    return this.projects;
  }
  changeName(newName){
    this.name = newName;
    return this.name;
  }
  incrementProject(value = 1){
    this.projects = this.projects + value;
    return this.projects;
  }
   decrementProject(value = 1){
    this.projects = this.projects - value;
    return this.projects;
  }
}

let user1 = new User("Sameer",1400949,5);

console.group(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.getProjects());
console.log(user1.changeName("Zaid"));
console.log(user1.incrementProject(2));
console.log(user1.decrementProject(3));