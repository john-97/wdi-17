module.exports = (app, db) => {
    // imported models
    const login = require('./controllers/login')(db);
    const chats = require('./controllers/chats')(db, login.auth);

    // routes
    app.post('/login', login.login);
    app.post('/getChats', chats.getChats)
}