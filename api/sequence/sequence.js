const fs = require('fs')
const libxml = require('libxmljs');

function Sequence(id) {

    this.xmlString = fs.readFileSync(__dirname + '/result.xml', {
        encoding: 'utf8'
    })

    this.xmlDoc = libxml.parseXmlString(this.xmlString)

    /**
     * @description returns object representation of sequence search
     */
    this.getHits = () => {
        const hits = this.xmlDoc.find('//Hit')
        _this = this
        return hits.map(hit => {
            return {
                hitId: _this.getHitId(),
                hitDef: _this.getHitDef(hit),
                hitScore: _this.getHitScore(hit)
            }
        });
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