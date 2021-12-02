const { User} = require('../models');

const userdata = [
    {
        username: 'fethan1905',
        password: '1905f1905'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true, returning:true});

module.exports = seedUsers;