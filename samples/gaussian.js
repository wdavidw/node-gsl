
	var gsl = require('gsl'),
		seed = 50,
		deviation = 0.5;

	console.log( gsl.random.gaussian() );
	console.log( gsl.random.gaussian(seed) );
	console.log( gsl.random.gaussian(seed, deviation) );
	
	var it1 = new gsl.Random();
	console.log( it1.gaussian() );
	
	var it1 = new gsl.Random(seed);
	console.log( it1.gaussian(deviation) );