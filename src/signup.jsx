import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:"",
             uid:"",
             upassword:""
        }
    }

    handleCahnge=(event)=>{

        const {name,value}=event.target
        this.setState({[name]:value})
    }
    
    
    render() {
        return (
            <div>
                <form>
                <h3  className="header">Registration Form</h3>
             
                   
         <div className="col-3 mx-auto">   
         <label className="content">Name</label>
<input type="text" className="form-control" required value={this.state.uname} onChange={this.handleCahnge} name="uname"/>        
<label className="content">UserId</label>
<input type="text" className="form-control" required value={this.state.uid} onChange={this.handleCahnge} name="uid" />
<label className="content">Password</label>
<input type="password" className="form-control" required value={this.state.upassword} onChange={this.handleCahnge} name="upassword"/>
<Link to={{pathname:"/login",state:{
    userName:this.state.uname,
    userId:this.state.uid,
    userPassword:this.state.upassword
}}} className="btn btn-primary mt-4">Register</Link>
<br/>
</div> 
</form>
               
              
            </div>
        )
        }
    }


export default Signup
