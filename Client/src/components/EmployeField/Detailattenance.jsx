import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../../config'
import { useParams } from 'react-router'

function Detailattenance() {

    const {staff_id} = useParams()

    const [attendanceData,setAttendancedata]= useState([])
    useEffect(()=>{

        axios.get(`${config.apiURL}/students/detailattenance/${staff_id}`)
        .then((res)=>{
            setAttendancedata(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[staff_id,config.apiURL])
  return (
    <div>
        <table>
            <tr>
                <th>student name</th>
                <th>status</th>
                <th>Date</th>
            </tr>
 {attendanceData.map((data)=>(
    <tr key={data.stu_id}>
<td>{data.stu_name}</td>
<td>{data.status}</td>
<td>{data.date}</td>
    </tr>
 ))}
</table>
    </div>
  )
}

export default Detailattenance