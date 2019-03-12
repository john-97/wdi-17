const pg = require('pg');

const login = require('./models/login');
const newsfeed = require('./models/newsfeed');
const resume = require('./models/resume');

configs = {
  user: 'jonchow',
  host: '127.0.0.1',
  database: 'linkedup',
  port: 5432
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = {
    //models===========//
    login: login(pool),
    newsfeed: newsfeed(pool),
    resume: resume(pool),
    //pool=============//
    pool: pool
};