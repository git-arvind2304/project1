                /// JavaScript Basics ///

                 //  Array  //

   // Using splice you can remove Elements with index value

 var a =[1,2,3,4,];
 a.splice(1,2);  
 console.log(a);

   // Adding Last Element //

    var b = [1,2,3,4];
 b.push(5);
 console.log(b);
  
   // Remove Last Element //

 var c = [1,2,3,4,5,6];
 c.pop();
 console.log(c);
 
      // Remove First Element //

 var d =[1,2,3,4,5,6,7];
 d.shift();
 console.log(d);
  
 // Add First Element //
 let e =[1,2,3,4,5,6];
 e.unshift(3);
 console.log(e);
  
    //Using Splice you can also replace array element with Index value //

 var arr =[2,4,5,6,7,4];
 arr.splice(1,1,10);
 console.log(arr);
  

   // Functions //

 function greet() {
  let message =  10; // Declared inside the function
  console.log(message);
}
greet();


   // Functions //

function arvind (){
  var ob = 20 ;
  console.log(ob);
}
arvind();

 function ajay (){
  const a = 2;
  var b =2;
  let c = a*b;
console.log(c);
}
 ajay();

    // spread operator //

  let w = [2,3,4,5,6];
  let s = [...a];       //  using Spread operator you can copy one variable data to another variable 
  console.log('var s ='+s);

 
     // Object Declaration //

  var ar = {name : 'Arvind'};
var ab = {...ar};
console.log('ab data :'+ab);

    // Conditions //

if (ab) {
  console.log("hey")
}
else{
  console.log("Arvind");

} 

let age = 20;

if (age >= 18) {
  console.log("You are an adult."); // This will be executed
} else {
  console.log("You are a minor."); 
}
 
   // forEach //

var a =[2,4,6,8,10,12];
a.forEach(function(val){
  console.log(val+2);
})


let b =[1,2,3,4,5,6];
b.forEach(function(val){
  console.log(val*2);
})


const r = [2,4,6,8,10];
r.forEach(function(val){
  console.log(val+1)
})

     // Event Handling //

  let btn1 = document.querySelector("#btn1");
  btn1.onmouseover= ()=>{
    console.log("button was clicked")
  }

    let btn1 = document.querySelector("#btn1");
  btn1.addEventListener("click",()=>{
    console.log("Hey Arvind");
  })
           // Hoisting //
greed();
  function greed ()
  {                             // you can run Function before its declare //
    console.log("hello Arvind");
  }
    //  Call back Functions //
 
     setTimeout(() => {

  console.log("hello Arvind");
},5000);

  function greet() {
  console.log("Hello, world!");
}
// Execute the 'greet' function after 2 seconds (2000 milliseconds)
setTimeout(greet, 2000);

function greek(){
  console.log("Hello Bro");
}
setTimeout(greek,3000);

     // DOM //

  let body = document.querySelector("body");
let btn1 = document.querySelector("#btn1");
btn1.onclick=()=>{
  body.style.backgroundColor ="skyblue";
  console.log("color changed");
}
  // Map () //

  // Using Map function you can change array value  Duble , triple and binary 

const l = [2,4,6,8,10];
function  duble (x){
  return x*2 ;
  }
 const c = l.map(duble);
console.log(c);

var a = [1,2,3,4,5,6];
a.forEach(function (val){
  console.log(val+1);
})
 
// Anonymouse Function ##
 
var v = [1,2,3,4,5,6];
  const re = v.map((x)=>{
return x+2;
});
 console.log( re); 

      // Filter () //

 //  Using Filter function you can find odd Number and even number and 
 // greater value and less value in the array
   var arr = [1,2,3,4,5,6,7,8];
 function odd (x){
  return  x<5
}
 const o = arr.filter(odd);
 console.log(o);

 var af = [2,5,8,6,9,3];
 function even (x){
  return x%2===0;
 }
 const op = af.filter(even);
 console.log("Even Number "+op);

var x =[4,6,2,5,8,9,6];
function greter (x){
  return x>6 ;
}
const ot = x.filter(greter);
console.log(ot)
;
  
var a = [6,4,5,8,9,2];
function less (x){
  return x<6;
}
const output = a.filter(less);
console.log(output);


//  SUM ##
 
const arr = [2,5,6,7,8,9];
function sum (x){
  let s = 0;

  for (let i=0; i<arr.length;i++){
  s = s+arr[i];
}
return s ;

}
console.log(sum(arr));

// MAX Number ##

const arv = [2, 5, 6, 7, 8, 9];

const max = arv.reduce((acc, val) => {
  return val > acc ? val : acc;
}, arv[0]); // start with first element

console.log(max);
