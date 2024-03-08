var num = 10;
var count=0;

/* change image */
function sliderCount(){
if(count==1){
$('#slider2').fadeOut();
$('#slider0').fadeOut();
$('#slider1').fadeIn();
}else if(count==2){
$('#slider0').fadeOut();
$('#slider1').fadeOut();
$('#slider2').fadeIn();
}else if(count==0){
$('#slider2').fadeOut();
$('#slider1').fadeOut();
$('#slider0').fadeIn();
}
}

function sliderTime(){
num=num+1;
sliderCount();
count = num%3;
}
/* Interval */
setInterval("sliderTime()",5000);