module.exports = (app, db) => {
    const login = require('./controllers/login')(db);
    const newsfeed = require('./controllers/newsfeed')(db, login.auth);
    const resume = require('./controllers/resume')(db, login.auth);

    app.post('/login', login.login);
    app.post('/newsfeed', newsfeed.newsfeed);
    app.post('/newsfeed/new', newsfeed.newsfeedNew);
    app.post('/newsfeed/likes/edit', newsfeed.editLikes);
    app.post('/resume', resume.resume);
}