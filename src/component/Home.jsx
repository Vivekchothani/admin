import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Home() {
        const [data, setdata] = useState([])
        const navigate =useNavigate();
        
        useEffect(() => {
          axios.get("http://localhost:3001/users")
          .then(res=>setdata(res.data) )
          .catch(err=>console.log(err));
      },[] )
        
      const handleDelete = (id)=>{
        console.log(id);
    
        const confirm = window.confirm("you like to delete");
        if(confirm){
          axios.delete("http://localhost:3001/users/"+id)
          .then(res=>{
            navigate('/');
            window.location.reload(true);
    
          }).catch(err=>console.log(err));
        }
       }
    return (
      <div className=" flex-column d-flex  justify-content-center align-items-center bg-light vh-100">
         <h1> Listing Of Products  </h1>
        <div className="d_flex justify-content-end ">
        <Link to={'/create'} className='btn btn-success'> Add+ </Link>
          
        </div>
    <div className='container mt-5'>

        <table className="table">
  <thead>
    <tr>
      <th >ID</th>
      <th >Name</th>
      <th>Email</th>
      <th>Action</th>
      
    </tr>
  </thead>
  <tbody>
    {
        data.map((d ,i)=>(
        
          <tr key={i}>
            <td> {d.id}</td>
            <td> {d.name}</td>
            <td> {d.email}</td>
            <Link to={`/update/${d.id}`}  className='btn btn-sm btn-primary me-2' >Edit</Link>
            <button className='btn btn-sm btn-danger' onClick={e=>handleDelete(d.id)}>Delete</button>
          </tr>

        ))
    }
  </tbody>
</table>
           
    </div>
    </div>
  )
}
