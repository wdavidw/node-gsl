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

This project provide a binding with the GNU Scientific Library (GSL).

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

[Gaussian](http://www.gnu.org/software/gsl/manual/html_node/The-Gaussian-Distribution.html)

-	*random.gaussian([seed], [deviation])*
	Function returning a Gaussian random float with mean zero. Standart deviation default to 0.
		
-	*random.Gaussian([seed])*
	Create an iterator used by calling the `next` function with an optional deviation.
	Also, the `seed` property is made accessible the iteratator object.

Seeds must be integers while deviations and returned values are float.

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


