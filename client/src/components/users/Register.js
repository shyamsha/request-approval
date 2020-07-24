import React from 'react'
import axios from 'axios'

class Register extends React.Component
{
    constructor()
    {
        super()
        this.state={
            username: '', 
            email: '',
            password: '',
            conformpassword:'',
            department:'',
            notice:''


        }
    }
    handleChange = (e) => {
        e.persist() 
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            department:this.state.department,
           
            
           
        }
        console.log(formData,'innn')
        
        if(this.state.password===this.state.conformpassword)
        {
            axios.post('http://localhost:3005/users/register', formData)
            .then(response => {
                if(response.data.errors) {
                    this.setState(() => ({
                        errors: response.data.errors
                    }))
                   
                } else {
                // programmatically change from one to another component
                console.log(' in else')
                    this.props.history.push('/users/login')
                }   
            })
        }
        else{
            this.setState(()=>({
                notice:'passwords didnot match'
            }))
        }
        
    }
    
    
    render()
    {
        return(
            <div className="row">
            <div className="col-md-6 offset-3">
                <h2>Register with us </h2>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>
                            Username 
                            <input type="text" 
                                   name="username"
                                   value={this.state.username} 
                                   onChange={this.handleChange} 
                                   className="form-control" 
                                   placeholder="Enter username"
                            />
                        </label>
                        {/* { this.state.errors.username && <p className="text text-danger"> { this.state.errors.username.message } </p>} */}
                    </div>

                   

                    <div className="form-group">
                        <label>
                            department
                            <select name="department"   value={this.state.department}   onChange={this.handleChange} 
                                   >
                                <option value="">Select</option>
                                <option value="CS">CS</option>
                                <option value="ME">ME</option>
                                <option value="EC">EC</option>
                            </select>
                            
                        </label>
                        {/* { this.state.errors.username && <p className="text text-danger"> { this.state.errors.username.message } </p>} */}
                    </div>
                   
                   

                    <div className="form-group">
                        <label>
                            Email
                            <input type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </label>
                        {/* {this.state.errors.email && <p className="text text-danger"> {this.state.errors.email.message} </p>} */}
                    </div>

                    <div className="form-group">
                        <label>
                            Password
                            <input type="password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   className="form-control"
                                   placeholder="Enter password"
                            />
                        </label>
                        {/* {this.state.errors.password && <p className="text text-danger"> {this.state.errors.password.message} </p>} */}
                    </div>
                    <div className="form-group">
                        <label>
                           Conform Password
                            <input type="password"
                                   name="conformpassword"
                                   value={this.state.conformpassword}
                                   onChange={this.handleChange}
                                   className="form-control"
                                   placeholder="Enter  conform password"
                            />
                        </label>
                        {/* {this.state.errors.password && <p className="text text-danger"> {this.state.errors.password.message} </p>} */}
                    </div>
                    {this.state.notice && <p className="text text-danger"> {this.state.notice} </p>}

                    <input type="submit" className="btn btn-primary" />
                   

                </form>
            </div>
        </div> 
        )
    }
}
export default Register