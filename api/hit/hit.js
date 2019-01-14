const Hit = function(hitData){
    this.data = {
    id: hitData.id
};
    this.getData = function() {
        return this.data
    }
}

module.exports = Hit