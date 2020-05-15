import React from "react";
import "./addstyle.css";
import { Link } from "react-router-dom";

function Add() {
  return (
    <div className='Add'>
      <h4>Add</h4>
      <div className='cards'>
        <Link className='card-link' to='/components/add/vendorlist'>
          <div className='card card-a'>
            <div className='card-contain'>
              <img src='/icons/business.svg' alt='icon' />
              <h3>Add Vendors</h3>
            </div>
          </div>
        </Link>
        <Link className='card-link' to='/components/add/clientlist'>
          <div className='card card-b'>
            <div className='card-contain'>
              <img src='/icons/customer.svg' alt='icon' />
              <h3>Add Clients</h3>
            </div>
          </div>
        </Link>
        <Link className='card-link' to='/components/add/productlist'>
          <div className='card card-c'>
            <div className='card-contain'>
              <img src='/icons/profile.svg' alt='icon' />
              <h3>Add Product</h3>
            </div>
          </div>
        </Link>
        <Link className='card-link' to='/components/add/stocklist'>
          <div className='card card-d'>
            <div className='card-contain'>
              <img src='/icons/profile.svg' alt='icon' />
              <h3>Stocks</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Add;
