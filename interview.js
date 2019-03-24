console.log('interview');
//difference between var and let
//var is global/fuctional scope. it's end after the function, if not they weill be global
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