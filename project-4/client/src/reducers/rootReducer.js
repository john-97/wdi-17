import seed from './seed'
const rootReducer = (state = seed, action) => {
    if(action.type === "ADD_CHAT"){
      return{
        ...state,
        chats: [...state.chats, action.data]
      }
    }

    if(action.type === "ADD_CHATS"){
      return{
        chats: action.data
      }
    }

    if(action.type === 'NEW_MESSAGE'){
      console.log(action.data)
      const chat = state.chats.filter( ele => {
        return ele.name === action.data.name
      })
      chat[0].chatHistory.push(action.data)
    }
    return state;
};
  
export default rootReducer;

