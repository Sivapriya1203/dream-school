import axios from 'axios'
import React, { useEffect, useState } from 'react'
import config from '../../config'
import { useParams } from 'react-router'
import { useSnackbar } from 'notistack';
function Vanattenancedetails() {
    const { enqueueSnackbar } = useSnackbar();
    const {staff_id} = useParams()
    const [vanattentdetail,setVanattentdetail]= useState([])
    useEffect(()=>{
   axios.get(`${config.apiURL}/students/vanattenancedetails/${staff_id}`)
   .then((res)=>{
    setVanattentdetail(res.data)
   })
   .catch((err)=>{
    console.log(err)
    enqueueSnackbar(err, { variant: 'error' });
   })

    },[staff_id,config.apiURL])
  return (
    <div>
        <table>
            <tr>
                <th>s.no</th>
                <th>student name</th>
                <th>status</th>
                <th>date</th>
            </tr>
{vanattentdetail.map((data,index)=>(
    <tr key={index}>
        <td>{index+1}</td>
        <td>{data.stu_name}</td>
        <td>{data.statusn}</td>
        <td>{data.thatdate}</td>
    </tr>
))}



        </table>




    </div>
  )
}

export default Vanattenancedetails