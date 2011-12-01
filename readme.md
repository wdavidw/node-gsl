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

At the moment, the library is partially integrated.

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

Using an iterator objects make sense when using seeds and when performance is a concern.

Seeds are always optional and must be provided as unsigned integers. Deviations, used by gaussian functions, are float.

-	`gsl.Random([seed])`   
	Construct a new iterator, seel below for available random methods.
	
-	`gsl.random.get([seed])`   
	`gsl.Random.get()`   
	Returns a random integer. The minimum and maximum values depend on the algorithm used, but all integers in the range [min,max] are equally likely. The values of min and max can determined using the auxiliary functions `random.min()` and `random.max()`.
	
-	`gsl.random.min()`   
	`gsl.Random.min()`   
	Returns the smallest value that `random.get()` can return.
	
-	`gsl.random.max()`   
	`gsl.Random.max()`   
	Returns the largest value that `random.get()` can return.
	
-	`gsl.random.uniform([seed])`   
	`gsl.Random.uniform()`   
	Returns a double precision floating point number uniformly distributed in the range [0,1). The range includes 0.0 but excludes 1.0.
	
-	`gsl.random.gaussian([seed], deviation)`   
	`gsl.Random.gaussian(deviation)`   
	Returns a Gaussian random float with mean zero given a standart deviation as a float.
	
-	`gsl.random.gaussianZiggurat([seed], deviation)`   
	`gsl.Random.gaussianZiggurat(deviation)`   
	Same as `random.gaussian` but using the alternative Marsaglia-Tsang ziggurat method.
	
-	`gsl.random.gaussianRatioMethod([seed], deviation)`   
	`gsl.Random.gaussianRatioMethod(deviation)`   
	Same as `random.gaussian` but using the alternative Kinderman-Monahan-Leva ratio method.
	
-	`gsl.random.poisson([seed], mean)`   
	`gsl.Random.poisson(mean)`   
	Returns a random integer from the Poisson distribution given a provided mean as a float.

### Exemple

```javascript
var gsl = require('gsl'),
	seed = 50,
	deviation = 0.5;

console.log( gsl.random.gaussian(deviation) );
console.log( gsl.random.gaussian(seed, deviation) );

var iterator = new gsl.Random(seed);
console.log( iterator.gaussian(deviation) );
console.log( iterator.gaussian(deviation) );
```

### Resources

*	[Sampling](http://www.gnu.org/software/gsl/manual/html_node/Sampling-from-a-random-number-generator.html)
*	[The Gaussian Distribution](http://www.gnu.org/software/gsl/manual/html_node/The-Gaussian-Distribution.html)
*	[The Poisson Distribution](http://www.gnu.org/software/gsl/manual/html_node/The-Poisson-Distribution.html)

Statistics API
--------------

Data are expected to be arrays of float numbers. Means are float numbers.

-	`gsl.statistics.mean(data)`   
	Returns the arithmetic mean of data.
	
-	`gsl.statistics.variance(data, [mean])`   
	Returns the estimated, or sample, variance of data.
	
-	`gsl.statistics.sd(data, [mean])`   
	Returns the standard deviation defined as the square root of the variance defined above.
	
-	`gsl.statistics.tss(data, [mean])`   
	Return the total sum of squares (TSS) of data about the mean. If mean is not provided, it is computed the same way as above.
	
-	`gsl.statistics.varianceWithFixedMean(data, mean)`   
	Computes an unbiased estimate of the variance of data when the population mean mean of the underlying distribution is known a priori.
	
-	`gsl.statistics.sdWithFixedMean(data, mean)`   
	Calculates the standard deviation of data for a fixed population mean mean. The result is the square root of the corresponding variance function.

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


