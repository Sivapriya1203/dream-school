import { Box, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import config from '../../config'
import { useSnackbar } from 'notistack';
function Feesallocstudent() {
  const [classes, setClasses] = useState([]); // Initialize with an empty array
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios.get(`${config.apiURL}/clsAndSec/getclass`)
      .then((res) => {
        setClasses(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("classes err :",err);
        enqueueSnackbar(err, { variant: 'error' });
      });
  }, []); // Add dependency array to run the effect only once

  return (
    <Grid container spacing={2}>
      {classes.map((cls) => (
        <Grid item xs={12} sm={6} md={4} key={cls.cls_id}>
        <Link to={`/feespage/${cls.cls_id}`}> <Box>{cls.cls_name}</Box> </Link> 
        </Grid>
      ))}
    </Grid>
  );
}


export default Feesallocstudent
