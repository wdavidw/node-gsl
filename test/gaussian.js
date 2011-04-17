
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
		var results1 = {}, results2 = {};
		for(var i=0;i<100;i++){
			results1[ gsl.random.gaussian(1978) ] = true;
		}
		for(var i=0;i<100;i++){
			results2[ gsl.random.gaussian(1978) ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian - object': function(){
		var results = {};
		var obj = new gsl.Random();
		for(var i=0;i<100;i++){
			var random = obj.gaussian();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian - object with seed': function(){
		var results1 = {}, results2 = {};
		var obj1 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results1[ obj1.gaussian() ] = true;
		}
		var obj2 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.gaussian() ] = true;
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
		var results1 = {}, results2 = {};
		for(var i=0;i<100;i++){
			results1[ gsl.random.gaussianZiggurat(1978) ] = true;
		}
		for(var i=0;i<100;i++){
			results2[ gsl.random.gaussianZiggurat(1978) ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ziggurat - object': function(){
		var results = {};
		var obj = new gsl.Random();
		for(var i=0;i<100;i++){
			var random = obj.gaussianZiggurat();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian ziggurat - object with seed': function(){
		var results1 = {}, results2 = {};
		var obj1 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results1[ obj1.gaussianZiggurat() ] = true;
		}
		var obj2 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.gaussianZiggurat() ] = true;
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
		var results1 = {}, results2 = {};
		for(var i=0;i<100;i++){
			results1[ gsl.random.gaussianRatioMethod(1978) ] = true;
		}
		for(var i=0;i<100;i++){
			results2[ gsl.random.gaussianRatioMethod(1978) ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ratio method - object': function(){
		var results = {};
		var obj = new gsl.Random();
		for(var i=0;i<100;i++){
			var random = obj.gaussianRatioMethod();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian ratio method - object with seed': function(){
		var results1 = {}, results2 = {};
		var obj1 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results1[ obj1.gaussianRatioMethod() ] = true;
		}
		var obj2 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.gaussianRatioMethod() ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	}
};
