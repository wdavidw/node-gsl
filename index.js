
var gsl = require('./build/default/gsl');

module.exports = {
	Random: gsl.Random,
	random: {
		get: gsl.rngGet,
		min: gsl.rngMin,
		max: gsl.rngMax,
		uniform: gsl.rngUniform,
		gaussian: gsl.ranGaussian,
		gaussianZiggurat: gsl.ranGaussianZiggurat,
		gaussianRatioMethod: gsl.ranGaussianRatioMethod,
		poisson: gsl.ranPoisson
	}
};
