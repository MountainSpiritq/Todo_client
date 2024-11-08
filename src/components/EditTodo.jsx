import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { updateTodo } from '../utils';

export default function EditTodo({open,setOpen,task,id}) {
  
const queryClient=useQueryClient()
 const[updatedTask,setUpdatedTask]=useState(task)
  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate=async ()=>{
   await updateTodo(id,{task:updatedTask})
   queryClient.invalidateQueries('todos')
   handleClose()
  }

  return (
    <React.Fragment>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit task"}
        </DialogTitle>
        <DialogContent>
          <TextField
           value={updatedTask}
           onChange={(e)=>setUpdatedTask(e.target.value)}
           multiline
           />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleUpdate} autoFocus>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}