
var gsl = require('gsl'),
	fs = require('fs'),
	spawn = require('child_process').spawn;

	if(!fs.existsSync(__dirname+'/poisson_density')){
		fs.mkdirSync(__dirname+'/poisson_density',0755);
	}
	
	var stream = fs.createWriteStream(__dirname+'/poisson_density/function_mean_1.data');
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += gsl.random.poisson(1);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var stream = fs.createWriteStream(__dirname+'/poisson_density/function_mean_10.data');
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += gsl.random.poisson(10);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var stream = fs.createWriteStream(__dirname+'/poisson_density/object_mean_1.data');
	var ran = new gsl.Random();
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += ran.poisson(1);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var stream = fs.createWriteStream(__dirname+'/poisson_density/object_mean_10.data');
	var ran = new gsl.Random(10);
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += ran.poisson(10);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var cmd = [''];
	['function_mean_1','function_mean_10','object_mean_1','object_mean_10'].forEach(function(type){
		cmd.push('png(filename="'+__dirname+'/poisson_density/'+type+'.png", height=295, width=500, bg="white")');
		cmd.push('data <- read.csv("'+__dirname+'/poisson_density/'+type+'.data", header=F, sep="\\t")');
		cmd.push('d <- density(data[,1])');
		cmd.push('plot(d)');
		cmd.push('dev.off()');
		cmd.push('');
	});
	
	var stream = fs.createWriteStream(__dirname+'/poisson_density.r');
	stream.write(cmd.join('\n'));
	stream.end();
	stream.on('close', function(){
		var r = spawn('R',['-q','-f',__dirname+'/poisson_density.r']);
		r.on('exit', function(code){
			if (code !== 0) {
			    return console.log('Make sure R is installed');
			}
		    console.log('PNG are created');
		});
	});


