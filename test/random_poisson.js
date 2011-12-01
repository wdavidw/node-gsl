
var assert = require('assert'),
	gsl = require('..');

module.exports = {
	'Test poisson - arguments': function(){
		try{
			gsl.random.poisson();
			assert.ok(false);
		}catch(e){
			assert.eql('Invalid argument',e.message);
		}
		try{
			(new gsl.Random()).poisson();
			assert.ok(false);
		}catch(e){
			assert.eql('Invalid argument',e.message);
		}
	},
	'Test poisson - function': function(){
		var results = {};
		for(var i=0;i<100;i++){
			var mean = 2;
			var random = gsl.random.poisson(10000000);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test poisson - function with seed': function(){
		var results1 = {}, results2 = {};
		for(var i=0;i<100;i++){
			results1[ gsl.random.poisson(1978, 10000000) ] = true;
		}
		for(var i=0;i<100;i++){
			results2[ gsl.random.poisson(1978, 10000000) ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test poisson - object': function(){
		var results = {};
		var obj = new gsl.Random();
		for(var i=0;i<100;i++){
			var random = obj.poisson(10000000);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test poisson - object with seed': function(){
		var results1 = {}, results2 = {};
		var obj1 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results1[ obj1.poisson(10000000) ] = true;
		}
		var obj2 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.poisson(10000000) ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	}
};
