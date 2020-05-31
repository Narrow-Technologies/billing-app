import React, { useState, useEffect } from "react";
import firebase from "../../../firebase";

function useLists() {
  const [vendors, setVendors] = useState([]);
  // const [num, setNum] = useState(1);
  useEffect(() => {
    firebase
      .firestore()
      .collection(`vendors`)
      .onSnapshot((snapshot) => {
        const vendors = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVendors(vendors);
      });
  }, []);
  return vendors;
}

const Business = () => {
  const lists = useLists();
  const [selector, setSelector] = useState([]);
  const [items, setItems] = useState([]);
  const [lols, setLols] = useState([]);

  // console.log(lists);
  useEffect(() => {
    if (selector != 0) {
      firebase
        .firestore()
        .collection("vendors")
        .doc(selector)
        .get()
        .then(function (doc) {
          const items = [];
          items.push({ ...doc.data(), id: doc.id });
          setItems(items);
        });
    }
  }, [selector]);

  useEffect(() => {
    if (selector != 0) {
      firebase
        .firestore()
        .collection("sales")
        .onSnapshot((snapshot) => {
          const lols = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setLols(lols);
        });
    }
  }, [selector]);
  // const product = useproduct();
  const db = firebase.firestore();
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [lineTotal, setLineTotal] = useState("");
  const [lineTotals, setLineTotals] = useState([]);
  const [totalAmount, setTotal] = useState("");
  const finalAmount = totalAmount + (235 + 123);

  useEffect(() => {
    setLineTotal(price * quantity);
  }, [price, quantity]);
  useEffect(() => {
    let totalAmount = 0;
    lineTotals.forEach((value) => {
      totalAmount += Number(value);
      setTotal(totalAmount);
    });
  }, [lineTotals]);

  const addProduct = (e) => {
    e.preventDefault();
    db.collection("sales").add({
      product,
      quantity,
      price,
    });
    setProduct("");
    setQuantity("");
    setPrice("");
    setLineTotals((lineTotals) => [...lineTotals, lineTotal]);
  };
  console.log(lineTotals);
  console.log(totalAmount);
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
          <h2>New Sales</h2>
          <p>Date of sales : JUNE 14,2020</p>
        </div>
      </div>
      <div className='invoice-no'>
        <h3>Bill to :</h3>
        <div className='selector'>
          <form className='select'>
            <select
              name='invoice'
              id='invoice-select'
              onChange={(e) => setSelector(e.target.value)}
            >
              <option selected disabled className='disable'>
                Company name
              </option>
              {lists.map((list) => (
                <option value={list.id} key={list.id}>
                  {list.company}
                </option>
              ))}
            </select>
          </form>
          {items.map((item) => (
            <p>
              Street address <br />
              {item.city},{item.statezip}
              <br />
              Phone : {item.phone}
            </p>
          ))}
        </div>
      </div>
      <div className='table'>
        <form onSubmit={addProduct}>
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
              {lols.map((lol) => (
                <tr>
                  <td></td>
                  <td>{lol.product}</td>
                  <td>{lol.quantity}</td>
                  <td>{lol.price}</td>
                  <td id='poper'>{lol.quantity * lol.price}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <input
                    type='text'
                    name='add-product'
                    className='fielder'
                    id='add-product'
                    placeholder='Add Product'
                    onChange={(e) => setProduct(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='number'
                    name='add-quantity'
                    className='fielder'
                    id='add-quantity'
                    placeholder='Add Quantity'
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type='price'
                    name='add-price'
                    className='fielder'
                    id='add-price'
                    placeholder='Add Unit Price'
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                  />
                </td>
                <td>
                  <div className='fielder-button'>
                    <i className='fa fa-plus-circle'></i>
                    <input type='submit' value='Add' />
                  </div>
                </td>
              </tr>
              <tr className='totals'>
                <td colSpan='4'>SUB TOAL</td>
                <td>{totalAmount}</td>
              </tr>
              <tr className='totals'>
                <td colSpan='4'>TAX RATE</td>
                <td>8%</td>
              </tr>
              <tr className='totals'>
                <td colSpan='4'>SALES TAX</td>
                <td>235</td>
              </tr>
              <tr className='totals'>
                <td colSpan='4'>SHIPPING CHARGE</td>
                <td>123</td>
              </tr>
              <tr className='totals'>
                <td colSpan='4'>TOTAL</td>
                <td>{finalAmount}</td>
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

export default Business;
