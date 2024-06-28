import axios from 'axios';
import config from '../../config';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSnackbar } from 'notistack';

function Staffdetail() {
  const [detail, setDetails] = useState([]);
  const { staff_id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    axios.get(`${config.apiURL}/staffs/getattenancedetails/${staff_id}`)
      .then((res) => {
        setDetails(res.data); // Use res.data to set the details
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err, { variant: 'error' });
      });
  }, [staff_id]);

  return (
    <div>
      <h1>Staff Detail</h1>
      <table>
        <thead>
          <tr>
            <th>s.no</th>
            <th>status</th>
            <th>time</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {detail.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.statusn}</td>
              <td>{data.entrytime}</td>
              <td>{data.thatdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Staffdetail;
