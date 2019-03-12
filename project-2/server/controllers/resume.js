module.exports = (db, auth) => {
    //===================================================
    //                      NEWSFEED
    //===================================================
    const resume = (req, res) => {
        if(auth(req.body.auth)){
            db.resume.user(req.body.auth.user_id , (error, user) => {
                if (error) {
                    console.error('login error:', error);
                    res.sendStatus(500);
                } else {
                    db.resume.skills(req.body.auth.user_id , (error, skills) => {
                        if (error) {
                            console.error('login error:', error);
                            res.sendStatus(500);
                        } else {
                            db.resume.profEx(req.body.auth.user_id , (error, profEx) => {
                                if (error) {
                                    console.error('login error:', error);
                                    res.sendStatus(500);
                                } else {
                                    db.resume.edCred(req.body.auth.user_id , (error, edCred) => {
                                        if (error) {
                                            console.error('login error:', error);
                                            res.sendStatus(500);
                                        } else {
                                            db.resume.others(req.body.auth.user_id , (error, others) => {
                                                if (error) {
                                                    console.error('login error:', error);
                                                    res.sendStatus(500);
                                                } else {
                                                    let package = {
                                                        user: {
                                                            name: user.rows[0].name,
                                                            email: user.rows[0].email,
                                                            phoneNumber: user.rows[0].phonenumber,
                                                            website: user.rows[0].name
                                                        },
                                                        description:{
                                                            position: user.rows[0].position,
                                                            description: user.rows[0].description
                                                        },
                                                        skills: skills.rows,
                                                        professionalExperience: profEx.rows,
                                                        educationAndCredentials: edCred.rows,
                                                        others: others.rows
                                                    }
                                                    res.send(package)
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    }
    return{
        resume
    }
}