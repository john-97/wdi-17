module.exports = (pool) => {
    return {
        //return password hash
        login: (username, callback) => {
            // set up query
            const queryString = `SELECT * FROM users WHERE name=$1`;
            const values = [username];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        }
    }
};