import React, { useState, useEffect } from "react";
import AddLoader from "./addLoader";
import axios from "axios";
import AddProduct from "./addproduct";

const ProductList = () => {
  const [lists, setLists] = useState([]);
  const [open, setOpen] = useState(false);
  //5 12 18
  useEffect(() => {
    fetching();
  }, []);
  const fetching = async () => {
    setOpen(true);
    await axios.get("http://test.narrowtech.in/api/products").then((res) => {
      setLists(res.data.data);
      setOpen(false);
    });
  };
  const handleOnDelete = (id) => {
    setOpen(true);
    axios.delete(`http://test.narrowtech.in/api/products/${id}`).then((res) => {
      console.log(res);
      // setAdd(true);
      fetching();
    });
  };
  return (
    <div className='ProductList lister'>
      <AddLoader loaders={open} />
      <AddProduct trigger={fetching} />
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
              <td>{list.id}</td>
              <td>{list.name}</td>
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
