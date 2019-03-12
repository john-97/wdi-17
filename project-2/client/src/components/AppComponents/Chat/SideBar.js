import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SideBar extends Component {
    constructor(){
        super()
        this.generateChats = this.generateChats.bind(this)
    }
    generateChats(){
        console.log(this.props.store.chats)
        return this.props.store.chats.map( chat => {
            return(
                <div key={chat.chat_id} className="SidebarItem">
                    <NavLink to={`/LinkedUp/chat/${this.props.store.user.user_id}/${chat.chat_id}`}>
                        {chat.chat_name}
                    </NavLink>
                </div>
            )
        })
    }
  render(){
    return (
      <div className="chatSidebar">
          {this.generateChats()}
      </div>
    )
  }
}
export default SideBar
