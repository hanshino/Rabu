import React from "react";
import BossCard from "../containers/BossCard";
import Stack from "@mui/material/Stack";

const Dashboard = () => {
  return (
    <Stack spacing={2}>
      <BossCard boss="tiger" />
      <BossCard boss="owl" />
    </Stack>
  );
};

export default Dashboard;
