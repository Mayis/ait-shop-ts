import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../redux/hooks';
import { userLogout } from '../redux/slices/userSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};
type Props = {
  open: boolean;
  handleClose: () => void;
};
export default function BasicModal({ open, handleClose }: Props) {
  const dispatch = useAppDispatch();
  const logoutUser = () => {
    dispatch(userLogout());
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you want to Logout ?
          </Typography>
          <button onClick={logoutUser}>YES</button>
          <button onClick={handleClose}>No</button>
        </Box>
      </Modal>
    </div>
  );
}
