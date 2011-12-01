
var assert = require('assert'),
	gsl = require('..');

module.exports = {
	'Test min - function': function(){
		assert.eql('number', typeof gsl.random.min());
		assert.ok(!isNaN(gsl.random.min()));
	},
	'Test max - function': function(){
		assert.eql('number', typeof gsl.random.max());
		assert.ok(!isNaN(gsl.random.max()));
	},
	'Test get - function': function(){
		var results = {},
			min = gsl.random.min(),
			max = gsl.random.max();
		for(var i=0;i<100;i++){
			var random = gsl.random.get();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			assert.eql( random, parseInt(random) );
			assert.ok( random >= min && random < max );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test get - function with seed': function(){
		var results1 = {}, results2 = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.get(1978);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results1[ random ] = true;
		}
		for(var i=0;i<100;i++){
			var random = gsl.random.get(1978);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results2[ random ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test get - object': function(){
		var results = {};
		var obj = new gsl.Random();
		for(var i=0;i<100;i++){
			var random = obj.get();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test get - object with seed': function(){
		var results1 = {}, results2 = {};
		var obj1 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results1[ obj1.get() ] = true;
		}
		var obj2 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.get() ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test uniform - function': function(){
		var results = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.uniform();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			assert.ok( random >= 0 && random < 1 );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test uniform - function with seed': function(){
		var results1 = {}, results2 = {};
		for(var i=0;i<100;i++){
			results1[ gsl.random.uniform(1978) ] = true;
		}
		for(var i=0;i<100;i++){
			results2[ gsl.random.uniform(1978) ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test uniform - object': function(){
		var results = {};
		var obj = new gsl.Random();
		for(var i=0;i<100;i++){
			var random = obj.uniform();
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test uniform - object with seed': function(){
		var results1 = {}, results2 = {};
		var obj1 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results1[ obj1.uniform() ] = true;
		}
		var obj2 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.uniform() ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	}
};
