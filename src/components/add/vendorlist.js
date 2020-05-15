import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import AddVendor from "./addvendor";

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
const VendorList = () => {
  const lists = useLists();
  const handleOnDelete = (id) => {
    firebase.firestore().collection(`vendors`).doc(id).delete();
  };
  return (
    <div className='VendorList lister'>
      <AddVendor />
      <table className='vendor-table'>
        <thead>
          <tr>
            <td>NO</td>
            <td>COMPANY NAME</td>
            <td>PHONE</td>
            <td>STATE</td>
            <td>STATUS</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => (
            <tr key={list.id}>
              <td></td>
              <td>{list.company}</td>
              <td>{list.phone}</td>
              <td>{list.state}</td>
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

export default VendorList;
