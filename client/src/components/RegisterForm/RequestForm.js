import React from 'react'
// import Rout from './routes'
import form from './form.css';
class RequestForm extends React.Component
{
    constructor() {
        super()
        this.state={
        createdBy:'',
        department:'',
        departmentArray:[],
        userArray:[],
        user:'',
        message:''
        }
    }
    componentDidMount()
    {
      axios.get('http://localhost:3005/category/viewall',{
          headers:{
              'x-auth':localStorage.getItem('token')
          }
      })

      .then((response)=>{
          console.log(response,'in category')
          this.setState(()=>({
              categories:response.data
              
          }))
    })
    handleChange=(e)=>{
        e.persist()
        this.setState(()=>({
          [e.target.name] : e.target.value   
        }))
    }
    handleSubmit=(e)=>{
        e.preventDefault() 
        const formData={
            name : this.state.name,
            department : this.state.department,
            priority : this.state.priority,
            message : this.state.message,
            notice : ''
    }
    }
    render() {
        return(
            <fieldset>
                 <h2 className="formheader">Send the request to another Department </h2>
            <div className="form-group">
                <form onSubmit={this.handleSubmit} className="formcenter">
                <div className="form-row">
                    <div className="form-group col-md-4"></div>
                    <div className="form-group col-md-4">
                    <label className="headerlabel">Username 
                        <input 
                        type="text" 
                        name="createdBy"
                        value={this.state.createdBy} 
                        onChange={this.handleChange} 
                        className="form-control" 
                        placeholder="Enter username"
                        //    className="form-control"
                        />
                    </label>
                    </div>
                    <div className="form-group col-md-4"></div>
                    <div className="form-group col-md-4"></div>
                    <div className="form-group col-md-2">
                    <label className="headerlabel">Department(to assign) 
                        <select name="department" value={this.state.department} onChange={this.handleChange} className="form-control">
                            <option value="">Select</option>
                            <option value="CS">CS</option>
                            <option value="ME">ME</option>
                            <option value="EC">EC</option>
                        </select>
                    </label>
                    </div>
                    <div className="form-group col-md-3">
                    <label className="headerlabel">User (to assign)
                        <select name="user"   value={this.state.user}   onChange={this.handleChange} className="form-control">
                            <option value="">Select</option>
                            <option value="CS">CS</option>
                            <option value="ME">ME</option>
                            <option value="EC">EC</option>
                        </select>
                    </label>
                    </div>
                    <div className="form-group col-md-2"></div>
                    <div className="form-group col-md-4"></div>
                    <div className="form-group col-md-4">
                    <label htmlFor="exampleFormControlTextarea1" className="headerlabel">Message
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" cols="34" value={this.state.message} onChange={this.handleChange} name ="message"></textarea>
                    </label>
                    </div>
                    <div className="form-group col-md-4"></div>
                    <div className="form-group col-md-5"></div>
                    <input type="submit" className="btn btn-primary submit"></input>
                    <div className="form-group col-md-4"></div>
                </div>
                </form>           
            </div>   
            </fieldset>
        )
    }
}
export default RequestForm