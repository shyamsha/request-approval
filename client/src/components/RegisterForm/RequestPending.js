import React from 'react'
import axios from 'axios'

class RequestPending extends React.Component
{
    constructor(props) {
        super(props)
        this.state={
            pendingForms:[]

        }
    }

    componentDidMount(){
        axios.get('http://localhost:3005/requestform/view',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then(response=>{
            console.log(response.data)

            this.setState(()=>({
                pendingForms:response.data
            }))
        })
    }
     render()
    {
        //console.log(this.state.pendingForms)
        return(
            <div>
                <h1>In Request Pending </h1>
                
        <table border="2">
        <thead>
          <tr> 
            <th> Created By </th>  
            <th> Assigned Dept </th>
            <th> Asigned User </th>
            <th> Message </th>
            <th> Status </th> 
          </tr>
        </thead>

        <tbody>
        {
          this.state.pendingForms.filter(((reqForm)=>reqForm.status==='pending') ).map(form =>{
            return (
              <tr key ={form._id}>
                <td> { form.createdBy.username } </td>
                <td> { form.assignedDepartment.deptName } </td>
                <td> { form.assignedUser.username  }</td>
                <td> { form.message }</td>
                <td> { form.status }</td>
               </tr>

            )
          })
        }
        </tbody>
        </table>
        </div>

        )
        
    }
}
export default RequestPending