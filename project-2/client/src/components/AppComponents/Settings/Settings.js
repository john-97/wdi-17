import React, { Component } from 'react'

// Cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Settings extends Component {
  constructor(){
    super();
    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout(){
    cookies.remove('hash');
    cookies.remove('user_id');
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <div className="chatTitle">
        Settings
        </div>
        
        <div style={{
            padding: "10px"
          }}>
        <button 
          onClick={this.handleLogout}>
          logout
        </button>
        </div>
      </div>
    )
  }
}

export default Settings
