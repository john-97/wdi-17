import React, { Component } from 'react'
import { 
  Text, 
  View,
  TouchableOpacity
} from 'react-native'
import styles from './style'

class ChatList extends Component {
  constructor(){
    super()
    this.state = {
      chats: null
    }
    this.generateChats = this.generateChats.bind(this)
  }
  generateChats(){
    if(this.props.store.chats === undefined){
      return(
        <View><Text>LOADING...</Text></View>
      )
    }else {
      return(
        this.props.store.chats.map( ele => {
          return(
            <TouchableOpacity
              key={ele.name}
              onPress={()=>{this.props.navigate("Message", { message: ele.name })}}
            >
              <View 
                style={styles.chats}
              >
                <Text style={{margin: 15, fontSize:15}}>{ele.name}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      )
    }
  }
  render() {
    return (
      <View style={styles.chatlist}>
        
        {this.generateChats()}
        
      </View>
    )
  }
}
export default ChatList
