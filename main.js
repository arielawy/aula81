canvas = document.getElementById("myCanvas")
ctx= canvas.getContext("2d")

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 40,0 ,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , myMousedown);

function myMousedown(e)
{

 color = document.getElementById("color").value;
 console.log(color);

mouseX = e.clientX
mouseY = e.clientY

console.log("X = " + mouseX + ",Y =" + mouseY);
circle(mouseX , mouseY);

} 

 function circle(mouseX , mouseY)

 {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouseX , mouseY, 40 , 0 , 2*Math.PI);
ctx.stroke();
 }

