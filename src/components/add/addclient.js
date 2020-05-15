import React, { useState } from "react";
import firebase from "../../firebase";

function AddClient() {
  const db = firebase.firestore();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const addDetail = (e) => {
    e.preventDefault();
    db.collection(`clients`).add({
      firstname,
      lastname,
      address,
      phone,
      email,
    });
    setFirstname("");
    setLastname("");
    setAddress("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className='AddClient adder'>
      <a className='button' href='#popup1'>
        <i className='fa fa-plus-circle'></i> Add Customer
      </a>
      <div id='popup1' className='overlay'>
        <form className='popup' onSubmit={addDetail}>
          <a class='close' href='#'>
            &times;
          </a>
          <div className='left'>
            <div className='row'>
              <label htmlFor='company'>First Name : </label>
              <input
                type='text'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>Last Name : </label>

              <input
                type='text'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
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
            <input className='form-add' type='submit' value='Save' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddClient;
