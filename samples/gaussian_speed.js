
var assert = require('assert'),
	gsl = require('gsl');

	var js_gaussian = function(seed, mean, std) {
		var v1, v2, s,
			secondSeed = seed +1,
			mean = mean || 0,
			std = std || 1;
		do {
	    	v1 = 2 *  (new Marsaglia(seed)).nextDouble() - 1; // between -1.0 and 1.0
	    	v2 = 2 *  (new Marsaglia(secondSeed)).nextDouble() - 1; // between -1.0 and 1.0
	    	s = v1 * v1 + v2 * v2;
	    	if (s >= 1) secondSeed++;
		} while (s >= 1 || s === 0);
		var multiplier = Math.sqrt(-2 * Math.log(s) / s);
		return  (v1 * multiplier) * std + mean;
	};

	function Marsaglia(i1, i2) {
	  // from http://www.math.uni-bielefeld.de/~sillke/ALGORITHMS/random/marsaglia-c
	  var z=i1 || 362436069, w= i2 || 521288629;
	  var nextInt = function() {
	    z=(36969*(z&65535)+(z>>>16)) & 0xFFFFFFFF;
	    w=(18000*(w&65535)+(w>>>16)) & 0xFFFFFFFF;
	    return (((z&0xFFFF)<<16) | (w&0xFFFF)) & 0xFFFFFFFF;
	  };
	  

	  this.nextDouble = function() {
	    var i = nextInt() / 4294967296;
	    return i < 0 ? 1 + i : i;
	    
	  };
	  this.nextInt = nextInt;
	}
	
	console.log('Peformance on gaussian random generation with seed.');

	var time = (new Date).getTime();
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			js_gaussian(1978);
		}
	}
	console.log('JS ',(new Date).getTime() - time);

	var time = (new Date).getTime();
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			gsl.random.gaussian(1978,1);
		}
	}
	console.log('C++ fn',(new Date).getTime() - time);

	var time = (new Date).getTime();
	var random = new gsl.Random(1978);
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			random.gaussian(1);
		}
	}
	console.log('C++ it',(new Date).getTime() - time);

	var time = (new Date).getTime();
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			gsl.random.gaussianZiggurat(1978,1);
		}
	}
	console.log('C++ fn Ziggurat',(new Date).getTime() - time);

	var time = (new Date).getTime();
	var random = new gsl.Random(1978);
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			random.gaussianZiggurat(1);
		}
	}
	console.log('C++ it Ziggurat',(new Date).getTime() - time);

	var time = (new Date).getTime();
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			gsl.random.gaussianRatioMethod(1978,1);
		}
	}
	console.log('C++ fn RatioMethod',(new Date).getTime() - time);

	var time = (new Date).getTime();
	var random = new gsl.Random(1978);
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			random.gaussianRatioMethod(1);
		}
	}
	console.log('C++ it RatioMethod',(new Date).getTime() - time);

