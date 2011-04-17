
var assert = require('assert'),
	gsl = require('gsl');

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
	
	console.log('Peformance on uniform random generation with seed.');

	var time = (new Date).getTime();
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			(new Marsaglia(1978)).nextDouble();
		}
	}
	console.log('JS ',(new Date).getTime() - time);

	var time = (new Date).getTime();
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			gsl.random.get(1978);
		}
	}
	console.log('C++ get fn',(new Date).getTime() - time);

	var time = (new Date).getTime();
	var random = new gsl.Random(1978);
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			random.get();
		}
	}
	console.log('C++ get it',(new Date).getTime() - time);

	var time = (new Date).getTime();
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			gsl.random.uniform(1978);
		}
	}
	console.log('C++ uniform fn',(new Date).getTime() - time);

	var time = (new Date).getTime();
	var random = new gsl.Random(1978);
	for(var i=0;i<1000000;i++){
		for(var j=0;j<2;j++){
			random.uniform();
		}
	}
	console.log('C++ uniform it',(new Date).getTime() - time);

