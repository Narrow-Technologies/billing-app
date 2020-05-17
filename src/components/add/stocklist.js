import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import AddStock from "./addstock";

function useLists() {
  const [stock, setStock] = useState([]);
  // const [num, setNum] = useState(1);
  useEffect(() => {
    firebase
      .firestore()
      .collection(`stock`)
      .onSnapshot((snapshot) => {
        const stock = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStock(stock);
      });
  }, []);
  return stock;
}
const StockList = () => {
  const lists = useLists();
  const handleOnDelete = (id) => {
    firebase.firestore().collection(`stock`).doc(id).delete();
  };
  return (
    <div className='ProductList lister'>
      <AddStock />
      <table className='vendor-table'>
        <thead>
          <tr>
            <td>NO</td>
            <td>PRODUCT NAME</td>
            <td>PRICE</td>
            <td>QUANTITY</td>
            <td>DATE</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list.id}>
              <td></td>
              <td>{list.sproduct}</td>
              <td>{list.priceper}</td>
              <td>{list.quantity}</td>
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

export default StockList;
