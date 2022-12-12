import React, { memo, useCallback, useState } from "react";

import AppBarMenu from "./AppBarMenu";
import Categoris from "./Categoris";
import { useAppDispatch } from "../redux/hooks";
import { userLogout } from "../redux/slices/userSlice";

function Header() {
  const dispatch = useAppDispatch();
  const [showCategories, setShowCategories] = useState(false);
  const handleShowCategories = useCallback(() => setShowCategories(true), []);
  const closeCategories = useCallback(() => setShowCategories(false), []);
  const appUserLogout = useCallback(() => dispatch(userLogout()), []);
  return (
    <>
      <AppBarMenu
        handleShowCategories={handleShowCategories}
        appUserLogout={appUserLogout}
      />
      <Categoris
        showCategories={showCategories}
        closeCategories={closeCategories}
      />
    </>
  );
}
export default memo(Header);
