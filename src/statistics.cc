/* This code is PUBLIC DOMAIN, and is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. See the accompanying
 * LICENSE file.
 */

#include <v8.h>
#include <node.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#include "./gsl.h"

using namespace node;
using namespace v8;
// Note about stride http://awhan.wordpress.com/2009/06/17/gsl-vector-stride/

Handle<Value> statisticsMean(const Arguments& args){
	if(args.Length() != 1){
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
    Local<Array> data_arg = Local<Array>::Cast(args[0]);
    double datas [data_arg->Length()];
    for(int i=0; i<data_arg->Length(); i++){
    	datas[i] = data_arg->Get(i)->NumberValue();
    }
    double val = gsl_stats_mean(datas, 1, data_arg->Length());
    return Number::New(val);
}

Handle<Value> statisticsVariance(const Arguments& args){
	Local<Array> data_arg;
	bool useMean = false;
	double mean;
	if(args.Length() == 2){
		data_arg = Local<Array>::Cast(args[0]);
		mean = args[1]->NumberValue();
		useMean = true;
	}else if(args.Length() == 1){
		data_arg = Local<Array>::Cast(args[0]);
	}else{
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
    double datas [data_arg->Length()];
    for(int i=0; i<data_arg->Length(); i++){
    	datas[i] = data_arg->Get(i)->NumberValue();
    }
    double val;
    if(useMean){
    	val = gsl_stats_variance_m(datas, 1, data_arg->Length(), mean);
    }else{
        val = gsl_stats_variance(datas, 1, data_arg->Length());
    }
    return Number::New(val);
}

Handle<Value> statisticsSd(const Arguments& args){
	Local<Array> data_arg;
	bool useMean = false;
	double mean;
	if(args.Length() == 2){
		data_arg = Local<Array>::Cast(args[0]);
		mean = args[1]->NumberValue();
		useMean = true;
	}else if(args.Length() == 1){
		data_arg = Local<Array>::Cast(args[0]);
	}else{
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
    double datas [data_arg->Length()];
    for(int i=0; i<data_arg->Length(); i++){
    	datas[i] = data_arg->Get(i)->NumberValue();
    }
    double val;
    if(useMean){
    	val = gsl_stats_sd_m(datas, 1, data_arg->Length(), mean);
    }else{
        val = gsl_stats_sd(datas, 1, data_arg->Length());
    }
    return Number::New(val);
}

Handle<Value> statisticsTss(const Arguments& args){
	Local<Array> data_arg;
	bool useMean = false;
	double mean;
	if(args.Length() == 2){
		data_arg = Local<Array>::Cast(args[0]);
		mean = args[1]->NumberValue();
		useMean = true;
	}else if(args.Length() == 1){
		data_arg = Local<Array>::Cast(args[0]);
	}else{
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
    double datas [data_arg->Length()];
    for(int i=0; i<data_arg->Length(); i++){
    	datas[i] = data_arg->Get(i)->NumberValue();
    }
    double val;
    if(useMean){
    	val = gsl_stats_tss_m(datas, 1, data_arg->Length(), mean);
    }else{
        val = gsl_stats_tss(datas, 1, data_arg->Length());
    }
    return Number::New(val);
}

Handle<Value> statisticsVarianceWithFixedMean(const Arguments& args){
	Local<Array> data_arg;
	double mean;
	if(args.Length() == 2){
		data_arg = Local<Array>::Cast(args[0]);
		mean = args[1]->NumberValue();
	}else{
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
    double datas [data_arg->Length()];
    for(int i=0; i<data_arg->Length(); i++){
    	datas[i] = data_arg->Get(i)->NumberValue();
    }
    double val = gsl_stats_variance_with_fixed_mean(datas, 1, data_arg->Length(), mean);
    return Number::New(val);
}

Handle<Value> statisticsSdWithFixedMean(const Arguments& args){
	Local<Array> data_arg;
	double mean;
	if(args.Length() == 2){
		data_arg = Local<Array>::Cast(args[0]);
		mean = args[1]->NumberValue();
	}else{
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
    double datas [data_arg->Length()];
    for(int i=0; i<data_arg->Length(); i++){
    	datas[i] = data_arg->Get(i)->NumberValue();
    }
    double val = gsl_stats_sd_with_fixed_mean(datas, 1, data_arg->Length(), mean);
    return Number::New(val);
}

extern "C" {
	static void statistics_init(Handle<Object> target)
	{
		HandleScope scope;
		target->Set(String::New("statisticsMean"),FunctionTemplate::New(statisticsMean)->GetFunction());
		target->Set(String::New("statisticsVariance"),FunctionTemplate::New(statisticsVariance)->GetFunction());
		target->Set(String::New("statisticsSd"),FunctionTemplate::New(statisticsSd)->GetFunction());
		target->Set(String::New("statisticsTss"),FunctionTemplate::New(statisticsTss)->GetFunction());
		target->Set(String::New("statisticsTss"),FunctionTemplate::New(statisticsTss)->GetFunction());
		target->Set(String::New("statisticsVarianceWithFixedMean"),FunctionTemplate::New(statisticsVarianceWithFixedMean)->GetFunction());
		target->Set(String::New("statisticsSdWithFixedMean"),FunctionTemplate::New(statisticsSdWithFixedMean)->GetFunction());
	}
}

