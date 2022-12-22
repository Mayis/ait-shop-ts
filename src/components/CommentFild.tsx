import { getSelectedProduct, postComment } from '../redux/slices/productSlice';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../redux/hooks';
import { useState } from 'react';

type Props = {
  open: boolean;
  id: string;
  handleClose: () => void;
};
function CommentFild({ open, id, handleClose }: Props) {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState<string>('');
  const handleAddComment = () => {
    dispatch(postComment({ product_id: id, body: comment }));
    dispatch(getSelectedProduct(id));
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>add comment ...</DialogTitle>
        <DialogContent>
          <TextField
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            margin="dense"
            id="comment"
            label="comment"
            type="comment"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleAddComment}>
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CommentFild;
