var aneobj = function(){
  this.rootx = [];
  this.headx = [];
  this.heady = [];
  this.amp = [];
  this.alpha = 0;
}
aneobj.prototype.num = 35;
aneobj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.rootx[i] = i*30 + Math.random()*20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = ch - 250 + Math.random()*50;
		this.amp[i] = Math.random()*50 + 50;
	};
};
aneobj.prototype.draw = function(){
	this.alpha += dl*0.001;
	ctx2.save();
	ctx2.strokeStyle = "#3b154e";
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	for (var i = 0; i < this.num; i++) {
		
		var l = Math.sin(this.alpha);
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],ch);
		ctx2.quadraticCurveTo(this.rootx[i],ch-150,this.headx[i] + l*this.amp[i],this.heady[i]);
		ctx2.stroke();
	};
	ctx2.restore();
}