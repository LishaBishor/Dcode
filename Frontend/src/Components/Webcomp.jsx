import { Button, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

const Webcomp = () => {
    const[inputs,setInputs]=useState({})
    const inputHandler=(e)=>{
        console.log("onChange");
        setInputs({...inputs,[e.target.name]:e.target.value })
        console.log(inputs)
    }
    const submitHandler=()=>{
     console.log("clicked",inputs)
     axios.post('http://localhost:7000/api/compile',inputs)
     .then((response)=>{
        console.log(response)
        if(response.data.message==="Compiled Successfully"){
            alert(response.data.message)
            var textarea1=document.getElementById('code');
            textarea1.value=textarea1.value+  "Compiled Successfully"

        }
     })
    //  .catch(err=>console.log(err))
    }
  return (
    <div>
 <Typography variant='h3'>Web-based Compiler</Typography>
 <br/><br/>
<div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        
                        <textarea id="code" rows="10" cols="50" placeholder="Enter your code here" name="code" onChange={inputHandler}></textarea>
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='language'
                    //  value={age}
                        label="Language"
                     onChange={inputHandler}
                    >
                        <MenuItem value="solidity">solidity</MenuItem>
                        <MenuItem value="rust">rust</MenuItem>
                        <MenuItem value='motoko'>motoko</MenuItem>
                    </Select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='difficulty'
                        onChange={inputHandler}
                    >
                        <MenuItem value='easy'>Easy</MenuItem>
                        <MenuItem value='medium'>Medium</MenuItem>
                        <MenuItem value='hard'>Hard</MenuItem>
                    </Select>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <Button variant="contained" onClick={submitHandler}>Compile</Button>
                    </div>
                </div>

            </div>
        </div>
       </div>

    </div>
  )
}

export default Webcomp