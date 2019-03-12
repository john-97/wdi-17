import React, { Component } from 'react'

// Cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends Component {
  constructor(){
    super();
    this.state={
      username: "",
      password: "",
      currentClass: "",
      currentClassIndex: 0,
      signup: {
        username: "", 
        password: ""
      },
      error: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCube = this.handleCube.bind(this)
    this.handleSignUpChange = this.handleSignUpChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.history.push('/LinkedUp/newsfeed/1/newsfeed')
    fetch('http://localhost:1111/login', {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username, 
          password: this.state.password
        }),
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if(res.success){
        cookies.set('hash', res.hash, {path: '/'});
        cookies.set('user_id', res.user_id, {path: '/'});
        this.props.history.push('/LinkedUp/newsfeed/1/newsfeed')
      }else{
        this.setState({
          ...this.state, 
          error: "Password and Username does not match",
          username: "",
          password: ""
        })
      }
    })
  }
  handleChange(e){
      this.setState({...this.state, [e.target.name]: e.target.value })
  }
  handleSignUp(e){
    e.preventDefault();
    if((window.confirm("yes?"))){
      

      // this.props.history.push('/LinkedUp/newsfeed/1/newsfeed')
    }
    this.setState({...this.state, signup:{
      username: "", 
      password: ""
    }})
  }
  handleSignUpChange(e){
    this.setState({...this.state, signup: {
      [e.target.name]: e.target.value
    }})
  }
  handleCube(){
    let num;
    if(this.state.currentClassIndex < 5){
      num = parseInt(this.state.currentClassIndex) + 1
    }else{
      num = 0
    }
    const classes = [
      "show-front", "show-right", "show-back", "show-left", "show-top", "show-bottom"
    ]
    let clas = classes[num]
    this.setState({...this.state, currentClass: clas, currentClassIndex: num})
  }
  render() {
    return (
      <div>
      <div className="Login">
        <div className="Logo">
        LinkedUp
        </div>
        <div>
          <form 
            className="loginForm" 
            onSubmit={this.handleSubmit}>
          <div className="loginFormItem">
            <label>Username</label>
            <input 
              type="text"
              autoComplete="off"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="loginFormItem">
            <label>Password</label>
            <input 
              type="text"
              autoComplete="off"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <input
            type="submit"
            className="loginFormButton"
            value="Login"
          />
          </form>
        </div>
      </div>
      <div className="LoginBody">
        <div className="rotateCube">
          {/* LOGO */}
          <div className="scene">
              <div className={`cube ${this.state.currentClass}`} onClick={this.handleCube}>
                <div className="cube__face cube__face--front">LinkedUp</div>
                <div className="cube__face cube__face--back">LinkedUp</div>
                <div className="cube__face cube__face--right">LinkedUp</div>
                <div className="cube__face cube__face--left">LinkedUp</div>
                <div className="cube__face cube__face--top">LinkedUp</div>
                <div className="cube__face cube__face--bottom">LinkedUp</div>
              </div>
            </div>
        </div>
        <div className="SignUpForm">
          <div style={{
            fontSize: "20px",
            fontWeight: 500
          }}>Sign Up Now!!!</div>
          <form onSubmit={this.handleSignUp}>
            <div>
            <label>username</label><br />
            <input 
              className="SignUpInput"
              autoComplete="off"
              type="text"
              placeholder="username"
              name="username"
              value={this.state.signup.username}
              onChange={this.handleSignUpChange}
            />
            </div>
            <div>
            <label>password</label><br />
            <input 
              className="SignUpInput"
              autoComplete="off"
              type="text"
              placeholder="password"
              name="password"
              value={this.state.signup.password}
              onChange={this.handleSignUpChange}
            />
            </div>
            <input 
              className="SignUpInput"
              type="submit"
              value="Sign Up"
            />
          </form>
          <div>{this.state.error}</div>
        </div>
      </div>
      </div>
    )
  }
}
export default Login
