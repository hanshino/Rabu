import React from "react";
import BossCard from "../containers/BossCard";
import Stack from "@mui/material/Stack";
import NewRoomButton from "../components/NewRoomButton";

const Dashboard = () => {
  return (
    <div>
      <Stack spacing={2}>
        <BossCard boss="tiger" />
        <BossCard boss="owl" />
      </Stack>
      <NewRoomButton />
    </div>
  );
};

export default Dashboard;
