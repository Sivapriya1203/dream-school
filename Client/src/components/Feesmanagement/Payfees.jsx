import React, { useEffect, useState } from "react";
import "./payfees.css";
import axios from "axios";
import config from "../../config";
import { useNavigate, useParams } from "react-router";
// import Button from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/base";

function FeeCollectionForm() {
  const { stu_id } = useParams();
  const [payfee, setPayfee] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${config.apiURL}/feeAllocation/payfeestud/${stu_id}`)
      .then((res) => {
        setPayfee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stu_id, config.apiURL]);

  const [formData, setFormData] = useState({
    payingfee: 0,
    feedate: new Date().toISOString().slice(0, 10), // Add date to the state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'payingfee' ? parseFloat(value) : value, // Ensure the payingfee is stored as a number
    }));
  };

  const calculateRemainingFees = (totalFees) => {
    return totalFees - formData.payingfee;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { payingfee, feedate } = formData; // Changed feedate to date

    try {
      for (const data of payfee) {
        const remainingfee = calculateRemainingFees(data.total_fees);

        const formDataToSend = {
          stu_id: data.stu_id,
          stu_name: data.stu_name,
          payingfee,
          remainingfee,
          feedate, // Include date in the form data sent to the backend
        };

        console.log(formDataToSend);
        await axios.post(`${config.apiURL}/feeAllocation/feeslogdata`, formDataToSend);
      }

      alert('Fees data submitted successfully!');

navigate('/')
    } catch (err) {
      console.error('Error saving fees data:', err);
      alert('Failed to submit fees data');
    }
  };

  return (
    <div className="fee-collection">
      <h2>Fee Collection</h2>

      {payfee.map((data) => (
        <form onSubmit={handleSubmit} key={data.stu_id}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={data.stu_name} readOnly />
          </div>
          <div className="form-group">
            <label>Class</label>
            <input type="text" value={data.cls_name} readOnly />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.feedate} // Changed feedate to date
              onChange={handleChange}
            />
          </div>

          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Particulars</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><label>Tution fees</label></td>
                <td><input type="text" value={data.tution_fees} readOnly /></td>
              </tr>
              <tr>
                <td>2</td>
                <td><label>Transport fees</label></td>
                <td><input type="text" value={data.transport_fees} readOnly /></td>
              </tr>
              <tr>
                <td>3</td>
                <td><label>Additional fees</label></td>
                <td><input type="text" value={data.additional_fees} readOnly /></td>
              </tr>
              <tr>
                <td></td>
                <td><label>Paying amount</label></td>
                <td><input type="number" name="payingfee" onChange={handleChange} /></td>
              </tr>
              <tr>
                <td></td>
                <td><label>Remaining Fees</label></td>
                <td><input type="number" value={calculateRemainingFees(data.total_fees)} readOnly /></td>
              </tr>
            </tbody>
          </table>

          <div className="form-group">
            <label>Total</label>
            <input type="text" value={data.total_fees} readOnly />
          </div>

          <button type="submit">Submit</button>
        </form>
      ))}
     <Link to={'/invoice'} > <Button>Print</Button></Link>
    </div>
  );
}

export default FeeCollectionForm;
