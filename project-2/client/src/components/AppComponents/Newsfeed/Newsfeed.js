import React, { Component } from 'react'
import { connect } from 'react-redux'


// Cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Newsfeed extends Component {
  constructor(){
    super()
    this.state={
      post: ""
    }
    this.generateNewsfeed = this.generateNewsfeed.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // componentDidMount(){
  //   let auth = {
  //     user_id: cookies.get('user_id'),
  //     hash: cookies.get('hash')
  //   }
  //   fetch('http://localhost:1111/newsfeed', {
  //     method: "POST",
  //     credentials: "same-origin",
  //     headers: {
  //     "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //     auth: auth
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     console.log(res)
  //     this.props.redux(4, res)
  //   })
  //   .catch(res => console.log(res))
  // }
  generateNewsfeed(){
    // choose newsfeed / Profile
    let newsfeed;
    if(this.props.match.params.profileId === "newsfeed"){
      newsfeed = this.props.store.newsfeed;
    }else{
      newsfeed = this.props.store.profile[this.props.match.params.profileId];
    }
    return newsfeed.map( post => {
      let user;
      // find author of post
      if(this.props.store.user.user_id === post.user_id){
        user = this.props.store.user
      }else{
        user = this.props.store.user.friends.filter( friends => {
          return friends.user_id === post.user_id
        })
        user = user[0]
      }
      // is the post liked?
      let like = ""
      if(post.likes !== undefined){
        if(post.likes.includes(this.props.store.user.user_id)){
          like="Unlike"
        }else{
          like="Like"
        }
      }else{
        like="Like"
      }
      
      // return list of post
      return(
        <div className="post" key={post.post_id}>
          <div className="postHeader">
            <img
              src={user.profile_pic}
              className="userIcon"
              alt={user.name.charAt(0)}
            />
            <span className="postAuthor">{user.name} </span>
          </div>
          <p className="postContent">{post.content}</p>
          <div className="postFooter">
            <button
              onClick={()=>{this.handleClick("like", post)}}
              className="likeButton">
              {`Likes: ${post.likes.length} `}<span className={like}>{`${ like}`}</span>
            </button>
          </div>
          
        </div>
      )
    })
  }
  handleChange(e){
    switch (e.target.name) {
      case "newPost":
        this.setState({...this.state, post: e.target.value })
        break;
      default:
        break;
    }
  }
  handleSubmit(e){
    e.preventDefault();
    switch (e.target.name) {
      case "newPost":
      // redux will be done after fetch to get post_id
        this.props.redux(3, {
          user_id: this.props.store.user.user_id,
          post_id: Math.random(),
          timestamp: new Date(),
          likes: [],
          content: this.state.post
        })
        let auth = {
          user_id: cookies.get('user_id'),
          hash: cookies.get('hash')
        }
        fetch('http://localhost:1111/newsfeed/new', {
          method: "POST",
          credentials: "same-origin",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
            auth: auth,
            newPost:{
              user_id: this.props.store.user.user_id,
              post_id: null,
              timestamp: new Date(),
              likes: [],
              content: this.state.post
            }
          })
        })
        .then(res => res.json())
        .then(res => {
          console.log(res)
        })
        .catch(res => console.log(res))
        this.setState({...this.state, post: ""})
        break;
      default:
        break;
    }
  }
  handleClick(key, data){
    let auth = {
      user_id: cookies.get('user_id'),
      hash: cookies.get('hash')
    }
    fetch('http://localhost:1111/newsfeed/likes/edit', {
          method: "POST",
          credentials: "same-origin",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
            auth: auth,
            post_id: data.post_id
          })
        })
    switch (key) {
      case "like":
        if(data.likes.includes(this.props.store.user.user_id)){
          this.props.redux(2, data)
        }else if(!data.likes.includes(this.props.store.user.user_id)){
          this.props.redux(1, data)
        }
        break;
      default:
        break;
    }
  }
  render(){
    if(this.props.store !== undefined){
      if(this.props.store.user !== undefined && 
        this.props.store.profile !== undefined &&
        this.props.store.newsfeed !== undefined){
        if(this.props.store.newsfeed[0] !== undefined){
          if(this.props.store.newsfeed[0].likes !== undefined){
            return (
              <div>
                <div>
                  <form 
                    className="newPost"
                    name="newPost" 
                    onSubmit={this.handleSubmit}
                    autoComplete="off">
                    <input 
                      style={{width: "300px"}}
                      type="text"
                      name="newPost"
                      placeholder="What's Up!" 
                      onChange={this.handleChange} 
                      value={this.state.post}
                    />
                    <input type="submit" value="Post!" />
                  </form>
                </div>
                <div className="newsfeed">
                  {this.generateNewsfeed()}
                </div>
              </div>
            )
          }else{
            return(
              <div>loading...</div>
            )
          }
        }else{
          return(
            <div>loading...</div>
          )
        }
      }else{
        return(
          <div>loading...</div>
        )
      }
    }else{
      return(
        <div>loading...</div>
      )
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    redux: (key, data) => {
      if(key === 1){
        dispatch({type: "ADD_LIKE", data})
      }else if(key === 2){
        dispatch({type: "REMOVE_LIKE", data})
      }else if(key === 3){
        dispatch({type: "ADD_POST", data})
      }else if(key === 4){
        dispatch({type: "NEWSFEED_PACKAGE", data})
      }
    }
  }
}
const mapStateToProps = (state) => {
  return{
    store: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)
