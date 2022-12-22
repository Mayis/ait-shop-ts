import { getSelectedProduct, selectedProductSelector } from '../redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SelectedProductPage() {
  const { currentId } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectedProductSelector);
  useEffect(() => {
    dispatch(getSelectedProduct(currentId!));
  }, [currentId]);
  console.log(currentId, product);

  return (
    product && (
      <Container>
        <Card>
          <CardMedia component="img" alt={product.title} height="140" image={product.src} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    )
  );
}

export default SelectedProductPage;
