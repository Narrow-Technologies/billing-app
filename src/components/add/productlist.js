import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import AddProduct from "./addproduct";

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
const ProductList = () => {
  const lists = useLists();
  const handleOnDelete = (id) => {
    firebase.firestore().collection(`products`).doc(id).delete();
  };
  return (
    <div className='ProductList lister'>
      <AddProduct />
      <table className='vendor-table'>
        <thead>
          <tr>
            <td>NO</td>
            <td>PRODUCT NAME</td>
            <td>DATE</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list.id}>
              <td></td>
              <td>{list.product}</td>
              <td>STATUS</td>
              <td>
                <i className='fa fa-edit'></i>
                <i className='fa fa-eye'></i>
                <i
                  className='fa fa-trash action'
                  onClick={() => handleOnDelete(list.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
