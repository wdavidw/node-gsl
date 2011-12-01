
var gsl = require('./build/Release/gsl');

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
	},
	statistics: {
		mean: gsl.statisticsMean,
		variance: gsl.statisticsVariance,
		sd: gsl.statisticsSd,
		tss: gsl.statisticsTss,
		varianceWithFixedMean: gsl.statisticsVarianceWithFixedMean,
		sdWithFixedMean: gsl.statisticsSdWithFixedMean,
	}
};
