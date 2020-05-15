import React from "react";

function SalesReturn() {
  return (
    <div className='SalesReturn'>
      <div className='details'>
        <div className='credential'>
          <img src='/images/person.png' alt='' />
          <div className='info'>
            <h3>Company Name</h3>
            <p>
              Street address, <br />
              City,State ZIP Code, <br />
              Phone : 1234567890
            </p>
          </div>
        </div>
        <div className='perfomance'>
          <h2>Sales Return</h2>
          <p>
            Date of sales : JUNE 14,2020 <br />
            Date of return : JUNE 14,2020
          </p>
        </div>
      </div>
      <div className='invoice-no'>
        <h3>Invoice no :</h3>
        <div className='selector'>
          <form className='select'>
            <select name='invoice' id='invoice-select'>
              <option selected disabled className='disable'>
                Choose the number
              </option>
              <option value='1'>COS153</option>
              <option value='2'>COS154</option>
              <option value='3'>COS155</option>
              <option value='4'>COS156</option>
            </select>
          </form>
          <p>
            Customer name / company name <br />
            City, State ZIP Code
          </p>
        </div>
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <td>NO</td>
              <td>DESCRIPTION</td>
              <td>QUANTITY</td>
              <td>UNIT PRICE</td>
              <td>LINE TOTAL</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item 1 description </td>
              <td>23</td>
              <td>$ 44.6</td>
              <td>$ 102225</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Item 2 description </td>
              <td>23</td>
              <td>$ 44.6</td>
              <td>$ 102225</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Item 3 description </td>
              <td>23</td>
              <td>$ 44.6</td>
              <td>$ 102225</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Item 4 description </td>
              <td>23</td>
              <td>$ 44.6</td>
              <td>$ 102225</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>-</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>SUB TOAL</td>
              <td>$ 102225.3</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>TAX RATE</td>
              <td>8%</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>SALES TAX</td>
              <td>235</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>SHIPPING CHARGE</td>
              <td>123</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>TOTAL</td>
              <td>$ 182565.3</td>
            </tr>
          </tbody>
        </table>
        <textarea className='reason' placeholder='Return Reason'></textarea>
        <div className='table-buttons'>
          <input type='button' value='MAIL' />
          <input type='button' value='PRINT' />
        </div>
      </div>
    </div>
  );
}

export default SalesReturn;
