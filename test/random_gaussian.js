
var assert = require('assert'),
	gsl = require('gsl');

module.exports = {
	'Test gaussian - arguments': function(){
		try{
			gsl.random.gaussian();
			assert.ok(false);
		}catch(e){
			assert.eql('Invalid argument',e.message);
		}
		try{
			(new gsl.Random()).gaussian();
			assert.ok(false);
		}catch(e){
			assert.eql('Invalid argument',e.message);
		}
	},
	'Test gaussian - function': function(){
		var results = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussian(1);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian - function with seed': function(){
		var results1 = {}, results2 = {};
		for(var i=0;i<100;i++){
			results1[ gsl.random.gaussian(1978,1) ] = true;
		}
		for(var i=0;i<100;i++){
			results2[ gsl.random.gaussian(1978,1) ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian - object': function(){
		var results = {};
		var obj = new gsl.Random();
		for(var i=0;i<100;i++){
			var random = obj.gaussian(1);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian - object with seed': function(){
		var results1 = {}, results2 = {};
		var obj1 = new gsl.Random(1978,1);
		for(var i=0;i<100;i++){
			results1[ obj1.gaussian(1) ] = true;
		}
		var obj2 = new gsl.Random(1978,1);
		for(var i=0;i<100;i++){
			results2[ obj2.gaussian(1) ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ziggurat - function': function(){
		var results = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussianZiggurat(1);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian ziggurat - function with seed': function(){
		var results1 = {}, results2 = {};
		for(var i=0;i<100;i++){
			results1[ gsl.random.gaussianZiggurat(1978,1) ] = true;
		}
		for(var i=0;i<100;i++){
			results2[ gsl.random.gaussianZiggurat(1978,1) ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ziggurat - object': function(){
		var results = {};
		var obj = new gsl.Random();
		for(var i=0;i<100;i++){
			var random = obj.gaussianZiggurat(1);
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
			results1[ obj1.gaussianZiggurat(1) ] = true;
		}
		var obj2 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.gaussianZiggurat(1) ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ratio method - function': function(){
		var results = {};
		for(var i=0;i<100;i++){
			var random = gsl.random.gaussianRatioMethod(1);
			assert.ok( 'number', typeof random );
			assert.ok( !isNaN(random) );
			results[ random ] = true;
		}
		assert.eql(100, Object.keys(results).length);
	},
	'Test gaussian ratio method - function with seed': function(){
		var results1 = {}, results2 = {};
		for(var i=0;i<100;i++){
			results1[ gsl.random.gaussianRatioMethod(1978,1) ] = true;
		}
		for(var i=0;i<100;i++){
			results2[ gsl.random.gaussianRatioMethod(1978,1) ] = true;
		}
		assert.eql(1,Object.keys(results1).length);
		assert.eql(results1,results2);
	},
	'Test gaussian ratio method - object': function(){
		var results = {};
		var obj = new gsl.Random();
		for(var i=0;i<100;i++){
			var random = obj.gaussianRatioMethod(1);
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
			results1[ obj1.gaussianRatioMethod(1) ] = true;
		}
		var obj2 = new gsl.Random(1978);
		for(var i=0;i<100;i++){
			results2[ obj2.gaussianRatioMethod(1) ] = true;
		}
		assert.eql(100,Object.keys(results1).length);
		assert.eql(results1,results2);
	}
};
