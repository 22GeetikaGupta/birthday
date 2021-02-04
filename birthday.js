
// set up text to print, each item in array is new line
var aText = new Array(
"Hey Girl!!", 
"We are miles apart, still trying hard to make your Birthday as special as you are. But being a Computer Science student, this is the most I can think of !!!"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();

function initialSetup() {
  if (document.getElementsByClassName("Btn") != null) {
    setTimeout(function() {
      document.getElementsByClassName("Btn")[0].style.display = 'block';

    }, 18000);

    setTimeout(function() {
      document.getElementsByClassName("Btn")[0].style.animationName = 'glitter';
      document.getElementsByClassName("Btn")[0].style.animationDuration = '3s';
      document.getElementsByClassName("Btn")[0].style.animationIterationCount = 'infinite';
    }, 18500);
  }
}

initialSetup();


function start1(){
	document.getElementsByClassName("card1")[0].style.display = 'block';

	setTimeout(function(){
		document.getElementsByClassName("card2")[0].style.display = 'block';
	}, 8000);

	setTimeout(function(){
		document.getElementsByClassName("card3")[0].style.display = 'block';
	}, 16000);

	setTimeout(function(){
		document.getElementsByClassName("card4")[0].style.display = 'block';
	}, 20000);

	setTimeout(function(){
		document.getElementsByClassName("card5")[0].style.display = 'block';
	}, 28000);

	setTimeout(function(){
		document.getElementsByClassName("card6")[0].style.display = 'block';
	}, 36000);

	setTimeout(function(){
		document.getElementsByClassName("card7")[0].style.display = 'block';
	}, 44000);


	setTimeout(function(){
		document.getElementsByClassName("certi")[0].style.display = 'block';
		document.getElementsByClassName("pyro")[0].style.display = 'block';
	}, 46000);
}


// function start(){
// 	var x = 1;
// 	document.getElementsByClassName("gift")[0].style.display = "block";
// 	document.getElementsByClassName("card1")[0].style.display = "grid";
// 	document.getElementsByClassName("left")[0].style.animationName = "newcard";
// 	document.getElementsByClassName("left")[0].style.animationDuration = "2s";
// 	document.getElementsByClassName("right")[0].style.animationName = "newcard";
// 	document.getElementsByClassName("right")[0].style.animationDuration = "2s";

// 	setTimeout(function() {
// 		document.getElementsByClassName("card1")[0].style.display = "none";
// 		document.getElementsByClassName("card2")[0].style.display = "grid";
// 		document.getElementsByClassName("card2")[0].style.zIndex = document.getElementsByClassName("card1")[0].style.zIndex + 1;
// 		document.getElementsByClassName("left")[1].style.animationName = "newcard";
// 		document.getElementsByClassName("left")[1].style.animationDuration = "2s";
// 		document.getElementsByClassName("right")[1].style.animationName = "newcard";
// 		document.getElementsByClassName("right")[1].style.animationDuration = "2s";
		
// 	}, 2000)

// 	setTimeout(function() {
// 		document.getElementsByClassName("card2")[0].style.display = "none";
// 		document.getElementsByClassName("card3")[0].style.display = "grid";
// 		document.getElementsByClassName("card3")[0].style.zIndex = document.getElementsByClassName("card2")[0].style.zIndex + 1;
// 		document.getElementsByClassName("left")[2].style.animationName = "newcard";
// 		document.getElementsByClassName("left")[2].style.animationDuration = "2s";
// 		document.getElementsByClassName("right")[2].style.animationName = "newcard";
// 		document.getElementsByClassName("right")[2].style.animationDuration = "2s";
		
// 	}, 4000)
// }
