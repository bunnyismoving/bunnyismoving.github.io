$("#pikaEnd").hide();
$(document).ready(function(){
$("#pikaBegin").click(function(){
$("#sudoshi").animate({top:"40px"},2000);
setTimeout(function(){$("#pikaBegin").css({"background-image":"url(pika/PIKA-02.png)"})},2050)
setTimeout(function(){$("#pikaBegin").css({"background-image":"url(pika/PIKA-01.png)"})},2150)
setTimeout(function(){$("#pikaBegin").css({"background-image":"url(pika/PIKA-02.png)"})},2250)
setTimeout(function(){$("#pikaBegin").css({"background-image":"url(pika/PIKA-01.png)"})},2350)
setTimeout(function(){$("#pikaBegin").css({"background-image":"url(pika/PIKA-02.png)"})},2450)
setTimeout(function(){$("#pikaBlack1").animate({left:"0px"},1300)},2450)
setTimeout(function(){$("#pikaBlack2").animate({left:"425px"},1300)},2450)
setTimeout(function(){$("#sudoshi").hide()},3750)
setTimeout(function(){$("#pikaBegin").hide()},3750)
setTimeout(function(){$("#pikaPika").animate({height:"503px"},900);},3750)
setTimeout(function(){$("#pikaBlack1").animate({left:"-425px"},900);},5550)
setTimeout(function(){$("#pikaBlack2").animate({left:"850px"},900);},5550)




});



	hover();
	$("#atA").click(function(){
		if(y<11)
		{enemyAttack4()}
		else if(y>48&&y<68)
		{enemyAttack4()}
		else{
		setTimeout(function(){identify()},4000)
		pikaAttack1();}
	});
	
	$("#atB").click(function(){
		if(y<11)
		{enemyAttack4()}
		else if(y>48&&y<68)
		{enemyAttack4()}
		else{
		setTimeout(function(){identify()},4000)
		pikaAttack2();}
	});
	
	$("#atC").click(function(){
		if(y<11)
		{enemyAttack4()}
		else if(y>48&&y<68)
		{enemyAttack4()}
		else{
		setTimeout(function(){identify()},4000)
		pikaAttack3();}
	});
	
	$("#atD").click(function(){
		if(y<11)
		{enemyAttack4()}
		else if(y>48&&y<68)
		{enemyAttack4()}
		else{
		setTimeout(function(){identify()},4000)
		pikaAttack4();}
	});
		
});
var x=187 //pika

var y=187 //enemy

function randomAttack(){
	var r = Math.random();
	if(r>0.8)
	{enemyAttack1();}
	else if (r>0.4&&r<0.8)
	{enemyAttack2();}
	else{
	enemyAttack3();}
}
function identify(){
if(y==0)
{game()}
else{
	
	randomAttack()}
	}



function enemyAttack1(){
setTimeout(function(){$("#PIKAtext").text("MEW used Metronome!")},500)//Metronome
setTimeout(function(){$("#PIKAtext").text("It didn't affect!")},2500)
setTimeout(function(){

if(x==0){game()}
	else
{$("#ATCmenu").show();$("#PIKAmenu").show()}
$("#PIKAtext").text("　")
},3000)
}
function enemyAttack2(){
	x=x-60;
	if(x<0)
	{x=0;}
	setTimeout(function(){$("#PIKAtext").text("MEW used Mega Punch!")},500)
	setTimeout(function(){pikaBloodAnimate()},2500);
	setTimeout(function(){

if(x==0){game()}
	else
{$("#ATCmenu").show();$("#PIKAmenu").show()}
$("#PIKAtext").text("　")},3000)
}
function enemyAttack3(){
	x=x-45;
	if(x<0)
	{x=0;}
	
	setTimeout(function(){$("#PIKAtext").text("MEW used Psychic!")},500)
	setTimeout(function(){pikaBloodAnimate()},2500);
	setTimeout(function(){

if(x==0){game()}
	else
{$("#ATCmenu").show();$("#PIKAmenu").show()}
$("#PIKAtext").text("　")},3000)
	
}
function enemyAttack4(){
	x=x-190;
	if(x<0)
	{x=0;}
	setTimeout(function(){$("#PIKAtext").text("MEW used Hyper Beam!")},500)
	setTimeout(function(){pikaBloodAnimate()},2500);
	
	game();
}
function enemyBloodAnimate(){
if(y>20 && y<80){$("#bloodE").css({"background":"orange"})}
else if(y<20){$("#bloodE").css({"background":"red"})}
$("#bloodE").animate({width:y},1000);
}

