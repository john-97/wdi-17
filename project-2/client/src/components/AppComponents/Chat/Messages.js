import React, { Component } from 'react'

class Messages extends Component {
  constructor(){
    super();
    this.state={
      message: ""
    }
    this.generateMessages = this.generateMessages.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  generateMessages(){
    const messages = this.props.store.chats.filter( chat => {
      return chat.chat_id === parseInt(this.props.chat_id)
    })
    // if chat not selected
    if(messages === undefined || messages[0] === undefined){
      return(
        <div>
          Chat Here
        </div>
      )
    }else{ // render chat messages
      return messages[0].messages.map( message => {
        // finding message's sender
        let user;
        // if sender is not user, but a friend
        if(message.user_id !== this.props.store.user.user_id){
          user = this.props.store.user.friends.filter( friend => {
            return friend.user_id === message.user_id
          })
          user = user[0]
        }else{ // if sender is user
          user = this.props.store.user
        }
        return( // render message
          <div key={message.message_id}>
            {user.name}: {message.message}
          </div>
        )
      })
    }
  }
  handleChange(e){
    switch (e.target.name) {
      case "message":
        this.setState({...this.state, message: e.target.value})
        break;
      default:
        break;
    }
  }
  handleSubmit(e){
    e.preventDefault()
    switch (e.target.name) {
      case "message":
      // if message is selected
        if(this.props.chat_id !== "default"){
          // redux
          this.props.redux(1, {
            message:{
              message: this.state.message, 
              message_id: Math.random(),
              user_id: this.props.store.user.user_id,
              timestamp: new Date()
            },
            chat_id: parseInt(this.props.chat_id)
          })
        }
        this.setState({...this.state, message: ""})
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="chatMessages">
        <div className="chatMessagesMessages">
          {this.generateMessages()}
        </div>
        <div className="inputChat">
          <form onSubmit={this.handleSubmit} name="message">
            <input 
              className="inputChatInput"
              type="text" 
              placeholder="Tell your Partner whats on your mind"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <input
              type="submit"
              value="send"
            />
          </form>
        </div>
      </div>
    )
  }
}
export default Messages