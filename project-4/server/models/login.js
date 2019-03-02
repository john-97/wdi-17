module.exports = (pool) => {
    return {
        //return password hash
        login: (username, callback) => {
            // set up query
            const queryString = `SELECT password, id, username FROM users WHERE username=$1`;
            const values = [username];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, password) => {
                callback(err, password);
            });
        }
    }
};