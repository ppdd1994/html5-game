var aneobj = function(){
  this.x = [];
  this.len = [];
}
aneobj.prototype.num = 35;
aneobj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = i*25 + Math.random()*20;
		this.len[i] = 200 + Math.random()*50;
	};
};
aneobj.prototype.draw = function(){
	ctx2.save();
	ctx2.strokeStyle = "#3b154e";
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	for (var i = 0; i < this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],ch);
		ctx2.lineTo(this.x[i],ch-this.len[i]);
		ctx2.stroke();
	};
	ctx2.restore();
}