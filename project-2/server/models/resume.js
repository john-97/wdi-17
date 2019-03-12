module.exports = (pool) => {
    return {
        //return password hash
        user: (id, callback) => {
            // set up query
            const queryString = `SELECT 
                *
            FROM resume 
            WHERE user_id = $1`;
            const values = [id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        skills: (id, callback) => {
            // set up query
            const queryString = `SELECT 
                name,
                description
            FROM resumeSkills 
            WHERE user_id = $1`;
            const values = [id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        profEx: (id, callback) => {
            // set up query
            const queryString = `SELECT 
                name,
                position,
                description
            FROM resumeProfessionalExperience 
            WHERE user_id = $1`;
            const values = [id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        edCred: (id, callback) => {
            // set up query
            const queryString = `SELECT 
                name,
                description
            FROM resumeEducationAndCredentials
            WHERE user_id = $1`;
            const values = [id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        },
        others: (id, callback) => {
            // set up query
            const queryString = `SELECT 
                name
            FROM resumeOthers
            WHERE user_id = $1`;
            const values = [id];
            // ================= Execute Query ======================
            pool.query(queryString, values, (err, user) => {
                callback(err, user);
            });
        }
    }
};