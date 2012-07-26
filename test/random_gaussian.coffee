
should = require 'should'
gsl = require '..'

describe 'random gaussian', ->
    it 'Test gaussian - arguments', ->
        try
            gsl.random.gaussian()
            false.should.be.ok
        catch e
            e.message.should.equal 'Invalid argument'
        try
            (new gsl.Random()).gaussian()
            false.should.be.ok
        catch e
            e.message.should.equal 'Invalid argument'
    it 'Test gaussian - function', ->
        results = {}
        for i in [0...100]
            random = gsl.random.gaussian(1)
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test gaussian - function with seed', ->
        results1 = {}
        results2 = {}
        for i in [0...100]
            results1[ gsl.random.gaussian(1978,1) ] = true
        for i in [0...100]
            results2[ gsl.random.gaussian(1978,1) ] = true
        Object.keys(results1).length.should.equal 1
        results1.should.eql results2
    it 'Test gaussian - object', ->
        results = {}
        obj = new gsl.Random()
        for i in [0...100]
            random = obj.gaussian 1
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test gaussian - object with seed', ->
        results1 = {}
        results2 = {}
        obj1 = new gsl.Random 1978, 1
        for i in [0...100]
            results1[ obj1.gaussian(1) ] = true
        obj2 = new gsl.Random 1978, 1
        for i in [0...100]
            results2[ obj2.gaussian(1) ] = true
        Object.keys(results1).length.should.equal 100
        results1.should.eql results2
    it 'Test gaussian ziggurat - function', ->
        results = {}
        for i in [0...100]
            random = gsl.random.gaussianZiggurat 1
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test gaussian ziggurat - function with seed', ->
        results1 = {}
        results2 = {}
        for i in [0...100]
            results1[ gsl.random.gaussianZiggurat(1978,1) ] = true
        for i in [0...100]
            results2[ gsl.random.gaussianZiggurat(1978,1) ] = true
        Object.keys(results1).length.should.equal 1
        results1.should.eql results2
    it 'Test gaussian ziggurat - object', ->
        results = {}
        obj = new gsl.Random()
        for i in [0...100]
            random = obj.gaussianZiggurat 1
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test gaussian ziggurat - object with seed', ->
        results1 = {}
        results2 = {}
        obj1 = new gsl.Random 1978
        for i in [0...100]
            results1[ obj1.gaussianZiggurat(1) ] = true
        obj2 = new gsl.Random 1978
        for i in [0...100]
            results2[ obj2.gaussianZiggurat(1) ] = true
        Object.keys(results1).length.should.equal 100
        results1.should.eql results2
    it 'Test gaussian ratio method - function', ->
        results = {}
        for i in [0...100]
            random = gsl.random.gaussianRatioMethod(1)
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test gaussian ratio method - function with seed', ->
        results1 = {}
        results2 = {}
        for i in [0...100]
            results1[ gsl.random.gaussianRatioMethod(1978,1) ] = true
        for i in [0...100]
            results2[ gsl.random.gaussianRatioMethod(1978,1) ] = true
        Object.keys(results1).length.should.equal 1
        results1.should.eql results2
    it 'Test gaussian ratio method - object', ->
        results = {}
        obj = new gsl.Random()
        for i in [0...100]
            random = obj.gaussianRatioMethod(1)
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test gaussian ratio method - object with seed', ->
        results1 = {}
        results2 = {}
        obj1 = new gsl.Random 1978
        for i in [0...100]
            results1[ obj1.gaussianRatioMethod(1) ] = true
        obj2 = new gsl.Random 1978
        for i in [0...100]
            results2[ obj2.gaussianRatioMethod(1) ] = true
        Object.keys(results1).length.should.equal 100
        results1.should.eql results2

