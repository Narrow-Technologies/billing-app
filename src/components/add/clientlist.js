import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import AddClient from "./addclient";

function useLists() {
  const [vendors, setVendors] = useState([]);
  // const [num, setNum] = useState(1);
  useEffect(() => {
    firebase
      .firestore()
      .collection(`clients`)
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
const ClientList = () => {
  const lists = useLists();
  const handleOnDelete = (id) => {
    firebase.firestore().collection(`clients`).doc(id).delete();
  };
  return (
    <div className='ClientList lister'>
      <AddClient />
      <table className='vendor-table'>
        <thead>
          <tr>
            <td>NO</td>
            <td>CUSTOMER NAME</td>
            <td>PHONE</td>
            <td>ADDRESS</td>
            <td>STATUS</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list.id}>
              <td></td>
              <td>{list.firstname}</td>
              <td>{list.phone}</td>
              <td>{list.address}</td>
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

export default ClientList;
