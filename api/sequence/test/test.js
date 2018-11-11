const expect = require('chai').expect
const fs = require('fs')
const Sequence = require('./../sequence')

describe('parsing the result.xml', () => {
    it('finding the results', () => {
        const sequence = new Sequence('sdfsdf')
        const hits = sequence.getHits()
        // console.log(hits)
        expect(hits.length).to.equal(63)
        expect(hits[3].hitScore).to.equal('113.766')
        expect(hits[3].hitDef).to.equal('Cyclotella meneghiniana strain G18W41 clone 7 18S ribosomal RNA gene, partial sequence; internal transcribed spacer 1, 5.8S ribosomal RNA gene, and internal transcribed spacer 2, complete sequence; and 28S ribosomal RNA gene, partial sequence')
    })
})