module.exports = (pool) => {
    return {
        // initial user
        user: (id, callback) => {
            // set up query
            const queryString = `SELECT 
                id AS user_id, 
                name, 
                profile_pic, 
                online_status 
            FROM users WHERE id=$1`;
            const values = [id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        friends: (id, callback) => {
            // set up query
            const queryString = `SELECT
                    users.id AS user_id, 
                    users.name, 
                    users.profile_pic, 
                    users.online_status
                FROM usersRT
                INNER JOIN users
                ON (usersRT.user_id = users.id OR usersRT.friend_id = users.id)
                WHERE (usersRT.user_id=$1 OR usersRT.friend_id=$2) AND users.id!=$3`;
            const values = [id, id, id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        newsfeed: (id, callback) => {
            // set up query
            const queryString = `SELECT 
                id AS post_id,
                user_id,
                content,
                timestamp
            FROM newsfeed WHERE user_id=$1`;
            const values = [id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        likes: (id, callback) => {
            // set up query
            const queryString = `SELECT 
                user_id
            FROM newsfeedLikes WHERE post_id=$1`;
            const values = [id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        addPost: (info, callback) => {
            // set up query
            const queryString = `INSERT INTO newsfeed 
            (user_id, content, timestamp) 
            VALUES ($1, $2, $3);`;
            const values = [info.user_id, info.content, info.timestamp];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        addLike: (info, callback) => {
            // set up query
            const queryString = `INSERT INTO newsfeedLikes 
            (post_id, user_id) 
            VALUES ($1, $2);`;
            const values = [info.post_id, info.user_id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        removeLike: (info, callback) => {
            // set up query
            const queryString = `INSERT INTO newsfeed 
            (user_id, content, timestamp) 
            VALUES ($1, $2, $3);`;
            const values = [info.user_id, info.content, info.timestamp];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },

    }
};