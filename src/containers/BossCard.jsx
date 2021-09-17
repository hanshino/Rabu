import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MuiAvatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import RoomList from "../components/RoomList";

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
}));

const BossCard = props => {
  const { t } = useTranslation();
  const bossPath = t(`assets.${props.boss}`);
  return (
    <Grid container componenet={Paper} spacing={1}>
      <Grid item>
        <Avatar
          variant="rounded"
          src={`${process.env.PUBLIC_URL}${bossPath}`}
        />
      </Grid>
      <Grid item>
        <Typography variant="h5">{t(`boss.${props.boss}.name`)}</Typography>
      </Grid>
      <Grid item xs={12}>
        <RoomList
          rooms={[
            { number: "123456", note: "test", level: 2 },
            { number: "123456", note: "test", level: 2 },
            { number: "123456", note: "test", level: 2 },
            { number: "123456", note: "test", level: 2 },
          ]}
        />
      </Grid>
    </Grid>
  );
};

BossCard.propTypes = {
  boss: PropTypes.string.isRequired,
};

export default BossCard;
