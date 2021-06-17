// //lect57:event handling
// document.addEventListener("DOMContentLoaded", 
// 	function (event){

// 	//unobstructive event binding
// 	document.querySelector("button")
// 	.addEventListener("click", function(){
// 		//call server to get the name
// 		$ajaxUtils
// 		.sendGetRequest("data/name.txt", 
// 			function (request){
// 				var name = request.responseText;
// 				console.log(name);
// 				document.querySelector("#content")
// 				.innerHTML= "<h2> Hello "+ name + " !</h2>";
// 		});
// 	});

// 	});
//lect58:
//event handling
document.addEventListener("DOMContentLoaded", 
	function (event){

	//unobstructive event binding
	document.querySelector("button")
	.addEventListener("click", function(){
		//call server to get the name
		$ajaxUtils
		.sendGetRequest("data/name.json", 
			function (res){
				var message = res.firstname + " " + res.lastname;
				if(res.isCopied==true){
					message += " has copied the code from git";
				}
				else{
					message += " wrote this code on his own, I vocuh for him.";
				}
				message += " Lecture: ";
				message += res.lectno;

				document.querySelector("#content")
				.innerHTML= "<h2> Hello "+ message + " !</h2>";
		});
	});

});
