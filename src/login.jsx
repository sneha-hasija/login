import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './login.css'
import {Link} from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             registerName:"",
             uid:"",
             upassword:"",
             registerId:"",
             registerPass:"",
             error:""
        }
    }

    handleCahnge=(event)=>{

        const {name,value}=event.target
        this.setState({[name]:value})
    }

    hanldleSubmit=(event)=>{
        event.preventDefault();
        if(this.state.uid==""|| this.state.upassword=="")   {
           this.setState({error:"Please Fill information for log in"})
        }
        else{
       if(this.state.uid==this.state.registerId && this.state.upassword== this.state.registerPass){
           this.props.history.push("/profile",{data
            :this.state.registerName})
       }
       else{
        this.setState({error:"Information is incorrect"})
       }
    }
    }

    componentDidMount()
    {
       
        this.setState({registerName:this.props?.location?.state?.userName});
        this.setState({registerId:this.props?.location?.state?.userId});
        this.setState({registerPass:this.props?.location?.state?.userPassword});

    }
    
    render() {
        return (
            
            <div>
            
                <form>
                <h3  className="header">LogIn Form</h3>
             
                  <h4>{this.state.error}</h4> 
         <div className="col-3 mx-auto">
<label className="content">UserId</label>
<input type="text" className="form-control" required value={this.state.uid} onChange={this.handleCahnge} name="uid" />
<label className="content">Password</label>
<input type="password" className="form-control" required value={this.state.upassword} onChange={this.handleCahnge} name="upassword"/>
<input type="submit" value="Login" className="btn btn-primary mt-4" onClick={this.hanldleSubmit}/>
<br/>
<label className="content">Don't have Account</label>
<Link to={"/signup"} className="btn-link btn-sm">SignUp</Link>
</div> 
</form>
               
              
            </div>
        )
        }
    }

export default Login
