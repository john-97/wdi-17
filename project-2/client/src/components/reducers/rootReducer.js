import seed from './seed'
const rootReducer = (state=seed, action) => {
    // console.log(action)
    if(action.type === "ADD_LIKE"){
        // get array index of liked post
        let postNum = state.newsfeed.findIndex(ele => ele.post_id === action.data.post_id);
        let newsfeed = state.newsfeed.filter(()=>{return true})
        newsfeed[parseInt(postNum)].likes = [...newsfeed[parseInt(postNum)].likes, parseInt(state.user.user_id)];
        // get array index of liked post in Profile
        let profilePostNum = state.profile[action.data.user_id].findIndex(ele => ele.post_id === action.data.post_id);
        let profile = state.profile[action.data.user_id].filter(()=>{return true})
        profile[parseInt(profilePostNum)].likes = [...profile[parseInt(profilePostNum)].likes, parseInt(state.user.user_id)];
        // console.log(newsfeed, profile)
        return{
            ...state,
            newsfeed: newsfeed,
            profile:{
                ...state.profile,
                [action.data.user_id]: profile
            }
        }
    }
    if(action.type === "REMOVE_LIKE"){
        // get array index of unliked post
        let postNum = state.newsfeed.findIndex(ele => ele.post_id === action.data.post_id);
        let newsfeed = state.newsfeed.filter(()=>{return true})
        let likeIndex = newsfeed[parseInt(postNum)].likes.findIndex(ele => {return ele === state.user.user_id})
        newsfeed[parseInt(postNum)].likes.splice(likeIndex, 1)
        // get array index of unliked post in Profile
        let profilePostNum = state.profile[action.data.user_id].findIndex(ele => ele.post_id === action.data.post_id);
        let profile = state.profile[action.data.user_id].filter(()=>{return true})
        let profileLikeIndex = profile[parseInt(profilePostNum)].likes.findIndex(ele => {return ele === state.user.user_id})
        profile[parseInt(profilePostNum)].likes.splice(profileLikeIndex, 1)
        return{
            ...state,
            newsfeed: newsfeed,
            profile:{
                ...state.profile,
                [action.data.user_id]: profile
            }
        }
    }
    if(action.type === "ADD_POST"){
        return{
            ...state,
            newsfeed: [
                action.data,
                ...state.newsfeed
            ],
            profile: {
                ...state.profile,
                [state.user.user_id]: [
                    action.data,
                    ...state.profile[state.user.user_id]
                ]
            }
        }
    }
    if(action.type === "ADD_MESSAGE"){
        // get list of chats without edited chat
        const chats = state.chats.filter( chat => {
            return chat.chat_id !== action.data.chat_id
        })
        // get chat for message array edit
        const chat = state.chats.filter( chat => {
            return chat.chat_id === action.data.chat_id
        })
        // pushing new message
        if(chat !== undefined || chat[0] !== undefined){
            chat[0].messages.push(action.data.message)
        }
        return{
            ...state,
            chats: [
                ...chats,
                chat[0]
            ]
        }
    }
    if(action.type === "EDIT_RESUME"){
        return{
            ...state,
            resume: action.data
        }
    }
    return state
}
export default rootReducer