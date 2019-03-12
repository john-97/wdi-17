import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// FILE IMPORTS
import Header from './Header'
import Newsfeed from '../AppComponents/Newsfeed/Newsfeed'
// import Profile from '../AppComponents/Newsfeed/Profile'
import Chat from '../AppComponents/Chat/Chat'
import Resume from '../AppComponents/Resume/Resume'
import ResumeEdit from '../AppComponents/Resume/ResumeEdit'
import Settings from '../AppComponents/Settings/Settings'
import SideBar from './SideBar';

// Cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class MainApp extends Component {
    componentDidMount(){
        let auth = {
          user_id: cookies.get('user_id'),
          hash: cookies.get('hash')
        }
        fetch('http://localhost:1111/newsfeed', {
          method: "POST",
          credentials: "same-origin",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
          auth: auth
          })
        })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          this.props.redux(1, res)
        })
        .catch(res => console.log(res))
        fetch('http://localhost:1111/resume', {
            method: "POST",
            credentials: "same-origin",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            auth: auth
            })
          })
          .then(res => res.json())
          .then(res => {
            console.log(res)
            this.props.redux(2, res)
          })
          .catch(res => console.log(res))
    }
    render() {
        if(this.props.store !== undefined){
            console.log(this.props.store)
            return (
                <div id="background">
                    <Header store={this.props.store} />
                    <div id="body">
                        <div id="sidebar">
                            <SideBar store={this.props.store} />
                        </div>
                        <div id="content">
                            <Switch>
                                <Route path='/LinkedUp/newsfeed/:id/:profileId' component={Newsfeed} />
                                <Route exact path='/LinkedUp/resume/:id' component={Resume} />
                                <Route path='/LinkedUp/resume/:id/edit' component={ResumeEdit} />
                                <Route path='/LinkedUp/chat/:id/:chat_id' component={Chat} />
                                <Route path='/LinkedUp/settings/:id' component={Settings} />
                            </Switch>
                        </div>
                    </div>
                </div>
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
      redux: (key, data) => {
        if(key === 1){
            dispatch({type: "NEWSFEED_PACKAGE", data})
        }else if(key === 2){
            dispatch({type: "RESUME_PACKAGE", data}) 
        }
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(MainApp)