function pikaBloodAnimate(){

if(x>20 && x<80){$("#bloodO").css({"background":"orange"})}
else if(x<20){$("#bloodO").css({"background":"red"})}

$("#bloodO").animate({width:x},1000);
}
function pikaAttack1(){
$("#ATCmenu").hide();
$("#PIKAmenu").hide();
setTimeout(function(){$("#PIKAtext").text("PIKACHU used Tail Whip!")},500)

setTimeout(function(){
	$("#pika").animate({left:97},100);
	$("#pika").animate({left:87},100);},2000)
setTimeout(function(){$("#PIKAtext").text("It didn't affect!")},3000)	



}
function pikaAttack2(){
	y = y-90
	if(y<0){y=0;}
$("#ATCmenu").hide();
$("#PIKAmenu").hide();
	setTimeout(function(){$("#PIKAtext").text("PIKACHU used Thunderbolt!")},500)
	setTimeout(function(){$("#PIKAtext").text("It's very effect!")},2500)
	setTimeout(function(){enemyBloodAnimate();},2000)
	
}
function pikaAttack3(){
	y = y-50
	if(y<0){y=0;}
$("#ATCmenu").hide();
$("#PIKAmenu").hide();
	setTimeout(function(){$("#PIKAtext").text("PIKACHU used Quick Attack!")},500)
	setTimeout(function(){
	$("#pika").animate({left:97},100);
	$("#pika").animate({left:87},100);},2000)
	setTimeout(function(){enemyBloodAnimate();},3000)
	
}
function pikaAttack4(){
	y = y-35
	if(y<0){y=0;}
$("#ATCmenu").hide();
$("#PIKAmenu").hide();
	setTimeout(function(){$("#PIKAtext").text("PIKACHU used Thundershook!")},500)
	setTimeout(function(){enemyBloodAnimate();},3000)
	

}
function hover(){
	$("#atA").hover(function(){ $("#pointer").stop().animate({top:"32"},100)})
	$("#atB").hover(function(){ $("#pointer").stop().animate({top:"79"},100)})
	$("#atC").hover(function(){ $("#pointer").stop().animate({top:"126"},100)})
	$("#atD").hover(function(){ $("#pointer").stop().animate({top:"173"},100)})

}
function game(){
	if(x==0){
$("#ATCmenu").hide();
$("#PIKAmenu").hide();
setTimeout(function(){$("#PIKAtext").text("You lose!")},3500)
setTimeout(function(){$("#pikaBlack1").animate({left:"0px"},1300)},5500)
setTimeout(function(){$("#pikaBlack2").animate({left:"425px"},1300)},5500)
setTimeout(function(){$("#pikaPika").animate({height:"150px"},900);},6500)
setTimeout(function(){$("#pikaEnd").show();},6900)
setTimeout(function(){$("#pikaBlack1").animate({left:"-425px"},1300)},7500)
setTimeout(function(){$("#pikaBlack2").animate({left:"850px"},1300)},7500)
}
	else if(y==0){
	
	setTimeout(function(){$("#PIKAtext").text("You win!")},3500)
	$("#ATCmenu").hide();
$("#PIKAmenu").hide();
setTimeout(function(){$("#pikaBlack1").animate({left:"0px"},1300)},5500)
setTimeout(function(){$("#pikaBlack2").animate({left:"425px"},1300)},5500)
setTimeout(function(){$("#pikaPika").animate({height:"150px"},900);},6500)
setTimeout(function(){$("#pikaEnd").show();$("#pikaEnd").css({"background-image":"url(pika/pikawin-01.png)"})},6900)
setTimeout(function(){$("#pikaBlack1").animate({left:"-425px"},1300)},7500)
setTimeout(function(){$("#pikaBlack2").animate({left:"850px"},1300)},7500)

}

}
