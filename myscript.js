
function circle(x,y,size,color){
	const canvas = document.getElementById('myCanvas');
	const context = canvas.getContext('2d');
	context.beginPath();
	context.arc(x,y,size,0,2*Math.PI);
	context.fillStyle = color;
	context.fill();
	context.stroke();
}


function draw(){

	const canvas = document.getElementById('myCanvas');
	const context = canvas.getContext('2d');
    

	context.beginPath();
	context.moveTo(10,10);
	context.lineTo(50,25);
	context.stroke();
	circle(100,100,25,'red');
}

