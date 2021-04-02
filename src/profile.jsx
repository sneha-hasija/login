import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:""
        }
    }
    componentDidMount()
    {
        this.setState({name:this?.props?.location?.state?.data})
    }
    render() {
        return (
            <div>
                <h3>Welcome {this.state.name}</h3>
                <Link to={"/login"} className="btn btn-primary btn-sm">Logout</Link>
            </div>
        )
    }
}

export default Profile
