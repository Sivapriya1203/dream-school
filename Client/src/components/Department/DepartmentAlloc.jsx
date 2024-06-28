import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, FormControl, Grid, Select, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import UpdateDepartment from './UpdateDepartment';
import config from '../../config';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';
function DepartmentAlloc() {
    const [deptData, setDeptData] = useState([]);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [dlt, setDlt] = useState(false);
    const [updateData, setUpdateData] = useState();
  const [dataPerPage, setDataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedVal, setSearchedVal] = useState('');
  const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        Axios.get(`${config.apiURL}/department/getDept`)
            .then((res) => {
                setDeptData(res.data);
            })
            .catch((err) => {
                console.log('Error:', err);
                enqueueSnackbar(err, { variant: 'error' });
            });
    }, [openUpdate, dlt]);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const handleUpdate = (id) => {
        const selectData = deptData.find((dept) => dept.dept_id === id);
        if (selectData) {
            setUpdateData(selectData);
            setOpenUpdate(true);
           
        }
       
    };


    const handleChangeDataPerPage = (e) => {
        const newDataPerPage = parseInt(e.target.value, 10);
        setDataPerPage(newDataPerPage);
        setCurrentPage(1);
      };
    
      const handlePageChange = (event, value) => {
        setCurrentPage(value);
      };
    
      const search = (item) => {
        const searchValue = searchedVal.toLowerCase();
        return Object.values(item).some(
          (value) => value && value.toString().toLowerCase().includes(searchValue)
        );
      };
    
      const firstIndexOfData = (currentPage - 1) * dataPerPage;
      const lastIndexOfData = currentPage * dataPerPage;
      const currentData = deptData.slice(firstIndexOfData, lastIndexOfData);
    

   
    const handleDelete = (e,id) => {
        e.preventDefault()
        Axios.delete(`${config.apiURL}/department/deleteDept/${id}`)
            .then((res) => {
                console.log("Deleted successfully :", res.data);
                setDlt(true);
                enqueueSnackbar('Data Deleted sucessfully', { variant: 'success' });
            })
            .catch((err) => {
                console.log('Error deleting student:', err);
               
                enqueueSnackbar('Failed to delete student. Please try again later.', { variant: 'error' });
            });
    };
    
    
    return (
        <div>
            <h3 className='text-center'>DEPARTMENT ALLOCATION</h3>
            
            <Grid container spacing={3}>
        <Grid item xs={4}>
        <Link to='/addDept'><Button variant="contained" startIcon={<AddIcon/>} color="primary"> Add </Button></Link>
        </Grid>
        <Grid item xs={4}>
          <TextField label="Search" onChange={(e) => setSearchedVal(e.target.value)} value={searchedVal} />
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <Select value={dataPerPage} onChange={handleChangeDataPerPage}>
              <option value={5}>5 Per Page</option>
              <option value={10}>10 Per Page</option>
              <option value={15}>15 Per Page</option>
              <option value={20}>20 Per Page</option>
              <option value={0}>All Per Page</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

            <TableContainer component={Paper} className='mt-3'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Serial no</StyledTableCell>
                            <StyledTableCell align="right">Department</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentData.filter(search).map((row) => (
                            <StyledTableRow key={row.dept_id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.dept_id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.dept_name}</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Button variant="contained" color="info" startIcon={<EditIcon/>} onClick={() => handleUpdate(row.dept_id)}>Edit</Button>
                                    <Button variant="contained" color="error"startIcon={<DeleteIcon/>} onClick={(e) => handleDelete(e,row.dept_id)}>Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container spacing={1} display='flex' justifyContent='center' className='mt-3'>
      <Stack spacing={2}>
        <Pagination count={Math.ceil(deptData.length / dataPerPage)} page={currentPage} onChange={handlePageChange} variant="outlined" />
      </Stack>
      </Grid>

            <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)}>
                <DialogContent>
                    <UpdateDepartment data={updateData} onClose={() => setOpenUpdate(false)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenUpdate(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DepartmentAlloc;
