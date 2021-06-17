//lect53 DOM Manipulation
//  function sayHello(event){

// 	//    for inputs === value
// 	//for non inputs=== textContent
	

// 	console.log( document.getElementById("name").value);
// 	var msg= document.getElementById("name").value;


// 	//get Element by Id
// 	document
// 	.getElementById("content")
// 	.textContent= "hi " + msg + "!";
	
// 	// //selectquery for more robust selection , same like css selection
// 	// document
// 	// .querySelector("#content")
// 	// .textContent= "hi " + msg + "!";

// 	//to render as html 
// 	document
// 	.getElementById("content2")
// 	.innerHTML= "<h2>hi " + msg + "!<h2>";

// 	if (msg === "prem"){
// 		var txt = document.getElementById("title").textContent;
// 		console.log(txt);
// 		txt = msg + ", it is nice to see you.";
		
// 		document
// 		.getElementById("title")
// 		.textContent= txt;

// 	}
// }

//lect 54 Unobstructive Event Binding
//method1
// document.querySelector("button").addEventListener("click",sayHello);

//method2
// document.querySelector("button").onclick = sayHello;

//event listener for loading events before any images, css loads.
//every event handler function gets event as argument
document.addEventListener("DOMContentLoaded",
	function(event){
		 function sayHello(event){

		//    for inputs === value
		//for non inputs=== textContent
		

		console.log( document.getElementById("name").value);
		var msg= document.getElementById("name").value;


		//get Element by Id
		document
		.getElementById("content")
		.textContent= "hi " + msg + "!";
		
		// //selectquery for more robust selection , same like css selection
		// document
		// .querySelector("#content")
		// .textContent= "hi " + msg + "!";

		//to render as html 
		document
		.getElementById("content2")
		.innerHTML= "<h2>hi " + msg + "!<h2>";

		if (msg === "prem"){
			var txt = document.getElementById("title").textContent;
			console.log(txt);
			txt = msg + ", it is nice to see you.";
			
			document
			.getElementById("title")
			.textContent= txt;

		}
	}
	//unobstructie event handling
	document.querySelector("button").onclick = sayHello;
	
	document.querySelector("body").addEventListener("mousemove",
		function(event){
			//checking for specific mouse events. eg: press and holding shift key while using mouse
			if(event.shiftKey === true){
				console.log(event.clientX);
				console.log(event.clientY);
			}
		});
	}
);