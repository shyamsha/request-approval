import React from 'react' 
import axios from 'axios'
import form from './../RegisterForm/form.css';
class Login extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            password: '',
            errors: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3005/users/login', formData)
            .then(response => {
                
                if (response.data.errors) {
                    this.setState(() => ({
                        errors: response.data.errors,
                        password: ''
                    }))
                } else {
                    // write this to localStorage 
                    localStorage.setItem('token', response.data.token)
                    // redirect to notes page 
                    this.props.history.push('/requestform/view')
                    // change the navigation links = update the state of isAuthenticated in the parent component
                    this.props.handleAuthentication(true)
                }
            })
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        
        return (
            <div>
                <div className="formheader">
                    <h2>Login </h2>
                    <div className="form-group">
                    <form onSubmit={this.handleSubmit}>
                        { this.state.errors && <p className="formcenter">{ this.state.errors}</p> }
                        <div className="form-row">
                        <div className="form-group col-md-4"></div>
                        <div className="form-group col-md-4">
                            <label className="headerlabel">Email
                                <input 
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="your email"
                                />
                            </label>
                        </div>
                        <div className="form-group col-md-4"></div>
                        </div>
                        <div>
                            <label className="headerlabel">Password
                                <input 
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="your password"
                                />
                            </label>
                        </div>
                        <input type="submit" className="btn btn-primary" />
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login