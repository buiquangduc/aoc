import _ from "lodash";

String.prototype.is = function (data) {
    if(Array.isArray(data)) {
        return data.indexOf(this) !== -1
    } else {
        return this === data
    }
}

String.prototype.splitRangeToArray = function() {
    const range = this.split('-')
    const start = parseInt(range[0])
    const end = parseInt(range[1])

    let array = []
    for (let i = start; i <= end; i++) array.push(i)

    return array
}

Array.prototype.getOverlapArray = function(otherArray) {
    return this.filter(value => otherArray.includes(value))
}

Array.prototype.isOverlap = function(otherArray) {
    return this.getOverlapArray(otherArray).length > 0
}

Array.prototype.isContains = function(otherArray) {
    return _.difference(this, otherArray).length === 0
}