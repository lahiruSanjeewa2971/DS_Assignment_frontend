import React, { useState } from "react";
import axios from "axios";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { Button, Grid, Paper } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import Select from 'react-select';

export default function AddService() {

  var itemCategory = [
    {
      value:1,
      label: "Car"
    },
    {
      value:2,
      label: "Bike"
    },
    {
      value:3,
      label: "Smart Phone"
    },
    {
      value:4,
      label: "Watch"
    },
  ];

  const [servicename, setServicename] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [category, setCategory] = useState(itemCategory.label);
  const [price, setPrice] = useState("");
  const [owner, setOwner] = useState("");
  const [location, setLocation] = useState("");

  function setData(e) {
    e.preventDefault();
    const newService = {
      servicename,
      imgurl,
      category,
      price,
      owner,
      location,
      serviceid: uniqid(),
    };

    axios
      .post("http://localhost:8070/service/addnewservice", newService)
      .then(() => {
        alert("Service added");
      })
      .catch((err) => {
        alert(err);
      });

    /*

        axios.post("http://localhost:8070/service/addnewservice", newService).then(() => {
            alert("Service added...!")
        }).catch((err) => {
            alert(err)
        }) */
  }

  return (
    <div style={{ paddingLeft:'20%'}}>
      <h2 className="container" style={{fontFamily:'monospace', color:'#f44336'}}>Add new Item</h2>
      <form>
        <Grid container style={{paddingBottom:'40px'}} spacing={4}>
          <Grid item xs={10}>
            <Paper style={{backgroundColor:'#90caf9', paddingTop:'35px', paddingBottom:'15px'}}>
            <div className="container">
              <input
                type="text"
                className="form-control"
                id="servicename"
                placeholder="Item name"
                onChange={(e) => {
                  setServicename(e.target.value);
                }}
              />
              <br />
            </div>

            <div className="container">
              <input
                type="text"
                className="form-control"
                id="imgurl"
                placeholder="Image url"
                onChange={(e) => {
                  setImgurl(e.target.value);
                }}
              />
              <br />
            </div> 

            <div className="container">
                <Select options={itemCategory} placeholder="Select the category" onChange={(e) => {
                  setCategory(e.label);
                }}/>
            </div>           

            

            <div className="container">
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
              <br />
            </div>

            <div className="container">
              <input
                type="text"
                className="form-control"
                id="owner"
                placeholder="Owner"
                onChange={(e) => {
                  setOwner(e.target.value);
                }}
              />
              <br />
            </div>

            <div className="container">
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <br />
            </div>
            </Paper>
          </Grid>
        </Grid>

        <Button variant="outlined" color="primary" size="large" startIcon={<SaveIcon />} onClick={setData} className="btn btn-outline-primary">
          Add Item
        </Button>
        
        <Link to="/sellers" className="btn btn-outline-primary">
          Selling
        </Link>
      </form>
    </div>
  );
}
