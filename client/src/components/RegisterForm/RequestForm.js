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
        users:'',
        message:''
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
                        name="username"
                        value={this.state.username} 
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
                    <label className="headerlabel">Department 
                        <select name="department" value={this.state.department} onChange={this.handleChange} className="form-control">
                            <option value="">Select</option>
                            <option value="CS">CS</option>
                            <option value="ME">ME</option>
                            <option value="EC">EC</option>
                        </select>
                    </label>
                    </div>
                    <div className="form-group col-md-3">
                    <label className="headerlabel">Users
                        <select name="department"   value={this.state.department}   onChange={this.handleChange} className="form-control">
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
                    <label for="exampleFormControlTextarea1" className="headerlabel">Message
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="34"></textarea>
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