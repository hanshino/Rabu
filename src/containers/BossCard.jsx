import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MuiAvatar from "@mui/material/Avatar";
import { useTranslation } from "react-i18next";

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
}));

const BossCard = props => {
  const { t } = useTranslation();
  const bossPath = t(`assets.${props.boss}`);
  return (
    <Grid container componenet={Paper}>
      <Grid item>
        <Avatar
          variant="rounded"
          src={`${process.env.PUBLIC_URL}${bossPath}`}
        />
      </Grid>
      <Grid item>123456</Grid>
    </Grid>
  );
};

BossCard.propTypes = {
  boss: PropTypes.string.isRequired,
};

export default BossCard;
