import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import multibossConfig from "../configs/multiboss.json";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBoss,
  nextBoss,
  previousBoss,
  setAvailable,
  selectLevel,
  resetRoomAll,
} from "../actions";
import Loader from "./Loader";

const BossStepper = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const createRoomState = useSelector(state => state.createroom);
  const { t } = useTranslation();

  const bosses = multibossConfig.available.map(data => ({
    key: data.name,
    label: t(`boss.${data.name}.name`),
    imgPath: t(`assets.${data.name}`),
  }));

  // 初次載入需設定可用的關卡
  useEffect(() => {
    dispatch(
      setAvailable({
        available: multibossConfig.available,
      })
    );
    return () => dispatch(resetRoomAll());
  }, [multibossConfig.available]);

  const maxSteps = bosses.length;
  const activeStep = createRoomState.current;
  const handleNext = () => dispatch(nextBoss());
  const handleBack = () => dispatch(previousBoss());

  if (createRoomState.available.length === 0) {
    return <Loader />;
  }

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{bosses[activeStep].label}</Typography>
      </Paper>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={idx => dispatch(selectBoss({ current: idx }))}
        enableMouseEvents
      >
        {bosses.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            {t("view.multiboss.create.cnext")}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            {t("view.multiboss.create.cback")}
          </Button>
        }
      />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <BossList />
        </Grid>
        <Grid item xs={6}>
          <LevelList />
        </Grid>
      </Grid>
    </Box>
  );
};

/**
 * 等級選單
 */
const LevelList = () => {
  const createRoomState = useSelector(state => state.createroom);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleSelectLevel = level => dispatch(selectLevel({ level }));
  const { current, level, available } = createRoomState;

  return (
    <FormControl fullWidth>
      <InputLabel>{t("view.multiboss.level")}</InputLabel>
      <Select
        onChange={e => handleSelectLevel(e.target.value)}
        value={level}
        label={t("view.multiboss.level")}
      >
        {available[current].levels.map(level => (
          <MenuItem key={level} value={level}>
            {t("multiboss.level", { context: level })}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

/**
 * 關卡選單
 */
const BossList = () => {
  const createRoomState = useSelector(state => state.createroom);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { available, current } = createRoomState;
  const handleChange = current => dispatch(selectBoss({ current }));

  return (
    <FormControl fullWidth>
      <InputLabel>{t("view.multiboss.stage")}</InputLabel>
      <Select
        value={current}
        label={t("view.multiboss.stage")}
        onChange={e => handleChange(e.target.value)}
      >
        {available.map((data, idx) => (
          <MenuItem key={data.name} value={idx}>
            {t(`boss.${data.name}.name`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BossStepper;
