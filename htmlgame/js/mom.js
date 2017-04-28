var momobj = function () {
	this.x = 0;
	this.y = 0;
	this.angle = 0;
	this.bigEyes = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
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
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEyes,-this.bigEyes.width*0.5,-this.bigEyes.height*0.5,this.bigEyes.width,this.bigEyes.height);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5,this.bigBody.width,this.bigBody.height);
    ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5,this.bigTail.width,this.bigTail.height);
    ctx1.restore();
}