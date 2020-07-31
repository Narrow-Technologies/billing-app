import React, { useState, useEffect } from "react";
import AddLoader from "./addLoader";
import axios from "axios";
import AddVendor from "./addvendor";

const VendorList = () => {
  const [lists, setLists] = useState([]);
  const [open, setOpen] = useState(false);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    setOpen(true);
    await axios.get("http://test.narrowtech.in/api/vendors").then((res) => {
      console.log(res);
      setLists(res.data.data);
      setOpen(false);
    });
  };

  const handleOnDelete = (id) => {
    setOpen(true);
    axios.delete(`http://test.narrowtech.in/api/vendors/${id}`).then((res) => {
      console.log(res);
      // setAdd(true);
      fetching();
    });
  };

  return (
    <div className='VendorList lister'>
      <AddLoader loaders={open} />
      <AddVendor trigger={fetching} />
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
              <td>{list.id}</td>
              <td>{list.name}</td>
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
