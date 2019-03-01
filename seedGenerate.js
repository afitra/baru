const faker = require('faker'),
    randomBirthday = require('random-birthday')
const helper = require('./helpers/getname')
const fs = require('fs')
class seedGenerate {
    static generate(min, max, input) {
        return new Promise((resolve, reject) => {
            let result = []
            // let arr=[]
            const gender = ['men', 'women']
            for (let i = 0; i < input; i++) {
                let random = Math.floor(Math.random() * 2)
                let nama = `${faker.name.firstName({gender:gender[random]})} ${faker.name.lastName({gender:gender[random]})}`
                result[i] = {
                    name: nama,
                    username: helper(nama),
                    password: faker.internet.password(),
                    address: faker.address.streetName(),
                    job: faker.name.jobTitle(),
                    phone: faker.phone.phoneNumber(),
                    gender: gender[random],
                    sallary: (Math.floor(Math.random() * 9) + 1) * 1000000,
                    birthday: randomBirthday({
                        min,
                        max
                    }).toDateString(),
                    UrlImage: faker.image.avatar(),
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            }
            if (result.length === input) {
                console.log(result)
                // fs.writeFileSync(result, 'data.json')
                resolve(result)
            } else {
                throw new Error('data corrupted')
            }
        })
    }
}
seedGenerate.generate(1996, 2000, 10)

module.exports = seedGenerate