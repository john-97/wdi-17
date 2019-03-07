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
    this.paragraph = this.paragraph.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  paragraph(text){
    let textArray = text.split("{paragraph}")
    return textArray.map((para, num) => {
      console.log(para)
      return(<div key={num}>{para}</div>)
    })
  }
  handleClick(e){
    e.preventDefault();
    window.print();
  }
  // generate resume
  generateSkills(){
    return this.props.store.resume.skills.map( (ele, num) => {
      return(
        <div key={num}>
          <div className="ResumeArrayHeading">{ele.name}</div>
          <div className="ResumeArrayDescription">{this.paragraph(ele.description)}</div>
        </div>
      )
    })
  }
  generateProfessionalExperience(){
    return this.props.store.resume.professionalExperience.map((ele,num)=> {
      return(
        <div key={num}>
          <div className="ResumeArrayHeading">{ele.name}</div>
          <div style={{
            paddingBottom: "5px"
          }}>{ele.position}</div>
          <div className="ResumeArrayDescription">{this.paragraph(ele.description)}</div>
        </div>
      )
    })
  }
  generateEducationAndCredentials(){
    return this.props.store.resume.educationAndCredentials.map((ele,num)=> {
      return(
        <div key={num}>
          <div className="ResumeArrayHeading">{ele.name}</div>
          <div className="ResumeArrayDescription">{this.paragraph(ele.description)}</div>
        </div>
      )
    })
  }
  generateOthers(){
    return this.props.store.resume.others.map((ele,num)=> {
      return(
        <div key={num}>
          <div className="ResumeArrayHeading">{this.paragraph(ele.name)}</div>
        </div>
      )
    })
  }
  render() {
    this.paragraph("this is a wonderful day. {paragraph} It is isnt it!!!")
    return (
      <div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px 30px 0px 30px"
        }}>
          <NavLink 
            style={{fontSize: "20px", fontWeight: 700, color: "rgb(17, 57, 122)"}}
            to={`/LinkedUp/resume/${this.props.store.user.user_id}/edit`}
          >
          EDIT YOUR RESUME
          </NavLink>
          <div 
            style={{fontSize: "20px", fontWeight: 700, color: "rgb(17, 57, 122)"}}
            onClick={this.handleClick}
            name="print" >
            Print
          </div>
        </div>
        <div id="section-to-print">
          {/* HEADER */}
            
            <div className="ResumeContainer">
              <div style={{
                 display: "flex",
                 flexDirection: "row",
                 justifyContent: "space-between",
                 margin: "20px"
              }}>
              <div>
                <div style={{
                  fontSize: "30px"
                }}>
                  {this.props.store.resume.user.name}
                </div>
                <div style={{

                }}>
                  {this.props.store.resume.description.position}
                </div>
              </div>
              {/* contact Deets */}
              <div style={{
                textAlign: "right",
                fontSize: "15px"
              }}>
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
              </div>
              {/* description */}
              <div className="ResumeContainer" style={{
                fontSize: "14px"
              }}>
                <div className="ResumeHeading">Description</div>
                {this.paragraph(this.props.store.resume.description.description)}
              </div>
              {/* skills */}
              <div className="ResumeContainer">
                <div className="ResumeHeading">Skills</div>
                {this.generateSkills()}
              </div>
              {/* professionalExperience */}
              <div className="ResumeContainer">
                <div className="ResumeHeading">Professional Experience</div>
                {this.generateProfessionalExperience()}
              </div>
              {/* educationAndCredentials */}
              <div className="ResumeContainer">
                <div className="ResumeHeading">Education and Credentials</div>
                {this.generateEducationAndCredentials()}
              </div>
              {/* others */}
              <div className="ResumeContainer">
                <div className="ResumeHeading">Others</div>
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
