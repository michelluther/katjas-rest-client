const Hit = require('./../hit/hit')
const blast = require('blastjs');

function parseOptions(options) {
    if (!options) {
        return '';
    } else {
        var optionString = '';
        if (options.word_size) {
            optionString += '-word_size=' + parseInt(options.word_size)
        }
        return optionString
    }
}

/**
 * @class
 * @description A sequence is a sequence like 'TCATTAGAAGAAGTTTCTCGTAAAATTTTCAGTGCACATTTTGGTCAATTAGCAATTATCTTTTTATGGA'
 * which can be used to do a similarity search using the blastN search program
 * @param {string} sequenceString 
 * @param {object} options
 * @param {string} options.word_size
 */
function Sequence(sequenceString, options) {

    this.sequence = sequenceString;
    this.optionsString = parseOptions(options)
    /**
     * @description returns object representation of sequence search
     */
    this.getHits = (dbPath) => {

        return new Promise((resolve, reject) => {
            var query = this.sequence;
            var optionString = this.optionsString;
            blast.blastN(dbPath, query, optionString, function (err, output) {
                if (!err) {
                    var hits = output.BlastOutput.BlastOutput_iterations[0].Iteration[0].Iteration_hits[0].Hit;
                    if (hits) {
                        returnArray = hits.map(hit => {
                            return new Hit({
                                id: hit.Hit_accession[0],
                                len: hit.Hit_len[0],
                                def: hit.Hit_def[0],
                                hsp_align_length: hit.Hit_hsps[0].Hsp[0]['Hsp_align-len'][0],
                                hsp_midline: hit.Hit_hsps[0].Hsp[0].Hsp_midline[0],
                                hsp_gaps: hit.Hit_hsps[0].Hsp[0].Hsp_gaps[0],
                                hsp_identity: hit.Hit_hsps[0].Hsp[0].Hsp_identity[0],
                                hsp_evalue: hit.Hit_hsps[0].Hsp[0].Hsp_evalue[0],
                                hsp_score: hit.Hit_hsps[0].Hsp[0].Hsp_score[0],
                                hsp_bit_score: hit.Hit_hsps[0].Hsp[0]['Hsp_bit-score'][0]
                            })
                        })
                    } else {
                        returnArray = []
                    }
                    resolve(returnArray)
                } else {
                    console.log(err)
                }
            });
        })
    }

}


module.exports = Sequence