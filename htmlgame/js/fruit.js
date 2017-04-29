var fruitobj = function(){
  this.alive = [];
  this.oringe = new Image();
  this.blue = new Image();
  this.x = [];
  this.y = [];
  this.l = [];
  this.speed = [];
  this.type = [];
};
fruitobj.prototype.num = 30;

fruitobj.prototype.init = function(){
  this.oringe.src = "src/fruit.png";
  this.blue.src = "src/blue.png";
  for (var i = 0; i < this.num; i++) {
  	this.alive[i] = false;
  	this.x[i] = 0;
  	this.y[i] = 0;
  	this.type[i] = Math.random();
  };

}
fruitobj.prototype.draw = function(){
	for (var i = 0; i < this.num; i++) {
        if (this.alive[i]) {
	        if(this.l[i]<13){
	        	this.l[i] += this.speed[i]*dl;
	        }else{
	        	this.y[i] -= this.speed[i]*dl;
	        }
	        if(this.type[i]>0.17){
	        	ctx2.drawImage(this.oringe,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
	        }else{
	        	ctx2.drawImage(this.blue,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);	
	        }
			
            if (this.y[i]<10) {
             	this.alive[i] = false;
             };
        };
        
	};
}
fruitobj.prototype.born = function(i){
  var aneId = Math.floor(Math.random()*35);
  this.x[i] = ane.x[aneId];
  this.y[i] = ch-ane.len[aneId];
  this.l[i] = 0;
  this.speed[i] = Math.random()*0.017+0.1;
  this.alive[i] = true;
}
fruitobj.prototype.dead = function(i){
  this.alive[i] = false;
}
 function fruitMonitor(){
   var num = 0;
   for (var i = 0; i < fruit.num; i++) {
   	if (fruit.alive[i]) {
  		num++;
   	};
   };
   if (num<15) {
  		sendFruit();
   		return ;
   };
 
 }
  function sendFruit(){
  for (var i = 0; i < fruit.num; i++) {
  	if (!fruit.alive[i]) {
   		fruit.born(i);
   		return;
   	};
  };
 }