
	var gsl = require('gsl'),
		seed = 50,
		deviation = 0.5;
	
	console.log( gsl.random.gaussian(deviation) );
	console.log( gsl.random.gaussian(seed, deviation) );
	
	var iterator = new gsl.Random(seed);
	console.log( iterator.gaussian(deviation) );
	console.log( iterator.gaussian(deviation) );