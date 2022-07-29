import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import {
    ButtonBase,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
const Form = ({ title, setShowForm, getData, value, isEdit=false }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      commonName,
      scientificName,
      family,
      order,
      spottedAt,
      spottedLocation,
    };
    axios({
        method: isEdit?"patch":"post",
        url: isEdit?`http://localhost:9000/birds/${value._id}`:`http://localhost:9000/birds`,
        data: data,
        headers: {"Content-Type": "application/json"}
    }).then((res) => {
        console.log(res)
        getData()
        setShowForm(false)
    }).catch((err) => {
        console.log(err)
        getData()
        setShowForm(false)
    })
  };
  const [commonName, setCommonName] = useState(value?.commonName || "");
  const [scientificName, setScientificName] = useState(value?.scientificName || "");

  const [family, setFamily] = useState(value?.family || "");

  const [order, setOrder] = useState(value?.order || "");

  const [spottedAt, setSpottedAt] = useState(value?.spottedAt || "");

  const [spottedLocation, setSpottedLocation] = useState(value?.spottedLocation || "");

  return (
    <div className= "form">
      <Dialog open={true}>
        <DialogTitle> {title}</DialogTitle>
        <DialogContent className="form_box">
          <form onSubmit={handleSubmit}>
            <label>
              Common Name:
              <input
                type="text"
                name="commonName"
                value={commonName}
                onChange={(event) => {
                  setCommonName(event.target.value);
                }}
              />
            </label>
            <label>
              Scientific Name:
              <input
                type="text"
                name="scientificName"
                value={scientificName}
                onChange={(event) => {
                  setScientificName(event.target.value);
                }}
              />
            </label>
            <label>
              Family:
              <input
                type="text"
                name="family"
                value={family}
                onChange={(event) => {
                  setFamily(event.target.value);
                }}
              />
            </label>
            <label>
              Order:
              <input
                type="text"
                name="order"
                value={order}
                onChange={(event) => {
                  setOrder(event.target.value);
                }}
              />
            </label>
            <label>
              Spotted At:
              <input
                type="text"
                name="spottedAt"
                value={spottedAt}
                onChange={(event) => {
                  setSpottedAt(event.target.value);
                }}
              />
            </label>
            <label>
              Spotted Location:
              <input
                type="text"
                name="spottedLocation"
                value={spottedLocation}
                onChange={(event) => {
                  setSpottedLocation(event.target.value);
                }}
              />
            </label>

            <input type="submit" value="Submit" />
          </form>
           <button className="form_button" onClick={()=>{setShowForm(false)}}>cancel</button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Form;
