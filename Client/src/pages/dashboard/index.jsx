import { useEffect, useState } from 'react';
import { Grid, Typography, Box, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import config from '../../config';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import MainCard from 'components/MainCard';
import MonthlyBarChart from './MonthlyBarChart';
import UniqueVisitorCard from './UniqueVisitorCard';
import { Link } from 'react-router-dom';
import { PiStudent } from "react-icons/pi";
import { useSnackbar } from 'notistack';
import Button from '@mui/material/Button';

import { IoPeopleSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
export default function DashboardDefault() {
  const { enqueueSnackbar } = useSnackbar();
  const [studentsCount, setStudentsCount] = useState(0);
  const [staffsCount, setStaffsCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState();
  const [selectedYear,setSelectedYear] = useState('2024-2025')
  const [siblingCount,setSiblingCount] = useState();
 const [studentPresent, setStudentPresent] = useState()
 const [staffPresent,setStaffPresent]=  useState()
 const staffPng = 
  useEffect(() => {
    axios.get(`${config.apiURL}/dashboard/feePendingStudents`)
      .then((res) => {
        const count = res.data.length;
        setStudentsCount(count);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
       
      });

      

    axios.get(`${config.apiURL}/staffs/getStaffs`)
      .then((res) => {
        const count = res.data.length;
        setStaffsCount(count);
      })
      .catch((error) => {
        console.error('Error fetching staff:', error);

      });
  }, []);
 

  useEffect(()=>{
    axios.get(`${config.apiURL}/dashboard/totalPaidAmount/${selectedYear}`)
      .then((res) => {
        setTotalRevenue(res.data);
      })
      .catch((error) => {
        console.error('Error fetching staff:', error);
 
      });
  },[])

  useEffect(()=>{
    axios.get(`${config.apiURL}/students/getSiblings`)
      .then((res) => {
        setSiblingCount(res.data);
        console.log("Sibling :",siblingCount)
      })
      .catch((error) => {
        console.error('Error fetching staff:', error);
   
      });
  },[])

  //student present
  useEffect(()=>{
    axios.get(`${config.apiURL}`)
    .then((res)=>{
      setStudentPresent(res.data)

    })
    .catch((error)=>{
      console.error('Error fetching staff:', error);
   
    })
  },[])


  //staffPresent
  useEffect(()=>{
    axios.get(`${config.apiURL}`)
    .then((res)=>{
      setStaffPresent(res.data)

    })
    .catch((error)=>{
      console.error('Error fetching staff:', error);

    })
  },[])
  useEffect(()=>{
    axios.get(`${config.apiURL}`)
    .then((res)=>{
      setStudentPresent(res.data)

    })
    .catch((error)=>{
      console.error('Error fetching staff:', error);
  
    })
  },[])
  useEffect(()=>{
    axios.get(`${config.apiURL}`)
    .then((res)=>{
      setStudentPresent(res.data)

    })
    .catch((error)=>{
      console.error('Error fetching staff:', error);
  
    })
  },[])

const handleFeesClick= ()=>{

  <Link to='/feePendingStu'>
        <AnalyticEcommerce title="Total Pending Students" count={studentsCount} extra="35,000" />
        </Link>

}
const handleTotalStudentClick =()=>{

}
const handleTotalStaffClick = ()=>{

}
const handleRevenueClick = ()=>{
  <Link to='/sibStu'>
  <AnalyticEcommerce title="Total profit" count={siblingCount ? `${siblingCount.siblingsCount}` : "Loading..."}  isLoss color="warning"  />
  </Link>
}
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} style={{backgroundColor:"#F6F7FB"}}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5" >Dashboard</Typography>
      </Grid>


      <Grid item xs={12} sm={6} md={4} lg={3}>
  <div
    variant="contained"
    style={{
      backgroundColor: "#5251AC",
      fontWeight: "bold",
      height: "130px",
      width: "250px",
      borderRadius: "15px",
      padding: "10px",
    }}
  >
    <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px",  }}
    onClick={handleFeesClick} className='hover'>
        <Link to='/feePendingStu' style={{color:'white',textDecoration:"none"}} className='hover'>
        Total Fees Pending Students
        </Link>
  
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <PiStudent style={{ height: "40px", width: "50px", color: "white" }} />
      <h2 style={{ marginLeft: "auto", color: "white", height:"20px", width:"30px" }}>{studentsCount}</h2>
    </div>
  </div>
</Grid>
   
<Grid item xs={12} sm={6} md={4} lg={3}>
  <div
    variant="contained"
    style={{
      backgroundColor: "#6789F5",
      fontWeight: "bold",
      height: "130px",
      width: "250px",
      borderRadius: "15px",
      padding: "10px",
    }}
  >
    <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}} 
    onClick={handleTotalStudentClick} className='hover'>
         <Link to='/allstaffs' style={{color:"white",textDecoration:"none"}}>
         Total Students   </Link>
  
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <PiStudent style={{ height: "40px", width: "50px", color: "white" }} />
      <h2 style={{ marginLeft: "auto", color: "white", height:"20px", width:"30px" }}>{studentsCount}</h2>
    </div>
  </div>
</Grid>




<Grid item xs={12} sm={6} md={4} lg={3}>
  <div
    variant="contained"
    style={{
      backgroundColor: "#9EA0D8",
      fontWeight: "bold",
      height: "130px",
      width: "250px",
      borderRadius: "15px",
      padding: "10px",
    }}
  >
    <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}
    onClick={handleTotalStaffClick}
    className='hover'
    >
       <Link to='/allstaffs' style={{color:"white",textDecoration:"none"}}> Total staffs
      </Link>
  
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
    
      <IoPeopleSharp  style={{ height: "40px", width: "50px", color: "white" }} />
      <h2 style={{ marginLeft: "auto", color: "white", height:"20px", width:"30px" }}>{staffsCount}</h2>
    </div>
  </div>
