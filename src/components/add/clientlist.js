import React, { useState, useEffect } from "react";
import AddLoader from "./addLoader";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import AddSuccess from "./addsuccess";
import axios from "axios";
import AddClient from "./addclient";
// import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import { useHistory } from "react-router-dom";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ClientList = () => {
  // const classes = useStyles();
  const [lists, setLists] = useState([]);
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    setOpen(true);
    await axios.get("http://test.narrowtech.in/api/clients").then((res) => {
      setLists(res.data.data);
      setOpen(false);
    });
  };
  const handleOnDelete = (id) => {
    setOpen(true);
    axios.delete(`http://test.narrowtech.in/api/clients/${id}`).then((res) => {
      console.log(res);
      // setAdd(true);
      fetching();
    });
  };
  return (
    <div className='ClientList lister'>
      <AddLoader loaders={open} />
      {/* <AddSuccess alerter={add} /> */}
      <AddClient trigger={fetching} />
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
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.phone}</td>
              <td>{list.address}</td>
              <td>STATUS</td>
              <td>
                <i className='fa fa-edit'></i>
                <i className='fa fa-eye' onClick={handleClickOpen}></i>
                <i
                  className='fa fa-trash action'
                  onClick={() => handleOnDelete(list.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>
          {"Details view : Under Construction"}
        </DialogTitle>
        <DialogContent>
          {/* <form className='popup'>
            <a className='close' onClick={off}>
              &times;
            </a>
            <div className='left'>
              <form className={classes.root} noValidate autoComplete='off'>
                <TextField
                  id='outlined-basic'
                  label='Full Name'
                  variant='outlined'
                  value={name}
                />
                <TextField
                  id='outlined-basic'
                  label='Address'
                  variant='outlined'
                  value={address}
                />
                <TextField
                  id='outlined-basic'
                  label='Phone'
                  variant='outlined'
                  value={phone}
                />
                <TextField
                  id='outlined-basic'
                  label='Email'
                  variant='outlined'
                  value={email}
                />
                <TextField
                  id='outlined-basic'
                  label='City'
                  variant='outlined'
                  value={city}
                />
                <TextField
                  id='outlined-basic'
                  label='State'
                  variant='outlined'
                  value={state}
                />
                <TextField
                  id='outlined-basic'
                  label='Zip'
                  variant='outlined'
                  value={zip}
                />
              </form>
            </div>
            <div className='right'>
              <textarea
                id='comment'
                value={comments}
                placeholder='Additional Comments'
              ></textarea>
              <input className='form-add' type='submit' value='Save' />
            </div>
          </form> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ClientList;
