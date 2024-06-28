<<<<<<< HEAD
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import config from '../../config'
// import { useParams } from 'react-router'

// function Vanattenancedetails() {
//     const {staff_id} = useParams()
//     const [vanattentdetail,setVanattentdetail]= useState([])
//     useEffect(()=>{
//    axios.get(`${config.apiURL}/students/vanattenancedetails/${staff_id}`)
//    .then((res)=>{
//     setVanattentdetail(res.data)
//    })
//    .catch((err)=>{
//     console.log(err)
//    })

//     },[staff_id,config.apiURL])
//   return (
//     <div>
//         <table>
//             <tr>
//                 <th>s.no</th>
//                 <th>student name</th>
//                 <th>status</th>
//                 <th>date</th>
//             </tr>
// {vanattentdetail.map((data,index)=>(
//     <tr key={index}>
//         <td>{index+1}</td>
//         <td>{data.stu_name}</td>
//         <td>{data.statusn}</td>
//         <td>{data.thatdate}</td>
//     </tr>
// ))}



//         </table>




//     </div>
//   )
// }

// export default Vanattenancedetails



// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import config from '../../config';
// import { color } from '@mui/system';

// function VanAttendanceDetails() {
//   const { staff_id } = useParams();
//   const [vanAttendanceDetails, setVanAttendanceDetails] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${config.apiURL}/students/vanattenancedetails/${staff_id}`)
//       .then((res) => {
//         setVanAttendanceDetails(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [staff_id]);

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//   };

//   const headerStyle = {
//     backgroundColor: 'gray',
//     border: '1px solid #ddd',
//     padding: '8px',
//     color:'white',
//     textAlign: 'left',
//   };

//   const cellStyle = {
//     border: '1px solid #ddd',
//     padding: '8px',
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={headerStyle}>S.No</th>
//             <th style={headerStyle}>Student Name</th>
//             <th style={headerStyle}>Status</th>
//             <th style={headerStyle}>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vanAttendanceDetails.map((data, index) => (
//             <tr key={index}>
//               <td style={cellStyle}>{index + 1}</td>
//               <td style={cellStyle}>{data.stu_name}</td>
//               <td style={cellStyle}>{data.statusn}</td>
//               <td style={cellStyle}>{data.thatdate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default VanAttendanceDetails;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import config from '../../config';
import { color } from 'framer-motion';
import { border, textAlign } from '@mui/system';

function VanAttendanceDetails() {
  const { staff_id } = useParams();
  const [vanAttendanceDetails, setVanAttendanceDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.apiURL}/students/vanattenancedetails/${staff_id}`)
      .then((res) => {
        setVanAttendanceDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [staff_id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    border:'3px solid black'
  };

  const headerStyle = {
    backgroundColor: 'gray',
    border: '1px solid #ddd',
    padding: '8px',
    color:'white',
     border:'2px solid black',
     textAlign:'center',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign:'center',
     border:'2px solid black'
  };
=======
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
>>>>>>> dce7fac993fc0f314dd2cbc7f1ad2c3377fb5a75

  return (
    <div style={{ padding: '20px', }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>S.No</th>
            <th style={headerStyle}>Student Name</th>
            <th style={headerStyle}>Status</th>
            <th style={headerStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {vanAttendanceDetails.map((data, index) => (
            <tr key={index}>
              <td style={cellStyle}>{index + 1}</td>
              <td style={cellStyle}>{data.stu_name}</td>
              <td style={cellStyle}>{data.statusn}</td>
              <td style={cellStyle}>{formatDate(data.thatdate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VanAttendanceDetails;

