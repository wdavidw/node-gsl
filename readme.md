<pre>
           _ 
          | |
  __ _ ___| |
 / _` / __| |
| (_| \__ \ |
 \__, |___/_|
  __/ |      
 |___/      

</pre>

This project provide a binding between the GNU Scientific Library (GSL) and NodeJS.

At the moment, only random functions are integrated.

Installing
----------

Via [npm](http://github.com/isaacs/npm):

    $ npm install gsl

Via git (or downloaded tarball):

    $ git clone http://github.com/wdavidw/node-gsl.git
    $ node-waf configure && node-waf

Random API
----------

Seed arguments are always optional and must be provided as unsigned integers. 

### [Sampling](http://www.gnu.org/software/gsl/manual/html_node/Sampling-from-a-random-number-generator.html)

-	*random.get()*
	Returns a random integer. The minimum and maximum values depend on the algorithm used, but all integers in the range [min,max] are equally likely. The values of min and max can determined using the auxiliary functions `random.min()` and `random.max()`.
		
-	*random.Get([seed])*
	Creates an iterator. Take an optional seed argument as an unsigned int. Random number are obtained by calling `next`.
	*random.Get.next()*
	Same as `random.get` but called from a `random.Get` instance.  
	
-	*random.min()*
	Returns the smallest value that `random.get()` can return
	
-	*random.max()*
	Returns the largest value that `random.get()` can return

-	*random.uniform()*
	Returns a double precision floating point number uniformly distributed in the range [0,1). The range includes 0.0 but excludes 1.0.
		
-	*random.Uniform([seed])*
	Creates an iterator. Take an optional seed argument as an unsigned int. Random number are obtained by calling `next`.
	*random.Uniform.next()*
	Same as `random.uniform` but called from a `random.Uniform` instance.  

### [Gaussian](http://www.gnu.org/software/gsl/manual/html_node/The-Gaussian-Distribution.html)

-	*random.gaussian([seed], [deviation])*
	Returns a Gaussian random float with mean zero. Standart deviation is a float and default to 3.
		
-	*random.Gaussian([seed])*
	Creates an iterator. Take an optional seed argument as an unsigned int. Random number are obtained by calling `next` with an optional deviation.
	Also, the `seed` property is accessible.
	*random.Gaussian.next([deviation])*
	Same as `random.gaussian` but called from a `random.Gaussian` instance. 
	*random.Gaussian.seed*
	Returns the seed used by the iterator. 

Exemple

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

Running the tests
-----------------

Tests are executed with expresso. To install it, simple use `npm install expresso`.

To run the tests
	expresso test

Contributors
------------

*	David Worms : <https://github.com/wdavidw>


