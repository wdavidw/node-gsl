
var gsl = require('gsl'),
	fs = require('fs'),
	spawn = require('child_process').spawn;

	if(!fs.existsSync(__dirname+'/gaussian_density')){
		fs.mkdirSync(__dirname+'/gaussian_density',0755);
	}
	
	var stream = fs.createWriteStream(__dirname+'/gaussian_density/function_dev_1.data');
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += gsl.random.gaussian(1);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var stream = fs.createWriteStream(__dirname+'/gaussian_density/function_dev_10.data');
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += gsl.random.gaussian(10);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var stream = fs.createWriteStream(__dirname+'/gaussian_density/object_dev_1.data');
	var ran = new gsl.Random();
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += ran.gaussian(1);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var stream = fs.createWriteStream(__dirname+'/gaussian_density/object_dev_10.data');
	var ran = new gsl.Random();
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += ran.gaussian(10);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var cmd = [''];
	['function_dev_1','function_dev_10','object_dev_1','object_dev_10'].forEach(function(type){
		cmd.push('png(filename="'+__dirname+'/gaussian_density/'+type+'.png", height=295, width=500, bg="white")');
		cmd.push('data <- read.csv("'+__dirname+'/gaussian_density/'+type+'.data", header=F, sep="\\t")');
		cmd.push('d <- density(data[,1])');
		cmd.push('plot(d)');
		cmd.push('dev.off()');
		cmd.push('');
	});
	
	var stream = fs.createWriteStream(__dirname+'/gaussian_density.r');
	stream.write(cmd.join('\n'));
	stream.end();
	stream.on('close', function(){
		var r = spawn('R',['-q','-f',__dirname+'/gaussian_density.r']);
		r.on('exit', function(code){
			if (code !== 0) {
			    return console.log('Make sure R is installed');
			}
		    console.log('PNG are created');
		});
	});


