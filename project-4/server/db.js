const pg = require('pg');

const login = require('./models/login');
const chats = require('./models/chats');

configs = {
  user: 'jonchow',
  host: '127.0.0.1',
  database: 'chattie',
  port: 5432
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = {
    //models===========//
    login: login(pool),
    chats: chats(pool),
    //pool=============//
    pool: pool
};