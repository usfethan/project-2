const { User} = require('../models');

const userdata = [
    {
        username: 'fethan1905',
        password: '1905f1905'
    }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;