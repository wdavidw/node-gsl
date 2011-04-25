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
#include "./statistics.cc"
#include "./random.cc"

using namespace node;
using namespace v8;

Persistent<FunctionTemplate> Random::s_ct;
extern "C" {
	static void init (Handle<Object> target)
	{
		gsl_rng_env_setup ();
		r_global = gsl_rng_alloc (gsl_rng_default);
		random_init(target);
		statistics_init(target);
	}
	NODE_MODULE(gsl, init);
}

