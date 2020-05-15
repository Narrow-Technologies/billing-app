import React from "react";

const NewPurchase = () => {
  return (
    <div className='NewPurchase'>
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
          <h2>New Purchase</h2>
          <p>Date of sales : JUNE 14,2020</p>
        </div>
      </div>
      <div className='invoice-no'>
        <h3>Bill from :</h3>
        <div className='selector'>
          <form className='select'>
            <select name='invoice' id='invoice-select'>
              <option selected disabled className='disable'>
                Company name
              </option>
              <option value='1'>Company name one</option>
              <option value='2'>Company name two</option>
              <option value='3'>Company name three</option>
              <option value='4'>Company name four</option>
            </select>
          </form>
          <p>
            Street address, <br />
            City,State ZIP Code, <br />
            Phone : 1234567890
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
              <td>
                {" "}
                <input
                  type='text'
                  name='add-product'
                  id='add-product'
                  placeholder='Add Product'
                />{" "}
              </td>
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
        <div className='table-buttons'>
          <input type='button' value='MAIL' />
          <input type='button' value='PRINT' />
        </div>
      </div>
    </div>
  );
};

export default NewPurchase;
