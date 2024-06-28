import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import axios from 'axios';
import config from '../../config';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TeacherProfile from './TeacherProfile';

export default function DashboardDefault() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [staffsCount, setStaffsCount] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetching data for Student Attendance
    axios.get(`${config.apiURL}/dashboard/feePendingStudents`)
      .then((res) => {
        const count = res.data.length;
        setStudentsCount(count);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });

    // Fetching data for Classwise First Mark
    axios.get(`${config.apiURL}/staffs/getStaffs`)
      .then((res) => {
        const count = res.data.length;
        setStaffsCount(count);
      })
      .catch((error) => {
        console.error('Error fetching staff:', error);
      });

    // Fetching data for Bar Chart
    axios.get(`${config.apiURL}/dashboard/chartData`)
      .then((res) => {
        setChartData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching chart data:', error);
      });
  }, []);

  return (
    <Grid container spacing={1} sx={{ backgroundColor: 'lightblue', padding: 1, borderRadius: 2 }}>


      {/* Profile section */}
      <Grid item xs={12} md={6} container justifyContent="center">
        <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <TeacherProfile sx={{ width: '100%', height: '100%' }} />
        </Box>
      </Grid>

      {/* Student Attendance and Classwise First Mark */}
      <Grid item container xs={12} md={6} spacing={2}>
        {/* Student Attendance */}
        <Grid item xs={12} md={6}>
          <AnalyticEcommerce
            title="Student Attendance"
            count={studentsCount}
            extra="35,000"
            color="primary"
            borderColor="primary.main"
            sx={{ backgroundColor: '#e3f2fd', borderColor: 'primary.main', borderWidth: 1, borderStyle: 'solid', borderRadius: 2 }}
          />
        </Grid>

        {/* Classwise First Mark */}
        <Grid item xs={12} md={6}>
          <AnalyticEcommerce
            title="Classwise First Mark"
            count={staffsCount}
            extra="8,900"
            color="secondary"
            borderColor="secondary.main"
            sx={{ backgroundColor: '#fce4ec', borderColor: 'secondary.main', borderWidth: 1, borderStyle: 'solid', borderRadius: 2 }}
          />
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12}>
          <Box sx={{ backgroundColor: '#ffffff', padding: 2, borderRadius: 2 }}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#5550bd" />
                <YAxis stroke="#5550bd" />
                <Tooltip contentStyle={{ backgroundColor: '#5550bd', color: '#fff' }} />
                <Legend />
                <Bar dataKey="value1" fill="#8884d8" />
                <Bar dataKey="value2" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}