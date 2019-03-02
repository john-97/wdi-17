module.exports = (pool) => {
    return {
        // return chats 
        getChats: (user_id, callback) => {
            // set up query
            const queryString = `SELECT chatsRT.chat_id, chatsRT.user_id, chats.name AS chat_name FROM chatsRT INNER JOIN chats ON(chats.id = chatsRT.chat_id) WHERE chatsRT.user_id=$1`;
            const values = [user_id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, chats) => {
                callback(err, chats);
            });
        },
        getMessages: (chat_id, callback) => {
            // set up query
            const queryString = `SELECT messages.chat_id, messages.message, messages.timestamp, messages.user_id, chats.name FROM messages INNER JOIN chats ON(chats.id = messages.chat_id) WHERE messages.chat_id=$1`;
            const values = [chat_id]
            pool.query(queryString, values, (err, messages) => {
                callback(err, messages);
            });
        },
        getUsers: (chat_id, callback) => {
            // set up query
            const queryString = `SELECT users.username, chatsRT.user_id, chatsRT.chat_id, users.online_status  FROM users INNER JOIN chatsRT ON(chatsRT.user_id = users.id) WHERE chatsRT.chat_id=$1`;
            const values = [chat_id]
            pool.query(queryString, values, (err, users) => {
                callback(err, users);
            });
        },
        addMessage: (message, callback) => {
            // set up query
            const queryString = `INSERT INTO messages (message, timestamp, user_id, chat_id) VALUES ($1, $2, $3, $4) RETURNING *`;
            const values = [message.message, message.timestamp, message.user_id, message.chat_id]
            pool.query(queryString, values, (err, message) => {
                callback(err, message);
            });
        },
    }
};