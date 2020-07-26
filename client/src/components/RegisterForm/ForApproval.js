import React from 'react'
import axios from 'axios'


class ForApproval extends React.Component
{
    constructor(props) {
        super(props)
        this.state={
            pendingApprovalForms:[]
            

        }
    }

    componentDidMount(){
        axios.get('http://localhost:3005/requestform/view/pendingapproval',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then(response=>{
            //console.log(response.data,'in list response')

            this.setState(()=>({
                pendingApprovalForms:response.data
            }))
        })
    }

    handleApprove = (_id) => {
        //e.preventDefault()
        //console.log(id,'idd')
        const confirm = window.confirm("Are you sure?")
        if(confirm) {
            const id = _id
            const updateData={
                status:"approved"
            }

            axios.put(`http://localhost:3005/requestform/edit/${id}`,updateData, {
                headers: {
                    'x-auth' : localStorage.getItem('token')
                }
            })
            .then(response => {
                console.log(response)
                this.props.history.push('/requestform/approved')
            })
        }
    }

     render()
    {
        console.log(this.state.pendingApprovalForms)
        return(
            <div>
                <h1> For Approval Forms List </h1>
                
        <table border="2">
        <thead>
          <tr> 
            <th> Created By </th>  
            <th> Assigned Dept </th>
            <th> Asigned User </th>
            <th> Message </th>
            <th> Status </th> 
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        {
          this.state.pendingApprovalForms.map(form =>{
            return (
              <tr key ={form._id}>
                <td> { form.createdBy.username } </td>
                <td> { form.assignedDepartment.deptName } </td>
                <td> { form.assignedUser.username  }</td>
                <td> { form.message }</td>
                <td> { form.status } </td>
                <td><button className="btn " onClick={() => {
                    this.handleApprove(form._id)
                }}>approve</button></td>

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
export default ForApproval