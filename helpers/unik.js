const getname = (obj) => {
    let hasil = obj
    let result = []
    for (var i = 0; i < obj.Dislikes.length; i++) {
        let cek = false
        for (var j = 0; j < result.length; j++) {
            if (obj.Dislikes[i].DislikeId == result[j].DislikeId) {
                cek = true
            }
        }
        if (cek == false) {
            result.push(obj.Dislikes[i])
        }

    }
    // hasil.Dislikes = result
    return result
}

module.exports = getname