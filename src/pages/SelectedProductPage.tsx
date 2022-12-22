import {
  getSelectedProduct,
  postComment,
  selectedProductSelector
} from '../redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CommentFild from '../components/CommentFild';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

function SelectedProductPage() {
  const [open, setOpen] = useState(false);
  const { currentId } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectedProductSelector);
  useEffect(() => {
    dispatch(getSelectedProduct(currentId!));
  }, [currentId]);
  console.log(currentId, product);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    product && (
      <>
        <Container sx={{ marginTop: '100px' }}>
          <Card sx={{ display: 'flex', height: '400px' }}>
            <CardMedia
              component="img"
              alt={product.title}
              sx={{ height: '100%', padding: '10px', objectFit: 'contain' }}
              image={product.src}
            />
            <CardContent sx={{ width: '60%' }}>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <CardActions sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                <Button size="large" variant="contained" endIcon={<ShoppingCartIcon />}>
                  ADD TO BASKET
                </Button>
                <ButtonGroup variant="contained" sx={{ marginTop: '5px' }}>
                  <Button startIcon={<ThumbUpIcon />}>Like</Button>
                  <Button startIcon={<ThumbDownIcon />}>Dislike</Button>
                </ButtonGroup>
              </CardActions>
            </CardContent>
          </Card>
        </Container>
        <Container sx={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <Typography gutterBottom variant="h6" component="div">
              COMMENT
            </Typography>
            <Button variant="contained" onClick={handleClickOpen} endIcon={<AddIcon />}>
              AddComent
            </Button>
          </div>
          <Container sx={{ marginTop: '25px' }}>
            {product.comments.map(({ author, body }) => (
              <>
                <ListItem key={body}>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={author.fullname} secondary={body} />
                </ListItem>
                <Divider variant="inset" />
              </>
            ))}
          </Container>
        </Container>
        <CommentFild open={open} handleClose={handleClose} id={product.id} />
      </>
    )
  );
}

export default SelectedProductPage;
