const getUnik = function (arr) {
    var obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i].DislikeId] == undefined) {
            obj[arr[i].DislikeId] = 1
        } else {
            obj[arr[i].DislikeId] += 1
        }
    }
    var val = []
    for (var values in obj) {
        val.push(obj[values])
    }
    var result = 0
    for (var key in obj) {
        if (obj[key] == Math.max(...val)) {
            result = key
        }
    }
    return result
}
module.exports = getUnik