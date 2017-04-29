var babyobj = function () {
	this.x = 0;
	this.y = 0;
	this.angle = 0;
	this.babyEyes = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}
babyobj.prototype.init = function(){
    this.babyEyes.src = "src/babyEye0.png";
    this.babyBody.src = "src/babyFade0.png";
    this.babyTail.src = "src/babyTail0.png";
    this.x = cw*0.5 - 50;
    this.y = ch*0.5 + 50;
}
babyobj.prototype.draw = function(){
    var deltaX = mom.x - this.x;
	var deltaY = mom.y - this.y;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.6);
	this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail,-this.babyTail.width*0.5+30,-this.babyTail.height*0.5,this.babyTail.width,this.babyTail.height);
    ctx1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5,this.babyBody.width,this.babyBody.height);
    ctx1.drawImage(this.babyEyes,-this.babyEyes.width*0.5,-this.babyEyes.height*0.5,this.babyEyes.width,this.babyEyes.height);
    ctx1.restore();
}