</Grid>


     

     
<Grid item xs={12} sm={6} md={4} lg={3}>
  <div
    variant="contained"
    style={{
      backgroundColor: "#FA8892",
      fontWeight: "bold",
      height: "130px",
      width: "250px",
      borderRadius: "15px",
      padding: "10px",
    }}
  >
    <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}
    className='hover' onClick={handleRevenueClick}>
   <Link to='/sibStu' style={{color:"white",textDecoration:"none"}}> 
   Total revenue 
   </Link> 
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      <RiMoneyRupeeCircleFill style={{ height: "40px", width: "50px", color: "white" }} />
      <h2 style={{ marginLeft: "auto", color: "white", height:"20px", width:"30px" }}>{totalRevenue ? `${totalRevenue.total_paid_amount}` : "Loading..."}</h2>
    </div>
  </div>
</Grid>
      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8} >
        <UniqueVisitorCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="text.secondary">
                This Week Statistics
              </Typography>
             
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      {/* bottom 1 */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
  <div
    variant="contained"
    style={{
      backgroundColor: "#5251AC",
      fontWeight: "bold",
      height: "130px",
      maxWidth: "1050px",
      borderRadius: "15px",
      padding: "20px",
      marginLeft:"10px",
      marginRight:"10px"
    }}
  >
    <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}>
      Total Students Present today
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      
      <h1 style={{ margin:"auto", color: "white", height:"20px", fontWeight:"bol", width:"30px" }}>{studentsCount}</h1>
    </div>
  </div>
</Grid>



{/* bottom 2 */}
<Grid item xs={12} sm={12} md={12} lg={12}>
  <div
    variant="contained"
    style={{
      backgroundColor: "#6789F5",
      fontWeight: "bold",
      height: "130px",
      maxWidth: "1050px",
      borderRadius: "15px",
      padding: "20px",
      marginLeft:"10px",
      marginRight:"10px"
    }}
  >
    <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}>
      Total Staffs present today
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      
      <h1 style={{ margin:"auto", color: "white", height:"20px", fontWeight:"bol", width:"30px" }}>{studentsCount}</h1>
    </div>
  </div>
</Grid>


{/* bottom 3 */}


<Grid item xs={12} sm={12} md={12} lg={12}>
  <div
    variant="contained"
    style={{
      backgroundColor: "#FA8892",
      fontWeight: "bold",
      height: "130px",
      maxWidth: "1050px",
      borderRadius: "15px",
      padding: "20px",
      marginLeft:"10px",
      marginRight:"10px"
    }}
  >
    <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}>
      Marks
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      
      <h1 style={{ margin:"auto", color: "white", height:"20px", fontWeight:"bol", width:"30px" }}>{studentsCount}</h1>
    </div>
  </div>
</Grid>

{/* bottom 4  */}

<Grid item xs={12} sm={12} md={12} lg={12}>
  <div
    variant="contained"
    style={{
      backgroundColor: "#9EA0D8",
      fontWeight: "bold",
      height: "130px",
      maxWidth: "1050px",
      borderRadius: "15px",
      padding: "20px",
      marginLeft:"10px",
      marginRight:"10px"
    }}
  >
    <span style={{ color: "white", display: "block", marginBottom: "10px", marginTop:"10px"}}>
      Total student's sibilings
    </span>
    <div style={{ display: "flex", alignItems: "center" }}>
      
      <h1 style={{ margin:"auto", color: "white", height:"20px", fontWeight:"bol", width:"30px" }}>{studentsCount}</h1>
    </div>
  </div>
</Grid>

     

    </Grid>
  );
}
