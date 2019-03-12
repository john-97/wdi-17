module.exports = (db) => {
    //=============== sha256 ===========================
    const sha256 = require('js-sha256');
    const SALT = 'yellow elephants';
    // //===================================================
    // //                       AUTH
    // //===================================================
    const auth = (cookie) => {
        let hash = cookie.hash;
        let id = cookie.user_id
        let hashCheck = sha256(`${id}${SALT}`);
        if (hash === hashCheck){
            return true;
        } else { return false };
    }
    //===================================================
    //                      LOGIN
    //===================================================
    const login = (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        console.log(req.body)
        // MODEL LOGIN
        db.login.login(username , (error, user) => {
            if (error) {
                console.error('login error:', error);
                res.sendStatus(500);
            } else {
                // COMMANDS
                if(user.rows !== undefined){
                    if(user.rows[0] !== undefined){
                        let passwordFromServer = user.rows[0].password;
                        let user_id = user.rows[0].id;
                        if(passwordFromServer === password){
                            let cookieHash = sha256(`${user_id}${SALT}`);
                            res.cookie('hash', cookieHash);
                            res.cookie('user_id', user_id);
                            res.send({
                                success: true,
                                hash: cookieHash,
                                user_id: user_id
                            })
                        } else { res.send({success: false}) };
                    }else{
                        res.send({success: false})
                    }
                }else{
                    res.send({success: false})
                }
                
            }
        });
    }
    return {
        login,
        auth
    }
}