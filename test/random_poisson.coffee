
should = require 'should'
gsl = require '..'

describe 'random poinsson', ->
    it 'Test poisson - arguments', ->
        try
            gsl.random.poisson()
            false.should.be.ok
        catch e
            e.message.should.equal 'Invalid argument'
        try
            (new gsl.Random()).poisson()
            false.should.be.ok
        catch e
            e.message.should.equal 'Invalid argument'
    it 'Test poisson - function', ->
        results = {}
        for i in [0...100]
            mean = 2
            random = gsl.random.poisson 10000000
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test poisson - function with seed', ->
        results1 = {}
        results2 = {}
        for i in [0...100]
            results1[ gsl.random.poisson(1978, 10000000) ] = true
        for i in [0...100]
            results2[ gsl.random.poisson(1978, 10000000) ] = true
        Object.keys(results1).length.should.equal 1
        results1.should.eql results2
    it 'Test poisson - object', ->
        results = {}
        obj = new gsl.Random()
        for i in [0...100]
            random = obj.poisson 10000000
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test poisson - object with seed', ->
        results1 = {}
        results2 = {}
        obj1 = new gsl.Random 1978
        for i in [0...100]
            results1[ obj1.poisson(10000000) ] = true
        obj2 = new gsl.Random 1978
        for i in [0...100]
            results2[ obj2.poisson(10000000) ] = true
        Object.keys(results1).length.should.equal 100
        results1.should.eql results2
