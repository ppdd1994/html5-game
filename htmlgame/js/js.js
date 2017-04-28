var can1,can2,ctx1,ctx2,cw,mx,my,ch,ane,fruit,mom;
var lastTime = new Date();
var dl = 0;
var bgimg = new Image();
document.body.onload = game;

function game(){
	init();
	gameloop();
}

function init(){
    can1 = document.getElementById("canvas1");
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById("canvas2");
    ctx2 = can2.getContext('2d');
    cw = can1.width;
    ch = can1.height;
    can1.addEventListener('mousemove',onMouseMove,false);
    bgimg.src = "src/background.jpg";
    ane = new aneobj();
    ane.init();
    fruit = new fruitobj();
    fruit.init();
    mom = new momobj();
    mom.init();
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now = new Date();
	dl = now - lastTime;
	lastTime = now;
	drawbg();
	ane.draw();
    fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,cw,ch);
	mom.draw();
}
function onMouseMove(e){
    mx = e.offSetX || e.layerX;
    my = e.offSetY || e.layerY;
}