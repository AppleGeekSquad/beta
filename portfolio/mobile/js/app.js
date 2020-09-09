var coverupDiv = document.getElementById('coverupDiv');
var popupDiv1 = document.getElementById('popupDiv1');
var popupDiv2 = document.getElementById('popupDiv2');
var popupDiv3 = document.getElementById('popupDiv3');
var button1elem = document.getElementById('button1');
var button2elem = document.getElementById('button2');
var button3elem = document.getElementById('button3');
var button4elem = document.getElementById('button4');
var headerh1 = document.getElementById('headerh1');
var defaultTitle = "MCS";

function onload(){
    hide(coverupDiv);
	hide(popupDiv1);
    hide(popupDiv2);
    popupDiv1.style.zIndex = -1000;
    popupDiv2.style.zIndex = -1000;
    popupDiv3.style.zIndex = -1000;
if(isMobile.any() == null){
	console.log('redirecting');
	window.open('/','_self');
}else if(isMobile.iPad() == true){
	console.log('redirecting');
	window.open('/','_self');
}else{
    console.log(isMobile.any());
}
}

var popupopened = null;
// Show an element
var show = function (elem) {

	// Get the natural opacity of the element
	var getHeight = function () {
		elem.style.display = 'block'; // Make it visible
		var height = elem.scrollHeight + 'px'; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
	};

	var height = getHeight(); // Get the natural height
	elem.classList.add('is-visible'); // Make the element visible
	elem.style.height = height; // Update the height

	// Once the transition is complete, remove the inline height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 350);

};

// Hide an element
var hide = function (elem) {

	// Give the element a height to change from
	elem.style.height = elem.scrollHeight + 'px';

	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

	// When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 350);

};

function button1(){
    console.log('button1 onclick function registererd');
	emptyPopup1();
    disableButtons();
}
function button2(){
	console.log('button2 onclick function registererd');
	emptyPopup2();
	disableButtons();
}
function button3(){
	console.log('button3 onclick function registererd');
	emptyPopup3();
	disableButtons();
}
function button4(){
	console.log('button4 onclick function registererd');
	window.open('./contact','_self');
	disableButtons();
}
function mobilecontactBackButton(){
	window.open('/mobile','_self');
}
function disableButtons(){
	button1elem.style.opacity = '0.5';
	// button2elem.style.opacity = '0.5';
	// button3elem.style.opacity = '0.5';
	button4elem.style.opacity = '0.5';
    headerh1.style.opacity = '0.25';
    popupDiv1.style.zIndex = 1000;
    popupDiv2.style.zIndex = 1000;
    popupDiv3.style.zIndex = 1000;
}
function showButtons(){
	button1elem.style.opacity = '1';
	// button2elem.style.opacity = '1';
	// button3elem.style.opacity = '1';
	button4elem.style.opacity = '1';
    headerh1.style.opacity = '1';
    popupDiv1.style.zIndex = -1000;
    popupDiv2.style.zIndex = -1000;
    popupDiv3.style.zIndex = -1000;
}
function emptyPopup1(){
    show(popupDiv1);
    show(coverupDiv);
	popupDiv1.classList.add("popup1Loaded");
	popupopened = 1;
	document.title = "About";
}
function emptyPopup2(){
    show(popupDiv2);
    show(coverupDiv);
	popupDiv2.classList.add("popup2Loaded");
	popupopened = 2;
	document.title = "Services";
}
function emptyPopup3(){
    show(popupDiv3);
    show(coverupDiv);
	popupDiv3.classList.add("popup3Loaded");
	popupopened = 3;
	document.title = "Pricing";
}
function back(){
	if(popupopened == 1){
		hide(popupDiv1);
		hide(coverupDiv);
    	popupDiv1.classList.remove("popup1Loaded")
	}else if(popupopened == 2){
		hide(popupDiv2);
		hide(coverupDiv);
    	popupDiv2.classList.remove("popup2Loaded")
	}else if(popupopened == 3){
		hide(popupDiv3);
		hide(coverupDiv);
    	popupDiv3.classList.remove("popup3Loaded")
	}else{
		alert('Fatal Error: 305')
	}
	showButtons();
	document.title = defaultTitle;
}
function popupWindow(w, h) {
    const y = window.top.outerHeight / 2 + window.top.screenY - ( h / 2);
    const x = window.top.outerWidth / 2 + window.top.screenX - ( w / 2);
    return window.open('about:blank','print_popup', `toolbar=no, location=no, directories=no, status=no, toolbar=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}
function required()
{
var empt1 = document.forms["contactForm"]["name"].value;
var empt2 = document.forms["contactForm"]["mail"].value;
var empt3 = document.forms["contactForm"]["subject"].value;
var empt4 = document.forms["contactForm"]["message"].value;

if (empt1 == "" || empt2 == "" || empt3 == "" || empt4 == ""){
	alert("Please fill out all of your information");
	return false;
}else {
	popupWindow(1000, 800)
	return true; 
}
}