import React, { Component } from 'react'
import { connect } from 'react-redux'

class ResumeEdit extends Component {
    constructor(){
        super();
        this.state = {
            form: null,
            open: {
                user: false, 
                description: false, 
                skills: false, 
                professionalExperience: false, 
                educationAndCredentials: false,
                others: false
            }
        }
        this.generateInputs = this.generateInputs.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.generateSection = this.generateSection.bind(this)
        this.generateLabel = this.generateLabel.bind(this)
    }
    componentDidMount(){
        this.setState({...this.state, form: this.props.store.resume})
    }
    handleClick(data){
        switch (data.name) {
            case "delete":
                console.log(data)
                if(this.state.form[data.section].length > 1){
                    let array = this.state.form[data.section].filter(ele=>{return true})
                    array.splice(parseInt(data.num), 1)
                    this.setState({
                        ...this.state,
                        form: {
                            ...this.state.form,
                            [data.section]: array
                        }
                    })
                }
                break;
            case "new":
                console.log(data)
                let array = this.state.form[data.section].filter(ele=>{return true})
                let newObjectExample = this.props.store.resume[data.section][0]
                let newObject = {}
                Object.keys(newObjectExample).forEach(ele => {
                    newObject[ele] = ""
                })
                array.push(newObject)
                this.setState({
                    ...this.state,
                    form: {
                        ...this.state.form,
                        [data.section]: array
                    }
                })
                break;
            default:
                break;
        }
    }
    handleOpen(e){
        e.preventDefault();
        this.setState({...this.state, open: {
            ...this.state.open,
            [e.target.name]: !this.state.open[e.target.name]
        }})
    }
    handleChange(e){
        let name = JSON.parse(e.target.name)
        if(name.obj === undefined){
            this.setState({
                ...this.state, 
                form:{
                    ...this.state.form, 
                    [name.section]: {
                        ...this.state.form[name.section],
                        [name.key]: e.target.value
                    }
                }
            })
        }else{
            let array = this.state.form[name.section].filter( (ele) => {
                return true
            })
            array[parseInt(name.obj)][name.key] = e.target.value
            this.setState({
                ...this.state, 
                form:{
                    ...this.state.form, 
                    [name.section]: array
                }
            })
        }
    }
    handleSubmit(e){
        e.preventDefault();
        if(window.confirm("Save???")){
            this.props.redux(1, this.state.form)
            this.props.history.push(`/LinkedUp/resume/${this.props.store.user.user_id}`)
        }else{
            this.props.history.push(`/LinkedUp/resume/${this.props.store.user.user_id}`)
        }
        
    }
    generateLabel(key){
        return (
            <p className="ResumeEditLabel">{key}</p>
        )
    }
    generateInputs(type, section){
        // console.log(this.state.form)
        if(type === "object"){
            return Object.keys(this.state.form[section]).map( key => {
                // set length of text area
                let long;
                if(this.state.form[section][key].length > 80){
                    long = "4"
                }else if(this.state.form[section][key].length > 40){
                    long = "2"
                }else{
                    long = "1"
                }
                return(
                    <div key={key} className="ResumeEditInputs">
                        {this.generateLabel(key)}<br />
                        <textarea rows={`${long}`} cols="50"
                            className={`ResumeEditInput`}
                            name={JSON.stringify({key: key, section: section})}
                            value={this.state.form[section][key]}
                            onChange={this.handleChange}
                            autoComplete="off"
                            placeholder={`${key}`}
                        />
                    </div>
                )
            })
        }
        if(type === "array"){
            return this.state.form[section].map( (obj, num) => {
                return (<div key={num} className="resumeSection">
                    <div 
                        className="New" 
                        onClick={()=>{this.handleClick({
                            name: "delete",
                            num: num,
                            section: section
                        })}}>
                        Delete
                    </div>
                    {Object.keys(obj).map( key => {
                    // set length of text area
                    let long;
                    if(this.state.form[section][parseInt(num)][key].length > 80){
                        long = "4"
                    }else if(this.state.form[section][parseInt(num)][key].length > 40){
                        long = "2"
                    }else{
                        long= "1"
                    }
                    return (
                        <div key={key} className="ResumeEditInputs">
                            {this.generateLabel(key)}<br />
                            <textarea rows={`${long}`} cols="50"
                                className={`ResumeEditInput`}
                                name={JSON.stringify({key: key, obj: num, section: section})}
                                value={this.state.form[section][parseInt(num)][key]}
                                onChange={this.handleChange}
                                autoComplete="off"
                                placeholder={`${key}`}
                            />
                        </div>
                    )
                })}
                </div>)
            })
        }
    }
    generateSection(type, section){
        if(this.state.open[section] === true){
            if(type === "object"){
                return(
                    <div className="resumeSection">
                        {this.generateInputs(type, section)}
                    </div>
                )
            }else if(type === "array"){
                return(
                    <div>
                        <div 
                            onClick={()=>{this.handleClick({
                                name: "new",
                                section: section
                            })}} 
                            className="New">
                            New
                        </div>
                        {this.generateInputs(type, section)}
                    </div>
                )
            }
        }else{
            return <div className="ResumeEditInputsHidden"></div>
        }
    }
    render() {
        if(this.state.form !== null){
            return (
                <div>
                    {/* save button */}
                    <div style={{position: "relative", margin: "5px"}}>
                        <span>Resume Edit</span>
                        <button 
                            style={{
                                position: "absolute", 
                                right: 0, 
                                background: "rgba(0,0,0,0)",
                                border: "none",
                                color: "rgb(13, 43, 141)",
                                fontWeight: 800
                            }} 
                            onClick={this.handleSubmit}>
                            SAVE
                        </button>
                    </div>
                    {/* FORM */}
                    <div>
                        <form className="ResumeEditForm">
                            <div className="ResumeEditSection">
                                <button 
                                    className={`ResumeEditButton ${this.state.open.user}`}
                                    name="user" 
                                    onClick={this.handleOpen}>
                                    User Details
                                    <span className="buttonDownArrow">edit</span>
                                </button>
                                {this.generateSection("object", "user")}
                            </div>
                            <div className="ResumeEditSection">
                                <button 
                                    className={`ResumeEditButton ${this.state.open.description}`}
                                    name="description" 
                                    onClick={this.handleOpen}>
                                    Personal Description
                                    <span className="buttonDownArrow">edit</span>
                                </button>
                                {this.generateSection("object", "description")}
                            </div>
                            <div className="ResumeEditSection">
                                <button 
                                    className={`ResumeEditButton ${this.state.open.skills}`}
                                    name="skills" 
                                    onClick={this.handleOpen}>
                                    Skills
                                    <span className="buttonDownArrow">edit</span>
                                </button>
                                {this.generateSection("array", "skills")}
                            </div>
                            <div className="ResumeEditSection">
                                <button 
                                    className={`ResumeEditButton ${this.state.open.professionalExperience}`}
                                    name="professionalExperience" 
                                    onClick={this.handleOpen}>
                                    Professional Experience
                                    <span className="buttonDownArrow">edit</span>
                                </button>
                                {this.generateSection("array", "professionalExperience")}
                            </div>
                            <div className="ResumeEditSection">
                                <button 
                                    className={`ResumeEditButton ${this.state.open.educationAndCredentials}`}
                                    name="educationAndCredentials" 
                                    onClick={this.handleOpen}>
                                    Education and Credentials
                                    <span className="buttonDownArrow">edit</span>
                                </button>
                                {this.generateSection("array", "educationAndCredentials")}
                            </div>
                            <div className="ResumeEditSection">
                                <button 
                                    className={`ResumeEditButton ${this.state.open.others}`}
                                    name="others" 
                                    onClick={this.handleOpen}
                                    >Others
                                    <span className="buttonDownArrow">edit</span>
                                </button>
                                {this.generateSection("array", "others")}
                            </div>
                            
                            
                            {/* {this.generateInputs("object", "description")} */}
                        </form>
                    </div>
                </div>
            )
        }else{
            return(
                <div>Loading...</div>
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
                dispatch({type: "EDIT_RESUME", data})
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResumeEdit)
