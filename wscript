import Options, glob
from os.path import join, dirname, abspath, exists
from shutil import copy, rmtree
from os import unlink, mkdir
import sys, os

def all(all):
  os.system('node-waf clean')
  os.system('node-waf configure')
  os.system('node-waf')

def clean(cln):
  if exists('build'): rmtree('build')

def set_options(opt):
  opt.tool_options("compiler_cxx")
  opt.tool_options("compiler_cc")

def configure(conf):
  conf.check_tool("compiler_cxx")
  conf.check_tool("compiler_cc")
  conf.check_tool("node_addon")
  conf.env.append_value("LIBPATH_GSL", abspath("build/Release/lib/"))
  conf.env.append_value("CPPPATH_GSL", abspath("build/Release/include/"))
  conf.env.append_value("STATICLIB_GSL",["gsl"])
  # Build gsl
  srcpath = abspath("deps/gsl-1.14")
  temppath = abspath("build/gsl-1.14")
  buildpath = abspath("build/Release")
  cmd = "cp -rp %s %s && cd \"%s\" && chmod u+x ./configure && ./configure --prefix=%s && make && make install"
  if os.system(cmd % (srcpath, temppath, temppath, buildpath)) != 0:
    conf.fatal("Configuring gsl failed.") 

def build(bld):
  obj = bld.new_task_gen('cxx', 'shlib', "node_addon")
  obj.target = 'gsl'
  obj.source = [
  	'src/gsl.cc',
  	#'src/gaussian.cc',
  	#'src/random.cc'
  ]
  obj.uselib = ['GSL']
  
