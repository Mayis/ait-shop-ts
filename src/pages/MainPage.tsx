import React from "react";
import { useAppSelector } from "../redux/hooks";
import { userSelector } from "../redux/slices/userSlice";
import withUser from "../components/HOC/withUser";

function MainPage() {
  const user = useAppSelector(userSelector);
  console.log(user);
  return <div>MainPage</div>;
}

export default withUser(MainPage);
