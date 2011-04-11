
var gsl = require('./build/default/gsl');

module.exports = {
	random: {
		get: gsl.rngGet,
		Get: gsl.RngGet,
		min: gsl.rngMin,
		max: gsl.rngMax,
		uniform: gsl.rngUniform,
		Uniform: gsl.RngUniform,
		gaussian: gsl.ranGaussian,
		Gaussian: gsl.RanGaussian,
		gaussianZiggurat: gsl.ranGaussianZiggurat,
		GaussianZiggurat: gsl.RanGaussianZiggurat,
		gaussianRatioMethod: gsl.ranGaussianRatioMethod,
		GaussianRatioMethod: gsl.RanGaussianRatioMethod
	}
};

