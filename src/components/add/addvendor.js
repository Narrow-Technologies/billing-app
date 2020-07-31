import React, { useState } from "react";
import axios from "axios";
import AddSuccess from "./addsuccess";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function AddVendor(props) {
  const classes = useStyles();
  const [add, setAdd] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [comments, setComments] = useState("");
  const data = { name, address, phone, email, city, state, zip, comments };
  const [show, setShow] = useState(false);

  const addDetail = (e) => {
    console.log(data);
    axios.post("http://test.narrowtech.in/api/vendors", data).then((res) => {
      console.log(res);
      if (res.data.error == false) {
        props.trigger();
        e.preventDefault();
        setShow(false);
      } else {
        setAdd(false);
        console.log("ohoooo errorrrr");
      }
    });
  };

  const on = () => {
    setShow(true);
  };
  const off = () => {
    setShow(false);
  };

  return (
    <div className='AddVendor adder'>
      <a className='button' onClick={on}>
        <i className='fa fa-plus-circle'></i> Add Vendor
      </a>
      <div id='popup1' className={show ? "overlay-show" : "overlay"}>
        <form className='popup' onSubmit={addDetail}>
          <a className='close' onClick={off}>
            &times;
          </a>
          <div className='left'>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                id='outlined-basic'
                label='Company Name'
                variant='outlined'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='Address'
                variant='outlined'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='Phone'
                variant='outlined'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='Email'
                variant='outlined'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='City'
                variant='outlined'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='State'
                variant='outlined'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='Zip'
                variant='outlined'
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </form>
          </div>
          <div className='right'>
            <textarea
              id='comment'
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder='Additional Comments'
            ></textarea>
            <input className='form-add' type='submit' value='Save' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddVendor;
