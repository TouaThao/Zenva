console.log('interview');
//difference between var and let
//var is global/fuctional scope. it's end after the function, if not they well be global
//var also get hoisted up to the top
//////////////////////
//let is a block scope and end after the end of the variable. 
//i.e/// /// /// /// ///
// let letTest = function(){
//     if (true) {
//         var v = 4;
//         let l = 2;
        
//     }
//     console.log('let',l);
//     console.log('var',v);

// }
// letTest();
//////////////////////
//difference between == and ===
// both are comparison operator
// == check value. But it change the type from the left side to 
// === check value and type
//////////////////////
// what the difference between let and const
// let is an variable that we want to change. could change or reassign value
// const is an varibale that we want it to stay constant. cannot reassign the value
// but if const is an array we could change the array but not reassign it. use built in method to change it
const c = [1,2,3,4];
c.push(5)
console.log('constC',c)
//////////////////////
// what's the difference between null and undefine?
// they both represent both an empty value.
// null is an object. null is assign.
// undefine is just undefine. undefined is a value it is declare but not define.
let nullA = null;
let undefineB;
console.log('null a', nullA);
console.log('undefine',undefineB)
//////////////////////
// use arrow function?
// let function = ()=>{}
//(parameters) => { statements } normal
//
const profile = {
    firstName:'',
    lastName:'',
    setName: function(name) {
        let splitName = (n) => {
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(name)
    }
}
profile.setName('john doe')
console.log(profile.firstName)

function funcName(params) {
    return params + 2;
  }
 funcName(2);
 console.log(funcName(2));
 
 var funcName1 = (params) => params + 2
funcName1(2);
console.log(funcName1(2));
//////////////////////
//what is prototypal inheritance // prototype inhertance?
//every object created have a property call prototype
//where you could add method and property
// and when you create other object from this object.
//the newly created object inherit the property of the parents
//but not including in it's own property. it use it parent property
// if a method is call . it will look at it own property first. it not there.
//it will look at it's parent property
// i.e
//create a constructor
console.log('javascript prototype',Hero)
function Hero(name,alias,planet){
    this.name=name,
    this.alias=alias,
    this.planet=planet
}
let batman = new Hero('Batman','Bruce','Earth')
console.log('batman',batman)
//In the future if we created a new function
// and want it to put back into hero(prototype). we can simply tell JavaScript 
//to inherit them from the Hero prototype.
function dialogue() {
    console.log('I am ' + this.name);
  }
  Hero.prototype.dialogue = function(){
      console.log(' I am ' + this.name)
  }
  console.log(batman.dialogue());

  //i.e
  //create a constructor.
let car = function(model){
this.model=model
}
console.log('testing car constructor',car)
// now we could access Car constructor.
// we want to go to it's parents constructor and attach a method to it. So let's call it getModel
//it simply return the value of the model
car.prototype.getModel = function(){
    return this.model
}
console.log('testing car.prototype',car.prototype)
// let create a new car
let toyota = new car('toyota');
console.log(toyota.getModel());
let nissian = new car('nissian');
console.log(nissian.getModel())
//////////////////////
// what the difference between function declartion and function expression.
//function declartion is when you declare a function
//function expressison is written like a variable.
//since FuncE is a variable it have it own block scope. and console.log won't work on line 124.
//because it's being call before funcE is created. funcD is aviable to use but cannot pass a function in it.
console.log(funcD)
// console.log(funcE) if this run
function funcD(){
    console.log('Hi from function declare')
}

let funcE = function(){
    console.log('hi from function expression')
}
console.log(funcE)
//what is a promise and why we use them?
//it's a way to handle async task. And we could chain them too.
// it would return us a resolve or a reject.
let isMomHappy = true;
// Promise
let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            console.log('We got a new phone')
            resolve(phone); 
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); 
        }

    }
);
//This is a way to make call back hell easier to read. No function nested inside a function.
//////////////////////
//what is setTimeOut.
//setTimeOut will make certain things async. i.e
setTimeout(function(){
    console.log('Async','a')
},0)
console.log('b')
console.log('c')
//what is closure and how we use it
//it's a function inside of a function. The inner function have access to the outer function variable.
// have acess to the it own variable and it has access to the global variables
function outer() {
    var b = 10;
    function inner() {
         
          var a = 20; 
          console.log(a+b);
     }
    return inner;
 }