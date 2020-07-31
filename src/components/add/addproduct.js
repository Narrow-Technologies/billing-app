import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function AddProduct(props) {
  const classes = useStyles();
  const [add, setAdd] = useState(false);
  const [name, setName] = useState("");
  const [hsn, setHsn] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [tax, setTax] = useState("");
  const [comments, setComments] = useState("");
  const data = { name, hsn, quantity, unit, price, tax, comments };
  const [show, setShow] = useState(false);

  const addDetail = (e) => {
    console.log(data);
    axios.post("http://test.narrowtech.in/api/products", data).then((res) => {
      console.log(res);
      if (res.data.error == false) {
        props.trigger();
        e.preventDefault();
        setShow(false);
      } else {
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
    <div className='AddProduct adder'>
      <a className='button' onClick={on}>
        <i className='fa fa-plus-circle'></i> Add Product
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
                label='Product Name'
                variant='outlined'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='Price'
                variant='outlined'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='Quantity'
                variant='outlined'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='Unit'
                variant='outlined'
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='Tax'
                variant='outlined'
                value={tax}
                onChange={(e) => setTax(e.target.value)}
              />
              <TextField
                id='outlined-basic'
                label='HSN'
                variant='outlined'
                value={hsn}
                onChange={(e) => setHsn(e.target.value)}
              />
            </form>
          </div>
          <div className='right'>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              name=''
              id='comment'
              placeholder='Additional Comments'
            ></textarea>
            <input className='form-add' type='submit' value='Save' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
