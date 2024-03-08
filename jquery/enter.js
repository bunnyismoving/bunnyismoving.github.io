var numA = 10;
var countA=1;
var numB = 10;
var countB=0;

/* change image */
function imageCountA(){
if(countA==1){
$('#designImage2').fadeOut();
$('#designImage0').fadeOut();
$('#designImage1').fadeIn();
}else if(countA==2){
$('#designImage0').fadeOut();
$('#designImage1').fadeOut();
$('#designImage2').fadeIn();
}else if(countA==0){
$('#designImage2').fadeOut();
$('#designImage1').fadeOut();
$('#designImage0').fadeIn();
}
}


function imageCountB(){
if(countB==1){
$('#massImage2').fadeOut();
$('#massImage0').fadeOut();
$('#massImage1').fadeIn();
}else if(countB==2){
$('#massImage0').fadeOut();
$('#massImage1').fadeOut();
$('#massImage2').fadeIn();
}else if(countB==0){
$('#massImage2').fadeOut();
$('#massImage1').fadeOut();
$('#massImage0').fadeIn();
}
}
function sliderTimeA(){
numA=numA+1;
imageCountA();
countA = numA%3;
}
function sliderTimeB(){
numB=numB+1;
imageCountB();
countB = numB%3;
}

setInterval("sliderTimeA()",4000);
setInterval("sliderTimeB()",5000);

