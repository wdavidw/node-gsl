
should = require 'should'
gsl = require '..'

describe 'statistics', ->
    it 'Test mean', ->
        gsl.statistics.mean([10,30,20]).should.equal 20
    it 'Test variance', ->
        gsl.statistics.variance([10,30,20]).should.equal 100
        # With mean
        gsl.statistics.variance([10,30,20],30).should.equal 250
    it 'Test sd', ->
        gsl.statistics.sd([10,30,20]).should.equal 10
        Math.round(gsl.statistics.sd([10,30,20],30)).should.equal 16
    it 'Test tss', ->
        gsl.statistics.tss([10,30,20]).should.equal 200
        gsl.statistics.tss([10,30,20],30).should.equal 500
    it 'Test variance with fixed mean', ->
        Math.round(gsl.statistics.varianceWithFixedMean([10,30,20],20)).should.equal 67
    it 'Test sd with fixed mean', ->
        Math.round(gsl.statistics.sdWithFixedMean([10,30,20],20)).should.equal 8
