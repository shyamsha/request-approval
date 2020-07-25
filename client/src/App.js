import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'
import RequestForm from './components/RegisterForm/RequestForm'
import RequestPending from './components/RegisterForm/RequestPending'
import RequestApproved from './components/RegisterForm/RequestApproved'
import RequestRejected from './components/RegisterForm/RequestRejected'

import axios from 'axios'


class App extends React.Component{

  constructor(props) {
    super(props) 
    this.state = {
      isAuthenticated: false 
    }
  }

  // handle page reloading, if the user is logged in, continue to login
  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState(() => ({ 
        isAuthenticated: true 
      }))
    }
  }

  handleAuthentication = (boolean) => {
    this.setState(() => ({
      isAuthenticated: boolean
    }))
  }

  render()
  {
    return(
      <BrowserRouter>
      <h1> <center>SwitchOn</center></h1>
      <div className="container">
      
        {/* <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header"> 
            {/* <Link to className="navbar-brand" Link to="/">WebSiteName  */}
            {/* </div>  */}
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav navbar-nav">
              
              { this.state.isAuthenticated ? (
                <React.Fragment>
                <li><Link to="/users/logout" >Logout </Link></li>
                <li> <Link to="/requestform/view">Form</Link></li>
                <li> <Link to ="/requestform/pending">Pending</Link></li>
                <li><Link to="/requestform/approved">Approved</Link></li>
                <li><Link to="/requestform/rejected">Rejected></Link></li>
                <li> <Link to ="/requestform/for-approval">Request for Approval</Link></li>

                
              </React.Fragment>
              ) : (
                <React.Fragment>
                  <li> <Link to="/users/register">Register</Link></li>
                  <li> < Link to="/users/login">Login</Link></li>
                  
                </React.Fragment>
              )}

              
            </ul>
            </nav>
            </div>
        {/* </nav> */}


        

        <Switch>
          <Route path="/users/register" component={ Register } />
          <Route path="/users/login" render={(props) => {
              return <Login {...props} handleAuthentication={this.handleAuthentication} />
          }} />
          <Route path="/users/account" component={ Account } />
          <Route path ="/requestform/view" component={RequestForm}/>
          <Route path='/requestform/pending' component={RequestPending}/>
          <Route path='/requestform/approved' component={RequestApproved}/>
          <Route path='/requestform/rejected' component={RequestRejected}/>
          
          <Route path="/users/logout" render={(props) => {
              axios.delete('http://localhost:3005/users/logout', {
                headers: {
                  'x-auth': localStorage.getItem('token')
                }
              })
                .then(response => {
                  props.history.push('/users/login')
                  this.setState(() => ({
                    isAuthenticated: false
                  }))
                  localStorage.removeItem('token')
                })
            }} />
              

         
        </Switch>

      </div>   
    
      </BrowserRouter>
    
      
    )
  }


}

export default App;
