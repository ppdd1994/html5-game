var waveobj = function(){
    this.alive = [];
    this.x = [];
    this.y = [];
    this.r = [];
    this.type = []; //0=> fruit, 1=> mom
}
waveobj.prototype.num = 10;
waveobj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 0;
	};
} 
waveobj.prototype.draw = function(){
	for (var i = 0; i < this.num; i++) {
		if(this.alive[i]){
			//draw
            if (this.type[i] == 0) {
            	this.r[i] = this.r[i] + dl*0.05;
				if (this.r[i] > 30) {
					this.dead(i);	
				};
				var alpha = 1 - this.r[i]/30; 
				ctx1.beginPath();
				ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
				ctx1.strokeStyle = "rgba(255,255,255,"+alpha+")";	
				ctx1.closePath();
				ctx1.stroke();
            } else{
            	this.r[i] = this.r[i] + dl*0.05;
				if (this.r[i] > 100) {
					this.dead(i);	
					console.log("draw");	
				};
				var alpha = 1 - this.r[i]/100; 
				ctx1.beginPath();
				ctx1.shadowBlur = 10;
				ctx1,shadowColor = "rgba(203, 91, 0,1)";
				ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
				ctx1.strokeStyle = "rgba(203, 91, 0,"+alpha+")";	
				ctx1.lineWidth = 3;
				ctx1.closePath();
				ctx1.stroke();
            };
			
		}
	};
}
waveobj.prototype.born = function(x,y,type){
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			if (type == 0) {
				this.r[i] = 5;
				this.type[i] ='0'; 
			}else{
				this.r[i] = 10;
				this.type[i] ='1';
			};
			
			return;
		};
	};
}
waveobj.prototype.dead = function(i){
	this.alive[i] = false;
	this.x[i] = 0;
	this.y[i] = 0;
	this.r[i] = 0;
}
