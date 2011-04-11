
var assert = require('assert'),
	gsl = require('gsl');

module.exports = {
	'Test gaussian - function': function(){
		var results = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussian();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian - function with seed': function(){
		var results1 = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussian(1978);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results1[ random ] = true;
		}
		var results2 = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussian(1978);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results2[ random ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian - object': function(){
		var results = {};
		var obj = new gsl.random.Gaussian();
		for(var i=0;i<100;i++){
			var random = obj.next();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian - object with seed': function(){
		var results1 = {};
		var obj1 = new gsl.random.Gaussian(1978);
		for(var i=0;i<100;i++){
			results1[ obj1.next() ] = true;
		}
		var results2 = {};
		var obj2 = new gsl.random.Gaussian(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.next() ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ziggurat - function': function(){
		var results = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussianZiggurat();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian ziggurat - function with seed': function(){
		var results1 = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussianZiggurat(1978);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results1[ random ] = true;
		}
		var results2 = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussianZiggurat(1978);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results2[ random ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ziggurat - object': function(){
		var results = {};
		var obj = new gsl.random.GaussianZiggurat();
		for(var i=0;i<100;i++){
			var random = obj.next();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian ziggurat - object with seed': function(){
		var results1 = {};
		var obj1 = new gsl.random.GaussianZiggurat(1978);
		for(var i=0;i<100;i++){
			results1[ obj1.next() ] = true;
		}
		var results2 = {};
		var obj2 = new gsl.random.GaussianZiggurat(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.next() ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ratio method - function': function(){
		var results = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussianRatioMethod();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian ratio method - function with seed': function(){
		var results1 = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussianRatioMethod(1978);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results1[ random ] = true;
		}
		var results2 = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussianRatioMethod(1978);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results2[ random ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ratio method - object': function(){
		var results = {};
		var obj = new gsl.random.GaussianRatioMethod();
		for(var i=0;i<100;i++){
			var random = obj.next();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian ratio method - object with seed': function(){
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
