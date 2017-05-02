function momfruitCollision () {
	// body...
	for (var i = 0; i < fruit.num; i++) {
		if(data.gameOver){
			return;
		}
		if (fruit.alive[i]) {
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l<900){
				fruit.dead(i);

				if (fruit.type[i] == "blue") {
				    data.double = 2;
			    };
				data.fruitnum++;
				mom.bodyCount++;
				if (mom.bodyCount > 7 ) {
					mom.bodyCount = 7;
				};
				wave.born(fruit.x[i], fruit.y[i],0);
			}
		};
		
		
	};
}

function mombabyCollision(){
	if(data.gameOver){
			return;
		}
	var l = calLength2(mom.x,mom.y,baby.x,baby.y);
	if (l < 900) {
		if (data.fruitnum > 0) {
			wave.born(mom.x,mom.y,1);
			data.addscore();
		    baby.babyBodyCount = 0;
		    mom.bodyCount = 0;

	};
		
	};
}