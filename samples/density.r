
png(filename="/Users/wdavidw/www/src/node/adaltas/gsl/samples/density/function_seed_no.png", height=295, width=500, bg="white")
data <- read.csv("/Users/wdavidw/www/src/node/adaltas/gsl/samples/density/function_seed_no.data", header=F, sep="\t")
d <- density(data[,1])
plot(d)
dev.off()

png(filename="/Users/wdavidw/www/src/node/adaltas/gsl/samples/density/function_seed_10.png", height=295, width=500, bg="white")
data <- read.csv("/Users/wdavidw/www/src/node/adaltas/gsl/samples/density/function_seed_10.data", header=F, sep="\t")
d <- density(data[,1])
plot(d)
dev.off()

png(filename="/Users/wdavidw/www/src/node/adaltas/gsl/samples/density/object_seed_no.png", height=295, width=500, bg="white")
data <- read.csv("/Users/wdavidw/www/src/node/adaltas/gsl/samples/density/object_seed_no.data", header=F, sep="\t")
d <- density(data[,1])
plot(d)
dev.off()

png(filename="/Users/wdavidw/www/src/node/adaltas/gsl/samples/density/object_seed_10.png", height=295, width=500, bg="white")
data <- read.csv("/Users/wdavidw/www/src/node/adaltas/gsl/samples/density/object_seed_10.data", header=F, sep="\t")
d <- density(data[,1])
plot(d)
dev.off()
