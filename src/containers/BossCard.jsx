import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const BossCard = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const bossPath = t(`assets.${props.boss}`);
  return (
    <Grid container componenet={Paper}>
      <Grid item>
        <Avatar
          variant="square"
          className={classes.large}
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
