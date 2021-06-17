// //lect 57:
// //iife, passing it to global object
// (function(global){
// 	//setup namspace for our utility
// 	var ajaxUtils ={};

// //returns an http rewuest object
// function getRequestObject(){
// 	if(global.XMLHttpRequest){
// 		return (new XMLHttpRequest());
// 	}
// 	else if (global.ActiveXObject){
// 		//for very old IE browsers (optional)
// 		return (new ActiveXObject("Microsoft.XMLHTTP"));
// 	}
// 	else{
// 		global.alert("Ajax is not supported");
// 		return (null);
// 	}
// }

// // makes an ajax GET reuest to "requestUrl"
// ajaxUtils.sendGetRequest =
// 	function (requestUrl, responseHandler) {
// 		var request = getRequestObject();
// 		request.onreadystatechange =
// 		function(){
// 			handleResponse(request, responseHandler);
// 		};
// 		//TRUE= asynchronus ; FALSE=synchronus;
// 		request.open("GET", requestUrl, true);
// 		request.send(null); //for POST only
// 	};


// //only calls user provided "responseHandler"
// //function if response is ready
// // and not an error
// function handleResponse(request, responseHandler){
// 	if((request.readyState ==4) && (request.status ==200)){
// 		responseHandler(request);
// 	}
// }

// //expose utility to the global object; $ is just for fancy
// global.$ajaxUtils = ajaxUtils;

// })(window);

//lect 58
//iife, passing it to global object
(function(global){
	//setup namspace for our utility
	var ajaxUtils ={};

//returns an http rewuest object
function getRequestObject(){
	if(global.XMLHttpRequest){
		return (new XMLHttpRequest());
	}
	else if (global.ActiveXObject){
		//for very old IE browsers (optional)
		return (new ActiveXObject("Microsoft.XMLHTTP"));
	}
	else{
		global.alert("Ajax is not supported");
		return (null);
	}
}

// makes an ajax GET reuest to "requestUrl"
ajaxUtils.sendGetRequest =
	function (requestUrl, responseHandler, isJsonResponse) {
		var request = getRequestObject();
		request.onreadystatechange =
		function(){
			handleResponse(request, responseHandler,  isJsonResponse);
		};
		//js handler becomes for TRUE= asynchronus ; FALSE=synchronus;
		request.open("GET", requestUrl, true);
		request.send(null); //for POST only
	};


//only calls user provided "responseHandler"
//function if response is ready
// and not an error
function handleResponse(request, responseHandler, isJsonResponse){
	if((request.readyState ==4) && (request.status ==200)){
		//Deafult to isJsonRepsonse =true
		if(isJsonResponse ==undefined){
			isJsonResponse =true;
		}
		if(isJsonResponse =true){
			responseHandler(JSON.parse(request.responseText));
		}
		else{
			responseHandler(request.responseText);
		}
		
	}
}

//expose utility to the global object; $ is just for fancy
global.$ajaxUtils = ajaxUtils;

})(window);