
import axios from 'axios'
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Create() {
      const [values, setValues] = useState({
        name:'',
        email:'',
        des:'',
       
      })


   
      const navigate=useNavigate();

      const handlesubmit= (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/users" , values)
        .then(res=>{
          console.log('res');
          navigate('/')
        } )
        .catch(err=>console.log(err));
      }
      
     
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="border w-50 bg-white shadow px-5 pt-3 pb-3 rounded">
          <h1>Add A Product </h1>
          <form  onSubmit={handlesubmit}> 
              <div className="mb-2">
                <label htmlFor="name"> Name:</label>
                <input type="text" name="name " className='form-control ' placeholder='Enter Name'  
                onChange={e=>setValues({...values, name:e.target.value})}/>
              </div>
              <div className="mb-2">
                <label htmlFor="email"> Email:</label>
                <input type="email" name="email " className='form-control ' placeholder='Enter Email  '
                   onChange={e=>setValues({...values, email:e.target.value})}
                />
                </div>
            
              
              <button className='btn btn-success'>Submit</button>
                <Link  to={'/'} className='btn btn-primary ms-3' > Back</Link>            
          </form>
        
        </div>
      </div>

    </>
  )
}
