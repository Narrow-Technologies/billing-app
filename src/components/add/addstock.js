import React, { useState, useEffect } from "react";
import firebase from "../../firebase";

function useLists() {
  const [products, setProducts] = useState([]);
  // const [num, setNum] = useState(1);
  useEffect(() => {
    firebase
      .firestore()
      .collection(`products`)
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      });
  }, []);
  return products;
}
function AddStock() {
  const db = firebase.firestore();

  const [sproduct, setSproduct] = useState("");
  const [priceper, setPriceper] = useState("");
  const [quantity, setQuantity] = useState("");

  const addDetail = (e) => {
    e.preventDefault();
    db.collection(`stock`).add({
      sproduct,
      priceper,
      quantity,
    });
    setSproduct("");
    setPriceper("");
    setQuantity("");
  };
  const lists = useLists();
  return (
    <div className='AddProduct adder'>
      <a className='button' href='#popup1'>
        <i className='fa fa-plus-circle'></i> Add Stock
      </a>
      <div id='popup1' className='overlay'>
        <form className='popup' onSubmit={addDetail}>
          <a class='close' href='#'>
            &times;
          </a>
          <div className='left'>
            <div className='row'>
              <label htmlFor='product'>Select Product : </label>
              <select
                name=''
                id=''
                value={sproduct}
                onChange={(e) => setSproduct(e.target.value)}
              >
                <option selected id='disable'>
                  Choose the product
                </option>
                {lists.map((list) => (
                  <option value={list.product}>{list.product}</option>
                ))}
              </select>
            </div>
            <div className='row'>
              <label htmlFor='company'>Price per product : </label>
              <input
                type='text'
                value={priceper}
                onChange={(e) => setPriceper(e.target.value)}
              />
            </div>
            <div className='row'>
              <label htmlFor='company'>Quantity : </label>
              <input
                type='text'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
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

export default AddStock;
