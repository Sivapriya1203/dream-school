import React, { useState } from 'react';
import axios from 'axios';
import { Button, ButtonBase } from '@mui/material';
import config from '../../config';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function StaffAttendance() {
  const staff_id = sessionStorage.getItem('staff_id');
  const { enqueueSnackbar } = useSnackbar();
  const handleAttendance = async (statusn) => {
    try {
      const currentDate = new Date();
      const formattedTime = formatTime(currentDate);

      const formData = {
        staff_id: staff_id,
        statusn: statusn,
        entrytime: formattedTime,
        thatdate: currentDate.toISOString().split('T')[0] // Get date in YYYY-MM-DD format
      };

      await axios.post(`${config.apiURL}/staffs/staffattenance`, formData);
      alert(`${statusn.charAt(0).toUpperCase() + statusn.slice(1)} recorded successfully at ${formattedTime}`);
    } catch (error) {
      console.error(`Error recording ${statusn}:`, error);
      enqueueSnackbar(`Failed to record ${statusn}`, { variant: 'error' });
    ;
    }
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Staff Attendance</h1>
      <Button onClick={() => handleAttendance('entry')}>Record Entry</Button>
      <Button onClick={() => handleAttendance('exit')}>Record Exit</Button>
      <Link to={`/stafffeesdetail/${staff_id}`}><Button>details</Button></Link>
    </div>
  );
}

export default StaffAttendance;
