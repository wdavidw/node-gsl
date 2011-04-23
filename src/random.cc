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

Handle<Value> rngGet(const Arguments& args)
{
	if(args.Length() == 1){
		gsl_rng_set (r_global, args[0]->Uint32Value());
	}else if(args.Length() != 0){
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
	unsigned int val = gsl_rng_get(r_global);
	return Int32::NewFromUnsigned(val);
}

Handle<Value> rngMin(const Arguments& args)
{
	if(args.Length() != 0){
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
	double val = gsl_rng_min(r_global);
	return Int32::NewFromUnsigned(val);
}

Handle<Value> rngMax(const Arguments& args)
{
	if(args.Length() != 0){
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
	double val = gsl_rng_max(r_global);
	return Int32::NewFromUnsigned(val);
}

Handle<Value> rngUniform(const Arguments& args)
{
	if(args.Length() == 1){
		gsl_rng_set (r_global, args[0]->Uint32Value());
	}else if(args.Length() != 0){
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
	double val = gsl_rng_uniform(r_global);
	return Number::New(val);
}

Handle<Value> ranPoisson(const Arguments& args)
{
	double mean;
	if(args.Length() == 2){
		gsl_rng_set (r_global, args[0]->Uint32Value());
		mean = args[1]->NumberValue();
	}else if(args.Length() == 1){
		mean = args[0]->NumberValue();
	}else{
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
	double val = gsl_ran_poisson(r_global, mean);
	return Number::New(val);
}

Handle<Value> ranGaussian(const Arguments& args)
{
	double deviation;
	if(args.Length() == 2){
		gsl_rng_set (r_global, args[0]->Uint32Value());
		deviation = args[1]->NumberValue();
	}else if(args.Length() == 1){
		deviation = args[0]->NumberValue();
	}else{
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
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
		deviation = args[0]->NumberValue();
	}else{
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
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
		deviation = args[0]->NumberValue();
	}else{
		return ThrowException(Exception::TypeError(String::New("Invalid argument")));
	}
	double val = gsl_ran_gaussian_ratio_method(r_global, deviation);
	return Number::New(val);
}

class Random: public ObjectWrap
{
private:
	gsl_rng *_gsl_rng;
public:
	int seed;
	static Persistent<FunctionTemplate> s_ct;
	static void Init(Handle<Object> target)
	{
		HandleScope scope;
		Local<FunctionTemplate> t = FunctionTemplate::New(New);
		s_ct = Persistent<FunctionTemplate>::New(t);
		s_ct->InstanceTemplate()->SetInternalFieldCount(1);
		s_ct->SetClassName(String::NewSymbol("Random"));
		NODE_SET_PROTOTYPE_METHOD(s_ct, "get", Get);
		NODE_SET_PROTOTYPE_METHOD(s_ct, "uniform", Uniform);
		NODE_SET_PROTOTYPE_METHOD(s_ct, "gaussian", Gaussian);
		NODE_SET_PROTOTYPE_METHOD(s_ct, "gaussianZiggurat", GaussianZiggurat);
		NODE_SET_PROTOTYPE_METHOD(s_ct, "gaussianRatioMethod", GaussianRatioMethod);
		NODE_SET_PROTOTYPE_METHOD(s_ct, "poisson", Poisson);
		target->Set(String::NewSymbol("Random"), s_ct->GetFunction());
	}
	~Random()
	{
		gsl_rng_free(this->_gsl_rng);
	}
	static Handle<Value> New(const Arguments& args)
	{
		HandleScope scope;
		Random* g = new Random();
		g->Wrap(args.Holder());
		g->_gsl_rng = gsl_rng_alloc(gsl_rng_default);
		if(args.Length() == 1){
			g->seed = args[0]->Uint32Value();
		    gsl_rng_set(g->_gsl_rng, g->seed);
		}
		return args.Holder();
	}
	static Handle<Value> Get(const Arguments& args)
	{
		HandleScope scope;
		if(args.Length() != 0){
			return ThrowException(Exception::TypeError(String::New("Invalid argument")));
		}
		Random* g = ObjectWrap::Unwrap<Random>(args.Holder());
		unsigned int val = gsl_rng_get(g->_gsl_rng);
		return scope.Close(Int32::NewFromUnsigned(val));
	}
	static Handle<Value> Uniform(const Arguments& args)
	{
		HandleScope scope;
		if(args.Length() != 0){
			return ThrowException(Exception::TypeError(String::New("Invalid argument")));
		}
		Random* g = ObjectWrap::Unwrap<Random>(args.Holder());
		double val = gsl_rng_uniform(g->_gsl_rng);
		return scope.Close(Number::New(val));
	}
	static Handle<Value> Gaussian(const Arguments& args)
	{
		HandleScope scope;
		Random* g = ObjectWrap::Unwrap<Random>(args.Holder());
	    double deviation;
		if(args.Length() == 1){
			 deviation = args[0]->NumberValue();
		}else{
			return ThrowException(Exception::TypeError(String::New("Invalid argument")));
		}
		double val = gsl_ran_gaussian(g->_gsl_rng, deviation);
		return scope.Close(Number::New(val));
	}
	static Handle<Value> GaussianZiggurat(const Arguments& args)
	{
		HandleScope scope;
		Random* g = ObjectWrap::Unwrap<Random>(args.Holder());
	    double deviation;
		if(args.Length() == 1){
			 deviation = args[0]->NumberValue();
		}else{
			return ThrowException(Exception::TypeError(String::New("Invalid argument")));
		}
		double val = gsl_ran_gaussian_ziggurat(g->_gsl_rng, deviation);
		return scope.Close(Number::New(val));
	}
	static Handle<Value> GaussianRatioMethod(const Arguments& args)
	{
		HandleScope scope;
		Random* g = ObjectWrap::Unwrap<Random>(args.Holder());
	    double deviation;
		if(args.Length() == 1){
			 deviation = args[0]->NumberValue();
		}else{
			return ThrowException(Exception::TypeError(String::New("Invalid argument")));
		}
		double val = gsl_ran_gaussian_ratio_method(g->_gsl_rng, deviation);
		return scope.Close(Number::New(val));
	}
	static Handle<Value> Poisson(const Arguments& args)
	{
		HandleScope scope;
		Random* g = ObjectWrap::Unwrap<Random>(args.Holder());
		double mean;
		if(args.Length() == 1){
			mean = args[0]->NumberValue();
		}else{
			return ThrowException(Exception::TypeError(String::New("Invalid argument")));
		}
		double val = gsl_ran_poisson(g->_gsl_rng, mean);
		return scope.Close(Number::New(val));
	}
};

extern "C" {
	static void random_init(Handle<Object> target)
	{
		HandleScope scope;
		target->Set(String::New("rngGet"), FunctionTemplate::New(rngGet)->GetFunction());
		target->Set(String::New("rngMin"), FunctionTemplate::New(rngMin)->GetFunction());
		target->Set(String::New("rngMax"), FunctionTemplate::New(rngMax)->GetFunction());
		target->Set(String::New("rngUniform"), FunctionTemplate::New(rngUniform)->GetFunction());
		target->Set(String::New("ranPoisson"), FunctionTemplate::New(ranPoisson)->GetFunction());
		target->Set(String::New("ranGaussian"), FunctionTemplate::New(ranGaussian)->GetFunction());
		target->Set(String::New("ranGaussianZiggurat"), FunctionTemplate::New(ranGaussianZiggurat)->GetFunction());
		target->Set(String::New("ranGaussianRatioMethod"), FunctionTemplate::New(ranGaussianRatioMethod)->GetFunction());
		Random::Init(target);
	}
}

