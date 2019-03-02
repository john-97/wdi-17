module.exports = (db, auth) => {
    // ===================================================
    //       getting chats -- for initial redux add
    // ===================================================
    const getChats = (req, res) => {
        console.log(req.body)
        if(auth(req.body.hash, req.body.id)){
            // GET CHATS
            db.chats.getChats(parseInt(req.body.id), (err, chats)=>{
                if(chats === undefined || err){
                    res.send({success: false})
                }else{
                    // get the chat ids (return an array of chat_ids)
                    let chats_ids = chats.rows.map(ele => {
                        return ele.chat_id
                    })
                    // ===================================================
                    // PUSH EVERYTHING INTO THIS FOR RES.SEND
                    // ===================================================
                    let messagesInChats = []
                    // GET MESSAGES IN CHATS
                    chats_ids.map(ele => {
                        db.chats.getMessages(ele, (err, messages)=>{
                            if(messages === undefined || err){
                                res.send({success: false})
                            }else{
                                // ADDING USERS TO CHATS
                                db.chats.getUsers(ele, (err, users)=>{
                                    if(users === undefined || err){
                                        res.send({success: false})
                                    }else{
                                        messagesInChats.push({
                                            name: messages.rows[1].name,
                                            users:  users.rows,
                                            chat_id: ele,
                                            chatHistory: messages.rows
                                        })
                                        // wait for pushes to be done to do the next step
                                        if(messagesInChats.length === chats_ids.length){
                                            console.log(messagesInChats, "SENT OBJ")
                                            res.send({chats: messagesInChats, success:true})
                                        }
                                    }
                                })
                            }
                        })
                    })
                }
            })
        }else{
            res.end({success: false})
        }
    }
    return{
        getChats
    }
}