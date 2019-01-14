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
                            id: hit.Hit_id[0]
                        })
                    })
                    resolve(returnArray)
                    console.log(output);
                } else {
                    console.log(err)
                }
            });
        })
    }

    this.getHitScore = (hit) => {
        return hit.find('.//Hsp_bit-score')[0].text()
    }

    this.getHitDef = (hit) => {
        return hit.find('.//Hit_def')[0].text()
    }

    this.getHitId = (hit) => {
        return hit.find('.//Hit_id')[0].text()
    }

}


module.exports = Sequence