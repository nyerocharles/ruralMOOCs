import React,{ useEffect,useState} from 'react';
import axios from 'axios'

const DashStudent = () => {

    let [students,setStudents]=useState()

    useEffect(()=>{
        axios.get('/api/users/0')
        .then(students=>{
            setStudents(students.data)
        })
    },[])

    const renderStudents=(students)=>{
        return students.map((student,i)=>(
            <tr key={i}>
                <td>{student.fname}</td>
                <td>{student.lname}</td>
                <td>{student.email}</td>
                <td>
                    <span style={{padding:'2px 5px'}} className='icon icon-eye'></span>
                    <span style={{padding:'2px 5px'}} className='icon icon-delete'></span>
                </td>
            </tr>
        ))
    }

    return ( 
        <div className='col-sm-9'>
            <div style={{padding:'9% 0 0 0'}}>
            <h1>Students</h1>
            <div className="row">
                <table className='table' style={{fontSize:'14px'}}>
                        <tbody>
                            <tr style={{fontWeight:'bold'}}>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>Action</td>
                            </tr>
                            {students? renderStudents(students):null}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
     );
}
 
export default DashStudent;