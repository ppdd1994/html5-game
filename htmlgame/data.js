var dataobj = function(){
	this.fruitnum = 0;
	this.double = 1;
	this.gameOver = false;
	this.score = 0;
}

dataobj.prototype.reset = function(){
	this.fruitnum = 0;
	this.double = 1;
}

dataobj.prototype.draw = function(){
	ctx1.save()
	ctx1.fillStyle = 'white';
	ctx1.font = '20px Verdana';
	ctx1.textAlign = 'center';
	ctx1.fillText(this.score,can1.width*0.5,can1.height-10);
	if (data.gameOver) {
		ctx1.fillText("GameOver",can1.width*0.5,can1.height*0.5);
	};
	ctx1.restore()
}
dataobj.prototype.addscore = function(){
	this.score += this.fruitnum*10 * this.double;
}