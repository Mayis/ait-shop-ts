import './style/style.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Items } from '../api/slices/products';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import { addToBasket } from '../redux/slices/basketSlice';
import { useAppDispatch } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

type Props = {
  items: Items[];
};

export default function ResponsiveGrid({ items }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleAddBasket = (id: string) => {
    dispatch(addToBasket(id));
  };
  const handleGoProductPage = (id: string) => {
    navigate(`/products/current/${id}`);
  };
  return (
    <Box sx={{ flexGrow: 1, padding: '15px 0px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {items.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id} sx={{ position: 'relative' }}>
            <img
              src={item.src}
              alt=""
              className="prodImg"
              onClick={() => handleGoProductPage(item.id)}
            />
            <Tooltip title="Add to Basket" followCursor>
              <Button
                onClick={() => handleAddBasket(item.id)}
                variant="contained"
                sx={{ position: 'absolute', zIndex: 1, right: 10, bottom: 10 }}>
                <ShoppingCartIcon />
              </Button>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
