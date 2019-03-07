import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideBar from './SideBar'
import Messages from './Messages'

class Chat extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div>
        Chat
        <div>
          <SideBar store={this.props.store} />
          <Messages 
            store={this.props.store} 
            chat_id={this.props.match.params.chat_id} 
            redux={this.props.redux}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    store: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    redux: (key, data) => {
      if(key === 1){
        dispatch({type: "ADD_MESSAGE", data: data})
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)