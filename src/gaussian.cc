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

Handle<Value> ranGaussian(const Arguments& args)
{
	double deviation;
	if(args.Length() == 2){
		gsl_rng_set (r_global, args[0]->Uint32Value());
		deviation = args[1]->NumberValue();
	}else if(args.Length() == 1){
		gsl_rng_set (r_global, args[0]->Uint32Value());
		deviation = 3;
	}else{
		deviation = 3;
	}
	double val = gsl_ran_gaussian(r_global, deviation);
	return Number::New(val);
}

Handle<Value> ranGaussianZiggurat(const Arguments& args)
{
	double deviation;
	if(args.Length() == 2){
		gsl_rng_set (r_global, args[0]->Uint32Value());
		deviation = args[1]->NumberValue();
	}else if(args.Length() == 1){
		gsl_rng_set (r_global, args[0]->Uint32Value());
		deviation = 3;
	}else{
		deviation = 3;
	}
	double val = gsl_ran_gaussian_ziggurat(r_global, deviation);
	return Number::New(val);
}

Handle<Value> ranGaussianRatioMethod(const Arguments& args)
{
	double deviation;
	if(args.Length() == 2){
		gsl_rng_set (r_global, args[0]->Uint32Value());
		deviation = args[1]->NumberValue();
	}else if(args.Length() == 1){
		gsl_rng_set (r_global, args[0]->Uint32Value());
		deviation = 3;
	}else{
		deviation = 3;
	}
	double val = gsl_ran_gaussian_ratio_method(r_global, deviation);
	return Number::New(val);
}

extern "C" {
	static void gaussian_init(Handle<Object> target)
	{
		HandleScope scope;
		target->Set(String::New("ranGaussian"), FunctionTemplate::New(ranGaussian)->GetFunction());
		target->Set(String::New("ranGaussianZiggurat"), FunctionTemplate::New(ranGaussianZiggurat)->GetFunction());
		target->Set(String::New("ranGaussianRatioMethod"), FunctionTemplate::New(ranGaussianRatioMethod)->GetFunction());
	}
}

