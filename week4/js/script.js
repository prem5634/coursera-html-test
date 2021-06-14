// lecture 41
// var message = "hello prem";
// console.log("global message:"+ message); 

// var a = function(){
// 	var message = "inside a";
// 	console.log("a : message = "+ message);
// 	b();

// }

// 	 function b(){
//  	console.log("b: message = "+ message);
//  }
//  a();

// lecture 42
// var x;
// console.log(x);
// if(x==null){
// 	console.log("its undef");
// }
// else{
// 	console.log("its def");
// }

// lecture 43
// var string ="hello";
// string += " world";
// console.log(string + "!");
// console.log(undefined/5);
// function test (a){
// 	console.log(a/5);
// }
// test();
// var x="5", y=5;
// //comparison ==; strict comparison ===
// if(x===y){
// 	console.log(' equal');
// }
// else{
// 	console.log('not equal');
// }
// var sum=0;
// for (var i = 0; i <=10; i++) {
// 	sum+=i;
// 	console.log(sum);
// }

//si takes the value of input, if none is given then whaveever is given by default 
// function ord(si){
// 	si= si || "whaveever"
// 	console.log(si);
// }

// ord("mamchi");
// ord();

//lecture 45
// var company = new Object();
// company.name="Facebook";
// company.ceo= new Object();
// company.ceo.color="blue";
// company.ceo.name="mark";
// console.log(company);

// var facebook = {
// 	name : "Facebook",
// 	ceo:{
// 		fname:"Mark",
// 		favcolor:"blue"
// 	},
// 	stock:110,
// 	"stock of the company": 1110
// };

// console.log(facebook);

//lecture 45//important
// function multiply(x,y){
// 	return x*y;
// };
// // console.log(multiply(5,3));
// // multiply.version = "v1.0.1";w
// console.log(multiply.version);

// function makeMultiplier (multiplier){
// 	var myFunc = function(x){
// 		return multiplier * x;
// 	};
// 	return myFunc;
// }
// var muliplierby3 = makeMultiplier(3);
// console.log(muliplierby3(10));

// var doubleAll= makeMultiplier(2);
// console.log(doubleAll(20));

//lecture 46
// var doOP = function(operation,x){
// 	return operation(x);
// }

// var result= doOP(doubleAll,5);
// console.log(result);

//lecture 47

// var a=7;
// var b=a;
// console.log("a: "+ a);
// console.log("b: "+ b);
// b=5;
// console.log("a: "+ a);
// console.log("b: "+ b);


// var c= {x:10};
// var d= c;
// console.log("c: "+ c.x);
// console.log("d: "+ d.x);
// d.x=20;
// console.log("c: "+ c.x);
// console.log("d: "+ d.x);

//lecture 48 function constructors, 
// function test(){
// 	// console.log ("Hello coursera!");
// 	// console.log(this);
// 	this.myName="yakov";
// }
// test();
// console.log(window.myName);

// function Circle (radius){
// 	this.radius= radius;

// };
// Circle.prototype.getArea = function (){
// 		return 3.14 * this.radius* this.radius;
// };
// var myCircle = new Circle (10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle (30);
// console.log(myOtherCircle.getArea());


//lectur 49 object literal// before ecamav6 creating a function inside a function and 
//using this would point to global object but not the parent object.
//eg
// var lteralCircle = {
// 	radius:10,
// 	getArea : function (){
// 		var self =this;
// 		console.log(this);
// 		var increaseRadius = function(){
// 			self.radius= 20;
// 		}
// 		console.log(this.radius);
// 		increaseRadius();

// 		console.log(this.radius);
// 		return Math.PI * Math.pow(this.radius,2);
// 	}
// };
// console.log(lteralCircle.getArea());

//lect 50 : Arrays, all need not be same type - thats the best part of JS.
//long way
// var ar= new Array();
// ar[0]="yakov";
// ar[1]=2;
// ar[2]=function(name){
// 	console.log("hello"+ name);
// };
// console.log(ar);
// ar[2]("prem");

// //short way

// var names = ["prem", "chinna", "joe"];
// console.log(names);
// //for loop itertrion
// for(var i=0 ; i< names.length; i++){
// 	console.log(names[i]);
// }
// For skipped indexes to give value, they wil be undefined.


//travesing an object
// var names= ["ella", "malla", "ulla"];
// var myObj = {
// 	name : "yakov",
// 	course: "web",
// 	platform: "COursera"
// };
// for(var prop in myObj){
// 	console.log(prop + ": " + myObj[prop]);
// }

// for(var prop in names){
// 	console.log("hello "+ names[prop]);
// }
// names.greeting = "hi!";

// for(var prop in names){
// 	console.log("hello "+ names[prop]);
// }

//lect 51 closures
// function makeMultiplier (multiplier){
// 	// var myFunc = function (x) {
// 	// 		return multiplier * x ;
// 	// 	}
// 	// return myFunc;
// 	return (
// 		function (x) {
// 			return multiplier * x ;
// 		}
// 	);	
// }
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(14));

//lect 52 iife: immediately invoked function expression
//eg 
//( function(){} )();
// (function (name){
// 	console.log("hello Coursera!" + name);
// })("- prem"); 

//lect 52 script1
(function (window){
	var yakovgreeter={};
	yakovgreeter.sayHello = function(){
		console.log("hello yakov");
	}
	window.yakovgreeter = yakovgreeter;
})(window);

//lect 52 script2
(function (window){
	var johngreeter={};
	johngreeter.sayHi = function(){
		console.log("hi john");
	}
	window.johngreeter = johngreeter;
})(window);

//lect 52script3
yakovgreeter.sayHello();
johngreeter.sayHi();

//usually by creating iife here, we didnt call i.e execute inside functions(sayHello , sayHi),to use them,
//inside the yaakovGreeter, just inside this function, because each one of those variables is being defined in their own execution context. 
// we attached those fucntions to the global window, therby we are not exposing them to others