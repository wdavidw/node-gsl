
var assert = require('assert'),
	gsl = require('gsl');

module.exports = {
	'Test mean': function(){
		assert.eql(20, gsl.statistics.mean([10,30,20]));
	},
	'Test variance': function(){
		assert.eql(100, gsl.statistics.variance([10,30,20]));
		// With mean
		assert.eql(250, gsl.statistics.variance([10,30,20],30));
	},
	'Test sd': function(){
		assert.eql(10, gsl.statistics.sd([10,30,20]));
		assert.eql(16, Math.round(gsl.statistics.sd([10,30,20],30)));
	}
};
