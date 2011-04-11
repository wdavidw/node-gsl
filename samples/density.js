
var random = require('gsl').random,
	fs = require('fs'),
	spawn = require('child_process').spawn;
	
	var stream = fs.createWriteStream(__dirname+'/density/function_seed_no.data');
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += random.gaussian();
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var stream = fs.createWriteStream(__dirname+'/density/function_seed_10.data');
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += random.gaussian(10);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var stream = fs.createWriteStream(__dirname+'/density/object_seed_no.data');
	var ran = new random.Gaussian();
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += ran.next();
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var stream = fs.createWriteStream(__dirname+'/density/object_seed_10.data');
	var ran = new random.Gaussian();
	var buf = '';
	for(var i=0;i<10000;i++){
		buf += ran.next(10);
		buf += '\n';
	}
	stream.write(buf);
	stream.end();
	
	var cmd = [''];
	['function_seed_no','function_seed_10','object_seed_no','object_seed_10'].forEach(function(type){
		cmd.push('png(filename="'+__dirname+'/density/'+type+'.png", height=295, width=500, bg="white")');
		cmd.push('data <- read.csv("'+__dirname+'/density/'+type+'.data", header=F, sep="\\t")');
		cmd.push('d <- density(data[,1])');
		cmd.push('plot(d)');
		cmd.push('dev.off()');
		cmd.push('');
	});
	
	var stream = fs.createWriteStream(__dirname+'/density.r');
	stream.write(cmd.join('\n'));
	stream.end();
	stream.on('close', function(){
		var r = spawn('R',['-q','-f',__dirname+'/density.r']);
		r.on('exit', function(code){
			if (code !== 0) {
			    return console.log('Make sure R is installed');
			}
		    console.log('PNG are created');
		});
	});


