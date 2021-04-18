var lastX,lastY;
var color="aqua";
var lineWidth=2;

var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d")
var w = screen.width;
if(w < 992 ){
document.getElementById("myCanvas").width=screen.width - 70;
document.getElementById("myCanvas").height=screen.height - 200;
document.body.style.overflow = "hidden";

}
canvas.addEventListener("touchstart",start);
function start(e){
    lastX=e.touches[0].clientX - canvas.offsetLeft;
    lastY=e.touches[0].clientY - canvas.offsetTop;
    color=document.getElementById("Color").value;
    lineWidth=document.getElementById("width").value;
}
canvas.addEventListener("touchmove",move);
function move (e){
    currentX=e.touches[0].clientX - canvas.offsetLeft;
    currentY=e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();
        lastX = currentX;
        lastY = currentY;
}
function ClearArea (){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}