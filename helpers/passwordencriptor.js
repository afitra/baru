const bcrypt = require('bcrypt');
const decriptor = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

module.exports = decriptor