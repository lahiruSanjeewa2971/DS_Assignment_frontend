/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card, Grid, TextField} from '@material-ui/core'
import Button from "@material-ui/core/Button";

export default function SearchComponent() {
  const [postdata, setpostdata] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

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
            
            </Grid>
            
          </div>
      )
  })

  useEffect(()=>{

    setFilteredItems(
      postdata.filter((item) =>{
        return item.servicename.toLowerCase().includes(search.toLowerCase())
      })
    );

  }, [search, postdata])


/*  useEffect(() => {
    setFilteredItems(
      postdata.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, postdata]);*/

  /*const filteredItems = postdata.filter(item=>{
    return item.servicename.toLowerCase().includes(search.toLowerCase())
  })*/

  return(
      <div>

        <TextField
            variant={"outlined"}
          type="text"
          placeholder="Search Items"
          onChange={e=> setSearch(e.target.value)}
        />
        {filteredItems.map((country, idx) => (
            <Grid item xs={12} sm={4}>
                <CountryDetail key={idx} {...country} />
            </Grid>

        ))}

          <Grid container spacing={2}  style={{paddingLeft:'10%'}}>
            {serviceList}
          </Grid>
      </div>
  )
}
const CountryDetail = (props) => {
  const { servicename, imgurl, price } = props;

  return (
    <>
        <Grid container spacing={2}  style={{paddingLeft:'7px', paddingTop:'30px', paddingBottom:'30px'}}>
            <Card >
                <p><h5>{servicename}</h5></p>
                <p>{price}</p>
                <img
                    style={{
                        width: "250px",
                        height: "180px",
                    }}
                    src={imgurl}
                    alt=""
                />
                <br/>
                <Button href='/login' size="small">Buy item</Button>

            </Card>
        </Grid>

    </>
  );
};
