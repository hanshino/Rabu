import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

const BossCard = props => {
  const { t } = useTranslation();
  const { img, title, note, number, level } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        title={title}
        subheader={level}
        action={
          <IconButton>
            <ShareIcon />
          </IconButton>
        }
      />
      <CardMedia component="img" image={img} alt={title} height={194} />
      <CardContent>
        <Typography variant="h5" component="div">
          {number.substr(0, 3)} {number.substr(3, 3)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {note || t("view.common.none")}
        </Typography>
      </CardContent>
    </Card>
  );
};

BossCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BossCard;
