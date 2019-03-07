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

class MainApp extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
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
const mapStateToProps = (state) => {
    return{
        store: state
    }
}
export default connect(mapStateToProps)(MainApp)
