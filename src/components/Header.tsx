import { memo, useCallback, useState } from 'react';

import AppBarMenu from './AppBarMenu';
import Categoris from './Categoris';

function Header() {
  const [showCategories, setShowCategories] = useState(false);

  const handleShowCategories = useCallback(() => setShowCategories(true), []);
  const closeCategories = useCallback(() => setShowCategories(false), []);
  return (
    <>
      <AppBarMenu handleShowCategories={handleShowCategories} />
      <Categoris showCategories={showCategories} closeCategories={closeCategories} />
    </>
  );
}
export default memo(Header);
