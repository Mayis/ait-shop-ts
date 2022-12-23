import * as React from 'react';

import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { alertMessage, alertSelector } from '../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertMessage() {
  const dispatch = useAppDispatch();
  const open = useAppSelector(alertSelector);
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(alertMessage('close'));
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Product added to Basket
        </Alert>
      </Snackbar>
    </>
  );
}
