
var assert = require('assert'),
	gsl = require('gsl');

module.exports = {
	'Test uniform - function': function(){
		var results = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.uniform();
			assert.ok( typeof random === 'number' );
			assert.ok( random >= 0 && random < 1 );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test uniform - function with seed': function(){
		var results1 = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.uniform(1978);
			assert.ok( typeof random === 'number' );
			results1[ random ] = true;
		}
		var results2 = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.uniform(1978);
			assert.ok( typeof random === 'number' );
			results2[ random ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test uniform - object': function(){
		var results = {};
		var obj = new gsl.random.GaussianRatioMethod();
		for(var i=0;i<100;i++){
			var random = obj.next();
			assert.ok( typeof random === 'number' );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test uniform - object with seed': function(){
		var results1 = {};
		var obj1 = new gsl.random.GaussianRatioMethod(1978);
		for(var i=0;i<100;i++){
			results1[ obj1.next() ] = true;
		}
		var results2 = {};
		var obj2 = new gsl.random.GaussianRatioMethod(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.next() ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	}
};
