import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Sale() {
  return (
    <div className='Sale'>
      <h4>Sales</h4>
      <div className='cards'>
        <Link className='card-link' to='/components/history'>
          <div className='card card-a'>
            <div className='card-contain'>
              <img className='img-a' src='/icons/business.svg' alt='icon' />
              <h5>Sales</h5>
              <h1>
                To <br /> BUSINESS
              </h1>
            </div>
          </div>
        </Link>
        <Link className='card-link' to='/components/history'>
          <div className='card card-b'>
            <div className='card-contain'>
              <img className='img-b' src='/icons/customer.svg' alt='icon' />
              <h5>Sales</h5>
              <h1>
                To <br /> CUSTOMER
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sale;
