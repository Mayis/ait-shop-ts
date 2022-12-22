import React, { memo } from 'react';

import { BasketProd } from '../api/slices/basket';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { updateBasketCount } from '../redux/slices/basketSlice';
import { useAppDispatch } from '../redux/hooks';

type Props = {
  item: {
    product: BasketProd;
    count: number;
  };
};
function BasketItem({ item }: Props) {
  const {
    count,
    product: { id, price, src, title }
  } = item;
  const dispatch = useAppDispatch();
  const handleIncreseItem = () => {
    dispatch(updateBasketCount({ product_id: id, action: 'increase' }));
  };
  const handleDecreaseItem = () => {
    dispatch(updateBasketCount({ product_id: id, action: 'decrease' }));
  };

  return (
    <div id="basketItem">
      <div className="delItem">
        <IconButton color="error">
          <RemoveCircleOutlineIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="imgDiv">
        <img src={src} alt={title} />
      </div>
      <div className="incrAndDecr">
        <Button variant="contained" onClick={handleDecreaseItem} disabled={count === 1}>
          -
        </Button>
        <h3>{count}</h3>
        <Button variant="contained" onClick={handleIncreseItem}>
          +
        </Button>
      </div>
      <div className="priceDiv">
        <h3 className="priceH3">{(count * price).toFixed(1)}$</h3>
      </div>
    </div>
  );
}

export default memo(BasketItem);
