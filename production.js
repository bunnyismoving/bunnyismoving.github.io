var numA = 10;
var countA=0;
var numB = 10;
var countB=0;

/* change image */
function imageCountA(){
if(countA==1){
$('#sliderImage5').fadeOut();
$('#sliderImage4').fadeOut();
$('#sliderImage3').fadeOut();
$('#sliderImage1').fadeIn();
}else if(countA==2){
$('#sliderImage5').fadeOut();
$('#sliderImage4').fadeOut();
$('#sliderImage1').fadeOut();
$('#sliderImage3').fadeIn();
}else if(countA==0){
$('#sliderImage5').fadeOut();
$('#sliderImage3').fadeOut();
$('#sliderImage1').fadeOut();
$('#sliderImage4').fadeIn();
}else if(countA==3){
$('#sliderImage4').fadeOut();
$('#sliderImage3').fadeOut();
$('#sliderImage1').fadeOut();
$('#sliderImage5').fadeIn();
}
}

function sliderTimeA(){
numA=numA+1;
imageCountA();
countA = numA%4;
}
setInterval("sliderTimeA()",5000);
