import React, { useState, useEffect } from "react";
import firebase from "../../firebase";

function useLists() {
  const [taxes, setTaxes] = useState([]);
  // const [num, setNum] = useState(1);
  useEffect(() => {
    firebase
      .firestore()
      .collection(`taxes`)
      .onSnapshot((snapshot) => {
        const taxes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTaxes(taxes);
      });
  }, []);
  return taxes;
}

function AddProduct() {
  const db = firebase.firestore();

  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [tax, setTax] = useState("");

  const addDetail = (e) => {
    e.preventDefault();
    db.collection(`products`).add({
      product,
      price,
      unit,
      tax,
    });
    setProduct("");
    setPrice("");
    setUnit("");
    setTax("");
  };

  const lists = useLists();
  return (
    <div className='AddProduct adder'>
      <a className='button' href='#popup1'>
        <i className='fa fa-plus-circle'></i> Add Product
      </a>
      <div id='popup1' className='overlay'>
        <form className='popup' onSubmit={addDetail}>
          <a class='close' href='#'>
            &times;
          </a>
          <div className='left'>
            <div className='row'>
              <label htmlFor='product'>Product Name : </label>
              <input
                type='text'
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>Price : </label>
              <input
                type='text'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>Unit : </label>
              <input
                type='text'
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>Tax : </label>
              <select value={tax} onChange={(e) => setTax(e.target.value)}>
                <option selected id='disable'>
                  Choose the tax
                </option>
                {lists.map((list) => (
                  <option value={list.tax}>{list.tax}</option>
                ))}
              </select>
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

export default AddProduct;
