const fs = require('fs')
const libxml = require('libxmljs');
const Hit = require('./../hit/hit')
const blast = require('blastjs');


function Sequence(sequenceString) {

    this.sequence = sequenceString;

    /*
        this.xmlString = fs.readFileSync(__dirname + '/result.xml', {
            encoding: 'utf8'
        })

        this.xmlDoc = libxml.parseXmlString(this.xmlString)
    */
    /**
     * @description returns object representation of sequence search
     */
    this.getHits = (dbPath) => {
        /*      const hits = this.xmlDoc.find('//Hit')
              _this = this
              return hits.map(hit => {
                  return {
                      hitId: _this.getHitId(hit),
                      hitDef: _this.getHitDef(hit),
                      hitScore: _this.getHitScore(hit)
                  }
              });*/
        return new Promise((resolve, reject) => {
            var query = this.sequence;
            blast.blastN(dbPath, query, function (err, output) {
                if (!err) {
                    returnArray = output.BlastOutput.BlastOutput_iterations[0].Iteration[0].Iteration_hits[0].Hit.map(hit => {
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
                    resolve(returnArray)

                    console.log('test ...')
                    console.log(returnArray);
                } else {
                    console.log(err)
                }
            });
        })
    }

    this.getHitScore = (hit) => {
        return hit.find(def.text())
    }

    this.getHitDef = (hit) => {
        return hit.find('.//Hit_def')[0].text()
    }

    this.getHitId = (hit) => {
        return hit.find('.//Hit_id')[0].text()
    }

}


module.exports = Sequence