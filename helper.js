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

export const aZtoObjectValue = (increment) => {
    let object = {}
    let aZ = 'a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z'
    let aZArray = aZ.split('-')

    aZArray.forEach((character, index) => {
        object[character] = (index + 1) * increment
    })

    return object
}

Array.prototype.getFirstUniqueIndex = function(lengthToCut) {
    for(let i = lengthToCut; i <= this.length; i++) {
        if(_.uniq(this.slice(i - lengthToCut, i)).length === lengthToCut) return i
    }

    return null
}