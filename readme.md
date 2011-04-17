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

The library takes two forms, functions and iterator objects. Both respect the same names with different conventions. For exemple, obtaining an uniform random name can be done as `random.get()` as well as `(new Random).get()`. If you wished to provide a seed, then you'll respectivelly call `random.get(seed)` and `(new Random(seed)).get()`

Using an iterator objects make sense when performance is in consideration, specially when using seeds.

Seeds are always optional and must be provided as unsigned integers. Deviations, used by gaussian functions, are float and default to 3.

-	*Random([seed])*
	Construct a new iterator, seel below for available random methods.

### [Sampling](http://www.gnu.org/software/gsl/manual/html_node/Sampling-from-a-random-number-generator.html)

-	*random.get([seed])*
	*Random.get()*
	Returns a random integer. The minimum and maximum values depend on the algorithm used, but all integers in the range [min,max] are equally likely. The values of min and max can determined using the auxiliary functions `random.min()` and `random.max()`.
	
-	*random.min()*
	*Random.min()*
	Returns the smallest value that `random.get()` can return
	
-	*random.max()*
	*Random.max()*
	Returns the largest value that `random.get()` can return
	
-	*random.uniform([seed])*
	*Random.uniform([])*
	Returns a double precision floating point number uniformly distributed in the range [0,1). The range includes 0.0 but excludes 1.0.

### [Gaussian](http://www.gnu.org/software/gsl/manual/html_node/The-Gaussian-Distribution.html)

-	*random.gaussian([seed], [deviation])*
	*Random.gaussian([deviation])*
	Returns a Gaussian random float with mean zero. Standart deviation is a float and default to 3.
	
-	*random.gaussianZiggurat([seed], [deviation])*
	*Random.gaussianZiggurat([deviation])*
	Same as `random.gaussian` but using the alternative Marsaglia-Tsang ziggurat method.
	
-	*random.gaussianRatioMethod([seed], [deviation])*
	*Random.gaussianRatioMethod([deviation])*
	Same as `random.gaussian` but using the alternative Kinderman-Monahan-Leva ratio method.

Exemple

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

Running the tests
-----------------

Tests are executed with expresso. To install it, simply issue `npm install expresso`.

To run the tests
	expresso

Contributors
------------

*	David Worms : <https://github.com/wdavidw>
*	Alzennyr Gomes da Silva : <https://github.com/alzennyr>
*	Leeley Daio-Pires-Dos-Santos : <https://github.com/ldsantos>


