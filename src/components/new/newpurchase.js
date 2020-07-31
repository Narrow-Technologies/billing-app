import React, { useState, useEffect } from "react";
import AddLoader from "../add/addLoader";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

const NewPurchase = () => {
  const [lists, setLists] = useState([]);
  const [selector, setSelector] = useState([]);
  const [single, setSingle] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchingVendor();
  }, []);
  const fetchingVendor = async () => {
    setOpen(true);
    await axios.get("http://test.narrowtech.in/api/vendors").then((res) => {
      console.log(res);
      setLists(res.data.data);
      setSelector(res.data.data[0].id);
      setOpen(false);
    });
  };
  useEffect(() => {
    fetchingProducts();
  }, []);
  const fetchingProducts = async () => {
    setOpen(true);
    await axios.get("http://test.narrowtech.in/api/products").then((res) => {
      console.log(res);
      setProducts(res.data.data);
      setOpen(false);
    });
  };
  useEffect(() => {
    setSingle(lists.find((vendor) => vendor.id == selector));
  }, [selector]);
  const changer = (e) => {
    console.log(e.target.value);
    setSelector(e.target.value);
  };
  // console.log("here", single);
  // console.log(lists);

  const [product, setProduct] = useState("");
  const [addProducts, setAddProducts] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState("Nil");
  const [salesTax, setSalesTax] = useState(0);
  const [lineTotal, setLineTotal] = useState("");
  const [lineTotals, setLineTotals] = useState([]);
  const [totalAmount, setTotal] = useState(0);
  const [paid, setPaid] = useState(0);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (product != "") {
      console.log(product);
      const myProduct = products.find((item) => item.name === product);
      if (myProduct) {
        console.log(myProduct);
        setPrice(myProduct.price);
        setTax(myProduct.tax);
      } else setPrice(0);
    }
  }, [product]);

  useEffect(() => {
    console.log(price * quantity);
    setLineTotal(price * quantity);
  }, [price, quantity]);
  useEffect(() => {
    const totalAmount = lineTotals.reduce(
      (sum, lineTotal) => sum + lineTotal,
      0
    );
    setTotal(totalAmount);
  }, [lineTotals]);

  const productAdder = (e) => {
    e.preventDefault();
    const productObj = { ...products.find((item) => item.name === product) };
    console.log(lineTotal);
    productObj.lineTotal = lineTotal;
    productObj.quantity = quantity;
    console.log(productObj);
    setSalesTax(
      Number(
        (
          salesTax +
          ((productObj.tax * productObj.price) / 100) * quantity
        ).toFixed(2)
      )
    );
    setAddProducts([...addProducts, { ...productObj }]);
    setLineTotals([...lineTotals, lineTotal]);
    setLineTotal(0);
    setProduct("");
    setPrice(0);
    setQuantity(0);
  };

  console.log(addProducts);

  // console.log(lineTotals);
  // console.log(totalAmount);

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
            <select
              name='invoice'
              id='invoice-select'
              value={selector}
              onChange={changer}
            >
              <option selected disabled className='disable'>
                Company name
              </option>
              {lists.map((list) => (
                <option value={list.id} key={list.id}>
                  {list.name}
                </option>
              ))}
            </select>
          </form>
          {single && (
            <p>
              Street address <br />
              {single.city},{single.statezip}
              <br />
              Phone : {single.phone}
            </p>
          )}
        </div>
      </div>
      <div className='table'>
        <form>
          <table>
            <thead>
              <tr>
                <td>NO</td>
                <td>DESCRIPTION</td>
                <td>QUANTITY</td>
                <td>UNIT PRICE</td>
                <td>SGST</td>
                <td>CGST</td>
                <td>LINE TOTAL</td>
              </tr>
            </thead>
            <tbody>
              {addProducts.map((add) => (
                <tr>
                  <td></td>
                  <td>{add.name}</td>
                  <td>{add.quantity}</td>
                  <td>{add.price}</td>
                  <td>{add.tax}%</td>
                  <td>{add.tax}%</td>
                  <td id='poper'>{add.lineTotal}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <input
                    type='text'
                    name='add-product'
                    className='fielder'
                    list='product-list'
                    value={product}
                    id='add-product'
                    placeholder='Add Product'
                    onChange={(e) => setProduct(e.target.value)}
                  />
                  <datalist id='product-list'>
                    {products.map((product) => (
                      <option key={product.id}>{product.name}</option>
                    ))}
                  </datalist>
                </td>
                <td>
                  <input
                    type='number'
                    name='add-quantity'
                    value={quantity}
                    className='fielder'
                    id='add-quantity'
                    placeholder='Add Quantity'
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </td>
                <td>
                  <p>{price}</p>
                </td>
                <td>
                  <p>{typeof tax === "string" ? tax : tax + "%"}</p>
                </td>
                <td>
                  <p>{typeof tax === "string" ? tax : tax + "%"}</p>
                </td>
                <td>
                  {/* <div className='fielder-button'>
                    <i className='fa fa-plus-circle'></i>
                    <input type='submit' onClick={productAdder} value='Add' />
                  </div> */}
                  <button onClick={productAdder}>ADD</button>
                </td>
              </tr>
              <tr className='totals'>
                <td colSpan='4'>SUB TOAL</td>
                <td>{totalAmount}</td>
              </tr>
              <tr className='totals'>
                <td colSpan='4'>SALES TAX</td>
                <td>{salesTax}</td>
              </tr>
              <tr className='totals'>
                <td colSpan='4'>TOTAL</td>
                <td>{totalAmount}</td>
              </tr>
              <tr className='totals'>
                <td colSpan='4'>AMOUNT PAID</td>
                <td>
                  <input
                    className='fielder'
                    id='add-quantity'
                    type='text'
                    value={paid}
                    onChange={(e) => setPaid(parseInt(e.target.value))}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className='table-buttons'>
          <input type='button' value='MAIL' />
          <input type='button' value='PRINT' />
        </div>
      </div>
    </div>
  );
};
//setTotal(totalAmount + salesTax);
export default NewPurchase;
