module.exports = (db) => {
    //=============== sha256 ===========================
    const sha256 = require('js-sha256');
    const SALT = 'yellow elephants';
    //===================================================
    //                       AUTH
    //===================================================
    const auth = (hash, id) => {
        let hashCheck = sha256(`${id}${SALT}`);
        if (hash === hashCheck){
            return true;
        } else { return false };
    }
    //===================================================
    //                      LOGIN
    //===================================================
    const login = (req, res) => {
        console.log(req.body)
        // MODEL LOGIN
        db.login.login(req.body.username, (err, password)=>{
            if(err){
                console.log(err)
                res.send({success: false})
            }else{
                if(password.rows[0] === undefined){
                    res.send({success: false})
                }else{
                    console.log(password.rows[0])
                    // if password is correct
                    let id = password.rows[0].id
                    if(password.rows[0].password === req.body.password){
                        res.send({success: true, hash: sha256(`${id}${SALT}`), id: id, username:req.body.username})
                    }else{ // if password is wrong
                        res.send({success: false})
                }
                }
            }
        })
    }
    // const login = (req, res) => {
    //     let email = req.body.email;
    //     let password = req.body.password;
    //     // MODEL LOGIN
    //     db.login.login(email , (error, passwordHash) => {
    //         if (error) {
    //             console.error('login error:', error);
    //             res.sendStatus(500);
    //         } else {
    //             // COMMANDS
    //             let userHash = passwordHash.rows[0].password;
    //             let user_id = passwordHash.rows[0].id;
    //             let formHash = sha256(password);
    //             let cookieHash = sha256(`${user_id}${SALT}`);
    //             if (userHash === formHash){
    //                 res.cookie('hash', cookieHash, { maxAge: 86400000, path: `/user/${user_id}`, domain: 'localhost:3000' });
    //                 res.cookie('user_id', user_id, { maxAge: 86400000, path: `/user/${user_id}`, domain: 'localhost:3000' });
    //                 res.redirect(200, `user/${user_id}`);
    //             } else { res.send( 'error' ) };
    //         }
    //     });
    // }
    return {
        login,
        auth
    }
}