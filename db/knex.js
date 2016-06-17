var env = process.env.DATABASE_URL || 'postgres://localhost/kblog';
var config = require('../knexfile')[env];
module.exports = require('knex') (config);
