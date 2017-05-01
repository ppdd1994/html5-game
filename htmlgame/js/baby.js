var babyobj = function () {
	this.x = 0;
	this.y = 0;
	this.angle = 0;
	this.babyEyes = new Image();
	this.babyBody = new Image();
    this.babyTail = new Image();
	this.babyTailCount = 0;
	this.tailTime = 0;

	this.babyEyeCount = 0;
	this.eyeTime = 0;
	this.eyeInterval = 1000;

	this.bodyTime = 0;
	this.babyBodyCount = 0;
}
babyobj.prototype.init = function(){
    this.babyEyes.src = "src/babyEye0.png";
    this.babyBody.src = "src/babyFade0.png";
    this.babyTail.src = "src/babyTail0.png"
    this.x = cw*0.5 - 50;
    this.y = ch*0.5 + 50;
}
babyobj.prototype.draw = function(){
    this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);
	var deltaX = mom.x - this.x;
	var deltaY = mom.y - this.y;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.6);
	

    this.tailTime += dl;
	if(this.tailTime > 50){
			this.babyTailCount = (this.babyTailCount+1)%8;
		    this.tailTime %=50;
		}

	this.eyeTime += dl;
    if (this.eyeTime > this.eyeInterval) {
    	this.babyEyeCount = (this.babyEyeCount + 1) % 2;
    	this.eyeTime %= this.eyeInterval;
    	if (this.babyEyeCount == 0) {
    		this.eyeInterval = Math.random()*1500 +1000;
    	}else{
    		this.eyeInterval = 100;
    	}
    };

    this.bodyTime += dl;
    if (this.bodyTime > 300) {
    	this.babyBodyCount = this.babyBodyCount + 1 ;
    	this.bodyTime %= 300 ;
    	if (this.babyBodyCount > 19) {
    		//game over
    		this.babyBodyCount = 19;
            data.gameOver = true;
    	};
    };

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var count = this.babyTailCount;
    var eyeCount = this.babyEyeCount;
    var bodyCount = this.babyBodyCount;
    ctx1.drawImage(babyTail[count],-babyTail[count].width*0.5+30,-babyTail[count].height*0.5,babyTail[count].width,babyTail[count].height);
    ctx1.drawImage(babyBody[bodyCount],-babyBody[bodyCount].width*0.5,-babyBody[bodyCount].height*0.5,babyBody[bodyCount].width,babyBody[bodyCount].height);
    ctx1.drawImage(babyEye[eyeCount],-babyEye[eyeCount].width*0.5,-babyEye[eyeCount].height*0.5,babyEye[eyeCount].width,babyEye[eyeCount].height);
    ctx1.restore();
}