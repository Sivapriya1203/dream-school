import { Button } from '@mui/base'
import React from 'react'
import { Link } from 'react-router-dom'

function Allfeesalloc() {
  return (
    <div>
     <Link to={'/feesallocationmanu'}> <Button>class</Button></Link>
     <Link to={'/feesstudent'}> <Button>students</Button></Link>
    </div>
  )
}

export default Allfeesalloc
