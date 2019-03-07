import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class SideBar extends Component {
    constructor(){
        super()
        this.generateFriendsList = this.generateFriendsList.bind(this)
    }
    generateFriendsList(){
        return this.props.store.chats.map(ele => {
            return(
                <li key={ele.chat_id}><NavLink to={`/LinkedUp/chat/${this.props.store.user.user_id}/${ele.chat_id}`}>{ele.chat_name}</NavLink></li>
            )
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Chats</h3>
                    <ul>
                        {this.generateFriendsList()}
                    </ul>
                </div>
            </div> 
        )
    }
}
export default SideBar
