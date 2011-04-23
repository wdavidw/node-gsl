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

Handle<Value> statisticsSd(const Arguments& args){
    Local<Array> data_o = Local<Array>::Cast(args[0]);
    double datas [data_o->Length()];
    for(int i=0; i<data_o->Length(); i++){
    	datas[i] = data_o->Get(i)->NumberValue();
    }
    const size_t stride = args[1]->Uint32Value() ;
    const size_t n = args[2]->Uint32Value() ;
    double val = gsl_stats_sd (datas, stride, n);
    return Number::New(val);
}

extern "C" {
	static void gaussian_init(Handle<Object> target)
	{
		HandleScope scope;
		target->Set(String::New("statisticsSd"),FunctionTemplate::New(statisticsSd)->GetFunction());
	}
}

