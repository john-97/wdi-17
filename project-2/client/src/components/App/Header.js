import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <p>LinkedUp</p>
        <nav>
            <ul>
                <li>
                    <NavLink 
                        activeClassName="active"
                        to={`/LinkedUp/newsfeed/${this.props.store.user.user_id}/newsfeed`}>
                        Newsfeed
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        activeClassName="active"
                        to={`/LinkedUp/newsfeed/${this.props.store.user.user_id}/${this.props.store.user.user_id}`}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        activeClassName="active"
                        to={`/LinkedUp/resume/${this.props.store.user.user_id}`}>
                        Resume
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        activeClassName="active"
                        to={`/LinkedUp/chat/${this.props.store.user.user_id}/default`}>
                        Chat
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        activeClassName="active"
                        to={`/LinkedUp/settings/${this.props.store.user.user_id}`}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
      </div>
    )
  }
}
export default Header
