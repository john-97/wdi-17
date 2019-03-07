import React, { Component } from 'react'
import { connect } from 'react-redux'

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
  componentDidMount(){
    // console.log(this.props.match.params.profileId)
  }
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
      if(post.likes.includes(this.props.store.user.user_id)){
        like="Unlike"
      }else{
        like="Like"
      }
      // return list of post
      return(
        <div className="post" key={post.post_id}>
          <p className="postContent">{post.content}</p>
          <p><span className="postAuthor">{user.name} </span>
          <span>Likes: {post.likes.length}</span></p>
          <button
            onClick={()=>{this.handleClick("like", post)}}>
            {like}
          </button>
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
        this.setState({...this.state, post: ""})
        break;
      default:
        break;
    }
  }
  handleClick(key, data){
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
    // console.log(this.props.store.newsfeed[4].likes)
    return (
      <div>
        <div>
          <form 
            name="newPost" 
            onSubmit={this.handleSubmit}
            autoComplete="off">
            <input 
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
