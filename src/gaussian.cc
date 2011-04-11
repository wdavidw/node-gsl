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

class Gaussian: public ObjectWrap
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
		s_ct->SetClassName(String::NewSymbol("Gaussian"));
		NODE_SET_PROTOTYPE_METHOD(s_ct, "next", Next);
		target->Set(String::NewSymbol("RanGaussian"), s_ct->GetFunction());
	}
	~Gaussian()
	{
		gsl_rng_free(this->_gsl_rng);
	}
	static Handle<Value> New(const Arguments& args)
	{
		HandleScope scope;
		Gaussian* g = new Gaussian();
		g->Wrap(args.This());
		g->_gsl_rng = gsl_rng_alloc (gsl_rng_default);
		if(args.Length() == 1){
			g->seed = args[0]->Uint32Value();
		    gsl_rng_set(g->_gsl_rng, g->seed);
		}
		return args.This();
	}

	static Handle<Value> Next(const Arguments& args)
	{
		HandleScope scope;
		Gaussian* g = ObjectWrap::Unwrap<Gaussian>(args.This());
	    double deviation;
		if(args.Length() == 0){
			 deviation = 3;
		}else{
			 deviation = args[0]->NumberValue();
		}
		double val = gsl_ran_gaussian(g->_gsl_rng, deviation);
		return scope.Close(Number::New(val));
	}

};

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

class GaussianZiggurat: public ObjectWrap
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
		s_ct->SetClassName(String::NewSymbol("GaussianZiggurat"));
		NODE_SET_PROTOTYPE_METHOD(s_ct, "next", Next);
		target->Set(String::NewSymbol("RanGaussianZiggurat"), s_ct->GetFunction());
	}
	~GaussianZiggurat()
	{
		gsl_rng_free(this->_gsl_rng);
	}
	static Handle<Value> New(const Arguments& args)
	{
		HandleScope scope;
		GaussianZiggurat* g = new GaussianZiggurat();
		g->Wrap(args.This());
		g->_gsl_rng = gsl_rng_alloc (gsl_rng_default);
		if(args.Length() == 1){
			g->seed = args[0]->Uint32Value();
		    gsl_rng_set(g->_gsl_rng, g->seed);
		}
		return args.This();
	}

	static Handle<Value> Next(const Arguments& args)
	{
		HandleScope scope;
		GaussianZiggurat* g = ObjectWrap::Unwrap<GaussianZiggurat>(args.This());
	    double deviation;
		if(args.Length() == 0){
			 deviation = 3;
		}else{
			 deviation = args[0]->NumberValue();
		}
		double val = gsl_ran_gaussian_ziggurat(g->_gsl_rng, deviation);
		return scope.Close(Number::New(val));
	}

};

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

class GaussianRatioMethod: public ObjectWrap
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
		s_ct->SetClassName(String::NewSymbol("GaussianRatioMethod"));
		NODE_SET_PROTOTYPE_METHOD(s_ct, "next", Next);
		target->Set(String::NewSymbol("RanGaussianRatioMethod"), s_ct->GetFunction());
	}
	~GaussianRatioMethod()
	{
		gsl_rng_free(this->_gsl_rng);
	}
	static Handle<Value> New(const Arguments& args)
	{
		HandleScope scope;
		GaussianRatioMethod* g = new GaussianRatioMethod();
		g->Wrap(args.This());
		g->_gsl_rng = gsl_rng_alloc (gsl_rng_default);
		if(args.Length() == 1){
			g->seed = args[0]->Uint32Value();
		    gsl_rng_set(g->_gsl_rng, g->seed);
		}
		return args.This();
	}

	static Handle<Value> Next(const Arguments& args)
	{
		HandleScope scope;
		GaussianRatioMethod* g = ObjectWrap::Unwrap<GaussianRatioMethod>(args.This());
	    double deviation;
		if(args.Length() == 0){
			 deviation = 3;
		}else{
			 deviation = args[0]->NumberValue();
		}
		double val = gsl_ran_gaussian_ratio_method(g->_gsl_rng, deviation);
		return scope.Close(Number::New(val));
	}

};

Persistent<FunctionTemplate> Gaussian::s_ct;
Persistent<FunctionTemplate> GaussianZiggurat::s_ct;
Persistent<FunctionTemplate> GaussianRatioMethod::s_ct;
extern "C" {
	static void gaussian_init(Handle<Object> target)
	{
		HandleScope scope;
		target->Set(String::New("ranGaussian"), FunctionTemplate::New(ranGaussian)->GetFunction());
	    Gaussian::Init(target);
		target->Set(String::New("ranGaussianZiggurat"), FunctionTemplate::New(ranGaussianZiggurat)->GetFunction());
		GaussianZiggurat::Init(target);
		target->Set(String::New("ranGaussianRatioMethod"), FunctionTemplate::New(ranGaussianRatioMethod)->GetFunction());
		GaussianRatioMethod::Init(target);
	}
}

