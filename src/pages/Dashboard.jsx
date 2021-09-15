import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.get("theme").get("theme"));
  console.log(theme, 21);
  return (
    <div>
      Dashboard
      <br />
      <button onClick={() => dispatch(actions.changeDark())}>Dark</button>
      <button onClick={() => dispatch(actions.changeLight())}>Light</button>
    </div>
  );
};

export default Dashboard;
