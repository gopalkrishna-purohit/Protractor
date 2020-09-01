const faker = require('faker')

var random_Data = function () {

    this.randomdata = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        website: faker.internet.url(),
        address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
        bio: faker.lorem.sentences(),
        image: faker.image.avatar()
        //facilityName: faker.name.facilityName()
    };

};
module.exports = new random_Data();
