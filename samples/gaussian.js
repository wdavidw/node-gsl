
	var random = require('gsl').random,
		seed = 50,
		deviation = 0.5;
	
	console.log( random.gaussian() );
	console.log( random.gaussian(seed) );
	console.log( random.gaussian(seed,deviation) );
	
	var it1 = new random.Gaussian();
	console.log( it1.next() );
	it1.seed;
	
	var it1 = new random.Gaussian(seed);
	console.log( it1.next(deviation) );
	console.log( it1.seed );