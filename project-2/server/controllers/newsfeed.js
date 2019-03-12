module.exports = (db, auth) => {
    //===================================================
    //                      NEWSFEED
    //===================================================
    const newsfeed = (req, res) => {
        if(auth(req.body.auth)){
            // find array of users
            db.newsfeed.user(req.body.auth.user_id , (error, user) => {
                if (error) {
                    console.error('login error:', error);
                    res.sendStatus(500);
                } else {
                    // find array of friends
                    db.newsfeed.friends(req.body.auth.user_id , (error, friends) => {
                        if (error) {
                            console.error('login error:', error);
                            res.sendStatus(500);
                        } else {
                            // iterate through friends for newsfeed
                            let friendProfiles = {};
                            friends.rows.forEach((friend, num) => {
                                db.newsfeed.newsfeed(friend.user_id , (error, profiles) => {
                                    if (error) {
                                        console.error('login error:', error);
                                        res.sendStatus(500);
                                    } else {
                                        friendProfiles[friend.user_id] = profiles.rows;
                                        // at the last iteration of friends get user's newsfeed
                                        if(num === (friends.rows.length - 1)){
                                            db.newsfeed.newsfeed(req.body.auth.user_id , (error, userProfile) => {
                                                if (error) {
                                                    console.error('login error:', error);
                                                    res.sendStatus(500);
                                                } else {
                                                    friendProfiles[req.body.auth.user_id] = userProfile.rows
                                                    // iterate through posts for post likes
                                                    Object.keys(friendProfiles).forEach((key, num1) => {
                                                        friendProfiles[key].forEach((userPost, num2) => {
                                                            db.newsfeed.likes(userPost.post_id, (error, likes) => {
                                                                if (error) {
                                                                    console.error('login error:', error);
                                                                    res.sendStatus(500);
                                                                } else {
                                                                    let like = likes.rows.map(like => {
                                                                        return like.user_id
                                                                    })
                                                                    userPost["likes"] = like;
                                                                    // at the last iteration create package(user, newsfeed, profiles)
                                                                    if(num1 === (Object.keys(friendProfiles).length - 1) && num2 === (friendProfiles[key].length - 1)){
                                                                        let package = {
                                                                            user:{
                                                                                ...user.rows[0],
                                                                                friends: friends.rows
                                                                            },
                                                                            newsfeed: [],
                                                                             profile: friendProfiles
                                                                        }
                                                                        Object.keys(friendProfiles).forEach(key => {
                                                                            package.newsfeed = [...package.newsfeed, ...friendProfiles[key]]
                                                                        })
                                                                        console.log(package)
                                                                        res.send(package)
                                                                    }
                                                                }
                                                            })
                                                        })
                                                    })
                                                }
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    })
                }
            })
        }
    };
    const newsfeedNew = (req, res) => {
        if(auth(req.body.auth)){
            db.newsfeed.addPost(req.body.newPost , (error, returningPost) => {
                if (error) {
                    console.error('login error:', error);
                    res.sendStatus(500);
                } else {
                    console.log(returningPost)
                }
            })
        }
    }
    const editLikes = (req, res) => {
        if(auth(req.body.auth)){
            db.newsfeed.likes(req.body.post_id, (error, likes) => {
                if (error) {
                    console.error('login error:', error);
                    res.sendStatus(500);
                } else {
                    let like = likes.rows.map(ele => {
                        return ele.user_id
                    })
                    console.log(like)
                    if(like.includes(parseInt(req.body.auth.user_id))){
                        db.newsfeed.addLike({user_id:req.body.auth.user_id, post_id:req.body.post_id}, (error, likes) => {
                            if (error) {
                                console.error('login error:', error);
                                res.sendStatus(500);
                            } else {
                                console.log(likes)
                            }
                        })
                    }else{

                    }
                }
            })
        }
    }
    return {
        newsfeed,
        newsfeedNew,
        editLikes
    }
}