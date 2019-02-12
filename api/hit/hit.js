const Hit = function(hitData){
    this.data = {
        id: hitData.id,
        length: hitData.len,
        def: hitData.def,
        hsp_align_length: hitData.hsp_align_length,
        hsp_midline: hitData.hsp_midline,
        hsp_gaps: hitData.hsp_gaps,
        hsp_identity: hitData.hsp_identity,
        hsp_evalue: hitData.hsp_evalue,
        hsp_score: hitData.hsp_score,
        hsp_bit_score: hitData.hsp_bit_score

};
    this.getID = function() {
        return this.data.id
    }
    this.getLength = function() {
        return this.data.length
    }
    this.getDef = function() {
        return this.data.def
    }
    this.getMidline= function() {
        return this.data.hsp_midline
    }
}

module.exports = Hit