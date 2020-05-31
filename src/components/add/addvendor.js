import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";

function AddVendor() {
  const history = useHistory();
  const db = firebase.firestore();

  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [statezip, setSatezip] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [show, setShow] = useState(false);

  const addDetail = (e) => {
    e.preventDefault();
    db.collection(`vendors`).add({
      company,
      address,
      city,
      state,
      statezip,
      phone,
      email,
    });
    setCompany("");
    setState("");
    setSatezip("");
    setAddress("");
    setCity("");
    setPhone("");
    setEmail("");
    history.push("/components/add/vendorlist");
    setShow(false);
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
          <a class='close' onClick={off}>
            &times;
          </a>
          <div className='left'>
            <div className='row'>
              <label htmlFor='company'>Comapny Name : </label>
              <input
                type='text'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>Address : </label>

              <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>City : </label>
              <input
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>State : </label>
              <input
                type='text'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>State Zip : </label>
              <input
                type='text'
                value={statezip}
                onChange={(e) => setSatezip(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>Phone : </label>
              <input
                type='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>Email : </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='right'>
            <textarea
              name=''
              id=''
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
