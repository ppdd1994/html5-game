var can1,can2,ctx1,ctx2,cw,mx,my,ch,ane,fruit,mom,baby;
var lastTime = new Date();
var dl = 0;
var bgimg = new Image();
var babyTail = [];
var babyEye = [];
var babyBody = [];
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

    for (var i = 0; i < 8; i++) {
    	babyTail[i] = new Image();
    	babyTail[i].src = "./src/babyTail"+i+".png";
    };
    for (var i = 0; i < 2; i++) {
    	babyEye[i] = new Image();
    	babyEye[i].src = "./src/babyEye"+i+".png";
    };
    for (var i = 0; i < 20; i++) {
    	babyBody[i] = new Image();
    	babyBody[i].src = "./src/babyFade"+i+".png";
    };


    ane = new aneobj();
    ane.init();
    fruit = new fruitobj();
    fruit.init();
    mom = new momobj();
    mom.init();
    baby = new babyobj();
    baby.init();
    
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now = new Date();
	dl = now - lastTime;
	if (dl>45) {
		dl = 45;
	};
	lastTime = now;
	drawbg();
	ane.draw();
    fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,cw,ch);
	mom.draw();
	baby.draw();
	collision();
}
function onMouseMove(e){
    mx = e.offSetX || e.layerX;
    my = e.offSetY || e.layerY;
}