const { User} = require('../models');

const userdata = [
    {
        username: "fethan1905",
        password: "1905f1905"
    },
    {
        username: "OFU1234",
        password: "1905OfU1905"
    },
    {
        username: "Admin1234",
        password: "turkishcookAdmin"
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true, returning:true});

module.exports = seedUsers;