import React, { Component } from 'react'
import { 
  Text, 
  View,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import Header from './header'

// contacts
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

class New extends Component {
  constructor(){
    super()
    this.state = {
      contacts: null,
      selected: [],
      newChat:{
        name: '',
        users: [],
        lastMessage: null,
        chatHistory: []
      }
    }
    this.generateContacts = this.generateContacts.bind(this)
    this.navigate = this.navigate.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.'
      }
    ).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied'){
          // error
        } else {
          this.setState({...this.state, contacts: contacts})
        }
      })
    })
  }
  handleSelect(ele, name){
    if(ele.phoneNumbers[0] === undefined){
      Alert.alert('Error: no phone number found', `${name} has no phone number`)
    }else{
      if(this.state.newChat.users.length === 0){
        this.setState({...this.state, newChat: {...this.state.newChat, users:[...this.state.newChat.users, {id: this.props.store.user.id, name:this.props.store.user.name}, {id: ele.phoneNumbers[0].number, name: name}]}})
      }else{
        this.setState({...this.state, newChat: {...this.state.newChat, users:[...this.state.newChat.users, {id: ele.phoneNumbers[0].number, name: name}]}})
      }
    }
  }
  handleSubmit(){
    this.props.dispatch(1, this.state.newChat)
    this.navigate("ChatComponent")
  }
  generateContacts(){
    return this.state.contacts.map( ele =>{
      let regex = /null/gi;
      let name = `${ele.givenName} ${ele.familyName} ${ele.middleName}`
      let selected = false
      for(let i=0; i < this.state.newChat.users.length; i++){
        if(ele.phoneNumbers[0] !== undefined){
          if(this.state.newChat.users[i].id === ele.phoneNumbers[0].number){
            selected = true
          }
        }
      }
      let style;
      if(selected){
        style = styles.contactList
      }else{
        style = styles.contactListSelected
      }
      return(
        <TouchableOpacity
          onPress={()=>{this.handleSelect(ele, name)}}
          key={ele.recordID}
        >
          <View style={style} selected={selected}>
              <Text style={styles.contactListText}>{name.replace(regex, '')}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }
  navigate(location, obj = {null: null}){
    this.props.navigation.navigate(location, obj)
  }
  render() {
    console.log(this.state.selected)
    if(this.state.contacts === null){
      return(
        <View style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
          <Text>LOADING...</Text>
        </View>
      )
    }else{
      return (
        <View style={styles.body}>
          <View style={styles.header}>
            <Header navigate={this.navigate} handleSubmit={this.handleSubmit} />
          </View>
          <ScrollView style={styles.contacts}>
            { this.generateContacts() }
          </ScrollView>
        </View>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return{
    store: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    dispatch: (key, data) => {
      if(key === 1){
        dispatch({type: "ADD_CHAT", data: data})
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(New)
