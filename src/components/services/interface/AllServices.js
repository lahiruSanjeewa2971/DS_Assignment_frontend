/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleService_ from "./SingleService_";
import { Grid } from '@material-ui/core';

export default function AllServicess() {
  const [postdata, setpostdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8070/service/").then((res) => {
        console.log(res.data);
        setpostdata(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const serviceList = postdata.map(post => {
      return(
          <div className="row justify-content-center" style={{padding:'30px 30px 30px 30px'}}>
            <Grid item xs={12} sm={4}>
              <SingleService_ post={post} />  
            </Grid>
            
          </div>
      )
  })

  return(
      <div>
          <Grid container spacing={2}  style={{paddingLeft:'10%'}}>
            {serviceList}
          </Grid>
      </div>
  )
}
