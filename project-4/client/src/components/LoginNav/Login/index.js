import React, { Component } from 'react'
import { 
  Text, 
  View, 
  Button,
  TextInput,
  AsyncStorage,
  TouchableOpacity
} from 'react-native'
import styles from './styles';

export default class index extends Component {
  constructor(){
    super()
    this.state = {
      username: null,
      password: null,
      loginError: '',
      hash: null
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.navigate = this.navigate.bind(this)
    this.navigateChat = this.navigateChat.bind(this)
    this.placeholder = this.placeholder.bind(this)
  }
  componentDidMount(){
    AsyncStorage.getItem("hash")
    .then((res)=>{
      if(res !== null){
        this.setState({...this.state, hash: res})
        this.navigateChat()
      }
    })
  }
  navigateChat(){
    // this.navigate("ChatComponent")
  }
  handleLogin(){
    if(this.state.hash !== null){
      this.navigate("ChatComponent")
    }else{
      if(this.state.username !== null && this.state.password !== null){
        console.log(`LOGIN: ${this.state.username}, ${this.state.password}`)
        fetch("http://127.0.0.1:1111/login", {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: `${this.state.username}`,
              password: `${this.state.password}`
          })
        })
          .then((res) => res.json())
          .then((res) => {
            if(res.success){
                  AsyncStorage.setItem("hash", JSON.stringify(res))
                  .then(()=>{this.navigate("ChatComponent")})
                  .catch(()=>{this.setState({...this.state, loginError: 'password not saved'})})
            }else{
              this.setState({...this.state, password: '', loginError: 'The password and username did not match'})
            }
          })
          .catch((res) => {console.log(res)})
      }
    }
  }
  navigate(location, obj = {null: null}){
    this.props.navigation.navigate(location, obj);
  }
  placeholder(type){
    if(type === "username"){
      if(this.state.username === null || this.state.username === ""){
        return ""
      }else{
        return "Username"
      }
    }else if(type === "password"){
      if(this.state.password === null || this.state.password === ""){
        return ""
      }else{
        return "Password"
      }
    }
  }
  render(){
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerIcon}>Chattie</Text>
        </View>
        
        <View style={styles.form}>
          <Text style={styles.placeholder}>{this.placeholder("username")}</Text>
          <TextInput 
            style={styles.input}
            placeholder="username" 
            onChangeText={(text)=>{this.setState({...this.state, username: text})}} 
            value={this.state.username}
          />
          <Text style={styles.placeholder}>{this.placeholder("password")}</Text>
          <TextInput 
            style={styles.input}
            placeholder="password" 
            onChangeText={(text)=>{this.setState({...this.state, password: text})}} 
            secureTextEntry={true} 
            value={this.state.password} 
          />
          <TouchableOpacity onPress={this.handleLogin}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <Text>{this.state.loginError}</Text>
        </View>
      </View>
    )
  }
}
