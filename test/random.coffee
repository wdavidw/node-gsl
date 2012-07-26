
should = require 'should'
gsl = require '..'

describe 'random', ->
    it 'Test min - function', ->
        gsl.random.min().should.equal 0
    it 'Test max - function', ->
        gsl.random.max().should.equal Math.pow(2, 32) - 1
    it 'Test get - function', ->
        results = {}
        min = gsl.random.min()
        max = gsl.random.max()
        for i in [0...100]
            random = gsl.random.get()
            random.should.match /\d+/
            (random >= min and random < max).should.be.ok
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test get - function with seed', ->
        results1 = {}
        results2 = {}
        for i in [0...100]
            random = gsl.random.get 1978
            random.should.match /\d+/
            results1[ random ] = true
        for i in [0...100]
            random = gsl.random.get 1978
            random.should.match /\d+/
            results2[ random ] = true
        Object.keys(results1).length.should.equal 1
        results1.should.eql results2
    it 'Test get - object', ->
        results = {}
        obj = new gsl.Random()
        for i in [0...100]
            random = obj.get()
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test get - object with seed', ->
        results1 = {}
        results2 = {}
        obj1 = new gsl.Random 1978
        for i in [0...100]
            results1[ obj1.get() ] = true
        obj2 = new gsl.Random 1978
        for i in [0...100]
            results2[ obj2.get() ] = true
        Object.keys(results1).length.should.equal 100
        results1.should.eql results2
    it 'Test uniform - function', ->
        results = {}
        for i in [0...100]
            random = gsl.random.uniform()
            random.should.match /\d+/
            (random >= 0 and random < 1).should.be.ok
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test uniform - function with seed', ->
        results1 = {}
        results2 = {}
        for i in [0...100]
            results1[ gsl.random.uniform 1978 ] = true
        for i in [0...100]
            results2[ gsl.random.uniform 1978 ] = true
        Object.keys(results1).length.should.equal 1
        results1.should.eql results2
    it 'Test uniform - object', ->
        results = {}
        obj = new gsl.Random()
        for i in [0...100]
            random = obj.uniform()
            random.should.match /\d+/
            results[ random ] = true
        Object.keys(results).length.should.equal 100
    it 'Test uniform - object with seed', ->
        results1 = {}
        results2 = {}
        obj1 = new gsl.Random 1978
        for i in [0...100]
            results1[ obj1.uniform() ] = true
        obj2 = new gsl.Random 1978
        for i in [0...100]
            results2[ obj2.uniform() ] = true
        Object.keys(results1).length.should.equal 100
        results1.should.eql results2

