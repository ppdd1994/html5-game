var momobj = function () {
	this.x = 0;
	this.y = 0;
	this.angle = 0;
	this.bigEyes = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();

	this.tailTime = 0;
	this.tailCount = 0;

	this.eyeTime = 0;
	this.eyeCount = 0;
	this.eyeInterval = 1000;

	this.bodyCount = 0;
}
momobj.prototype.init = function(){
    this.bigEyes.src = "src/bigEye0.png";
    this.bigBody.src = "src/bigSwim0.png";
    this.bigTail.src = "src/bigTail0.png";
    this.x = cw*0.5;
    this.y = ch*0.5;
}
momobj.prototype.draw = function(){

	if(mx!== undefined && my!== undefined){
		var deltaX = mx - this.x;
		var deltaY = my - this.y;
		var beta = Math.atan2(deltaY,deltaX) + Math.PI;
		this.angle = lerpAngle(beta, this.angle, 0.6);
		this.x = lerpDistance(mx, this.x, 0.9);
		this.y = lerpDistance(my, this.y, 0.9);
	};

	this.tailTime += dl;
	if (this.tailTime > 50) {
		this.tailCount = (this.tailCount+1)%8;
		this.tailTime %=50;
	};
    
    this.eyeTime +=dl;
    if (this.eyeTime > this.eyeInterval) {
      this.eyeCount = (this.eyeCount + 1)%2;
      this.eyeTime %= this.eyeInterval;
      if (this.eyeCount == 0) {
      	this.eyeInterval = Math.random()*1000+2000;
      }else{
        this.eyeInterval = 200;
      }
    };

    
   
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);

    var tailCount = this.tailCount;
    var eyeCount = this.eyeCount;
    var bodyCount = this.bodyCount;
    ctx1.drawImage(momTail[tailCount],-momTail[tailCount].width*0.5+30,-momTail[tailCount].height*0.5,momTail[tailCount].width,momTail[tailCount].height);
    if (data.double == 1) {
      ctx1.drawImage(momBodyOri[bodyCount],-momBodyOri[bodyCount].width*0.5,-momBodyOri[bodyCount].height*0.5,momBodyOri[bodyCount].width,momBodyOri[bodyCount].height);
    }else{
      ctx1.drawImage(momBodyBlu[bodyCount],-momBodyBlu[bodyCount].width*0.5,-momBodyBlu[bodyCount].height*0.5,momBodyBlu[bodyCount].width,momBodyBlu[bodyCount].height);
    
    };
    ctx1.drawImage(momEye[eyeCount],-momEye[eyeCount].width*0.5,-momEye[eyeCount].height*0.5,momEye[eyeCount].width,momEye[eyeCount].height);
    ctx1.restore();
}