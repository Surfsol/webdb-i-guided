//simple to connect
//this file used to talk to database
//takes care of differences of dbms
// [API] <= js => [knex] <- SQL -> [DB Driver] <= DBMS Protocol => [DBMS]
const knex = require('knex');

const config = require('../knexfile.js');

module.exports = knex(config.development);