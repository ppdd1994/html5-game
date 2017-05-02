var dataobj = function(){
	this.fruitnum = 0;
	this.double = 1;
	this.gameOver = false;
	this.score = 0;
	this.alpha =0;
}

dataobj.prototype.reset = function(){
	this.fruitnum = 0;
	this.double = 1;
}

dataobj.prototype.draw = function(){
	ctx1.save()
	ctx1.shadowBlur = 20;
	ctx1.shadowColor = "white";
	ctx1.fillStyle = 'white';
	ctx1.font = '20px Verdana';
	ctx1.textAlign = 'center';
	ctx1.fillText("Score: "+this.score,can1.width*0.5,can1.height-10);
	if (data.gameOver) {
		this.alpha += dl*0.0007;
		if (this.alpha > 1) {
			this.alpha = 1;
		};
		ctx1.fillStyle = "rgba(255,255,255,"+ this.alpha + ")";
		ctx1.fillText("GameOver",can1.width*0.5,can1.height*0.5);
	};
	ctx1.restore()
}
dataobj.prototype.addscore = function(){
	this.score += this.fruitnum * this.double;
	this.reset();
}

  