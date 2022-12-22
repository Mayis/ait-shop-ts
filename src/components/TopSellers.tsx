import CaruselSlider from './Slider/CaruselSlider';
import { Products } from '../api/slices/products';

type Props = {
  tops: Products;
};
function TopSellers({ tops }: Props) {
  return <CaruselSlider items={tops.items} />;
}

export default TopSellers;
