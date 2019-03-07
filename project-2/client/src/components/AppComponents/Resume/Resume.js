import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Resume extends Component {
  constructor(){
    super()
    this.generateSkills = this.generateSkills.bind(this)
    this.generateEducationAndCredentials = this.generateEducationAndCredentials.bind(this)
    this.generateProfessionalExperience = this.generateProfessionalExperience.bind(this)
    this.generateOthers = this.generateOthers.bind(this)
  }
  // generate resume
  generateSkills(){
    return this.props.store.resume.skills.map( (ele, num) => {
      return(
        <div key={num}>
          <div>{ele.name}</div>
          <div>{ele.description}</div>
        </div>
      )
    })
  }
  generateProfessionalExperience(){
    return this.props.store.resume.professionalExperience.map((ele,num)=> {
      return(
        <div key={num}>
          <div>{ele.name}</div>
          <div>{ele.position}</div>
          <div>{ele.description}</div>
        </div>
      )
    })
  }
  generateEducationAndCredentials(){
    return this.props.store.resume.educationAndCredentials.map((ele,num)=> {
      return(
        <div key={num}>
          <div>{ele.name}</div>
          <div>{ele.description}</div>
        </div>
      )
    })
  }
  generateOthers(){
    return this.props.store.resume.others.map((ele,num)=> {
      return(
        <div key={num}>
          <div>{ele.name}</div>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <div>
          <NavLink 
            to={`/LinkedUp/resume/${this.props.store.user.user_id}/edit`}
          >
          EDIT YOUR RESUME
          </NavLink>
        </div>
        <div>
          {/* HEADER */}
            
            <div>
              <div>
                <div>
                  {this.props.store.resume.user.name}
                </div>
                <div>
                  {this.props.store.resume.description.position}
                </div>
              </div>
              {/* contact Deets */}
              <div>
                <div>
                  {this.props.store.resume.user.email}
                </div>
                <div>
                  {this.props.store.resume.user.website}
                </div>
                <div>
                  {this.props.store.resume.user.phoneNumber}
                </div>
              </div>
              {/* description */}
              <div>
                {this.props.store.resume.description.description}
              </div>
              <div>
                {this.generateSkills()}
              </div>
              <div>
                {this.generateProfessionalExperience()}
              </div>
              <div>
                {this.generateEducationAndCredentials()}
              </div>
              <div>
                {this.generateOthers()}
              </div>
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
export default connect(mapStateToProps)(Resume)
