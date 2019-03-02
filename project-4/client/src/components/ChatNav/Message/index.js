import React, { Component } from 'react'
import { 
  Text, 
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  AsyncStorage
} from 'react-native'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import styles from './style'
import Header from './header'

class Messages extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: "",
      socket: io.connect(`http://127.0.0.1:1111`),
      room: props.navigation.getParam("message", null)
    }
    this.generateMessages = this.generateMessages.bind(this)
    this.navigate = this.navigate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    AsyncStorage.getItem("hash")
    .then((res)=>{this.setState({...this.state, hash: JSON.parse(res)})})
    this.state.socket.on(`${this.state.room}`, (data => {
      console.log(data)
      this.props.dispatch(1, data)
    }))
    console.log(this.props.store)
  }
  generateMessages(){
    console.log(this.props.navigation.getParam("message", null))
    let chats = this.props.store.chats.filter(ele => {
      return ele.name === this.state.room
    })
    return(
      chats[0].chatHistory.map( ele => {
        let user = chats[0].users.filter( user => {
          return parseInt(user.user_id) === parseInt(ele.user_id)
        })
        return(
          <View key={ele.timestamp} style={styles.balloon}>
            <Text
              style={styles.message}
            >{user[0].username}: {ele.message}</Text>
          </View>
        )
      })
    )
  }
  navigate(location, obj = {null: null}){
    this.props.navigation.navigate(location, obj)
  }
  handleSubmit(){
    if(this.state.message !== ""){
      const chat_id = this.props.store.chats.filter( ele => {
        return ele.name = this.state.room
      })
      const msgObj = {
        name: this.state.room,
        chat_id: chat_id[0].chat_id,
        user_id: this.state.hash.id,
        message: this.state.message,
        timestamp: new Date()
      }
      this.state.socket.emit('roomMessage', msgObj )
      this.props.dispatch(1, msgObj)
      this.setState({...this.state, message: ""})
    }
  }
  render() {
    if(this.props.store !== undefined){
      return (
        <View style={styles.body}>
          {/* HEADER */}
          <View style={styles.header}>
            <Header 
              name={this.state.room} 
              navigate={this.navigate}
            />
          </View>
          {/* BODY */}
          <View style={styles.messageBody}>
            <ScrollView>
              {this.generateMessages()}
            </ScrollView>
            {/* MESSAGE INPUT */}
            <View style={styles.messageInput}>
              <TextInput 
                placeholder="message"
                onChangeText={(text)=>{this.setState({...this.state, message: text})}}
                value={this.state.message}
              />
              <TouchableOpacity
                onPress={this.handleSubmit}
              >
              <Image 
                source={require('../../../assets/play-button.png')}
                style={{height: 30, width: 30, margin: 10}}
              />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }else{
      return(
        <View>
          <Text>LOADING...</Text>
        </View>
      )
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    dispatch: (key, data) => {
      if(key === 1){
        dispatch({type: 'NEW_MESSAGE', data: data})
      }
    }
  }
}
const mapStateToProps = (state) => {
  return{
    store: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Messages)
