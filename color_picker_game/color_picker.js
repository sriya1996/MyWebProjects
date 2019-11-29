var difficulty=6;
var colors=generateRandomColors(difficulty);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("rgbDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	difficulty=3;
	colors=generateRandomColors(difficulty);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	difficulty=6;
	colors=generateRandomColors(difficulty);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

reset.addEventListener("click",function(){
	//generate a new set of colors
	colors=generateRandomColors(difficulty);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to new picked color
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	}
	//set the background color of h1 back
	h1.style.backgroundColor="#3399ff";
});


for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		//compare with picked color
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			reset.textContent="Play Again!";
			correctColor(clickedColor);
			h1.style.backgroundColor=clickedColor;

		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again!";
		}
	});
}

function correctColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var randomNumber=Math.floor(Math.random()*colors.length);
	return colors[randomNumber];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick a red 0-255
	var r=Math.floor(Math.random()*256);
	//pick a green 0-255
	var g=Math.floor(Math.random()*256);
	//pick a blue 0-255
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
