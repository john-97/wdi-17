import React, { Component } from 'react'
import {
  Text, 
  View,
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import Header from './header'
import styles from './style'
import ChatList from './chatlist'

class Chat extends Component {
  constructor(){
    super();
    this.state = {
      error: ""
    }
    this.navigate = this.navigate.bind(this)
  }
  componentDidMount(){
    // console.log(this.props.store)
    AsyncStorage.getItem("hash")
    .then((res)=>{this.setState({...this.state, hash: JSON.parse(res)})})
    .then(()=>{
      fetch("http://127.0.0.1:1111/getChats", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            hash: `${this.state.hash.hash}`,
            id: `${this.state.hash.id}`
        })
      })
      .then((res)=>{return res.json()})
      .then((res) => {
        if(res.success){
          console.log(res)
          this.props.dispatch(1, res.chats)
        }else{
          this.setState({...this.state, password: '', error: 'Error: fetch request not successful'})
        }
      })
      .catch((res) => {console.log(res)})
    })
  }
  navigate(location, obj = {null: null}){
    this.props.navigation.navigate(location, obj)
  }
  render() {
    return (
      <View style={styles.body}>
        {/* header */}
        <View style={styles.header}>
          <Header navigate={this.navigate} />
        </View>

        {/* chats */}
        <View style={styles.chat}>
          <ChatList 
            store={this.props.store}
            navigate={this.navigate}
          />
          <Text>{this.state.error}</Text>
        </View>
        
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    store: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    dispatch: (key, data) => {
      if(key === 1){
        dispatch({type: "ADD_CHATS", data: data})
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
