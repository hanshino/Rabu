import React, { useState, useContext, createContext } from "react";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import BossStepper from "../components/BossStepper";
import RoomInput from "../components/RoomInput";
import BossNote from "../components/BossNote";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import BossCard from "../components/BossCard";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

const StepContext = createContext({
  step: 0,
  setStep: () => {},
});

const NewRoomStepper = () => {
  const [step, setStep] = useState(0);
  const { t } = useTranslation();
  return (
    <StepContext.Provider value={{ step, setStep }}>
      <Box>
        <Stepper activeStep={step} orientation="vertical">
          {genStep(t("view.multiboss.step", { context: 1 }), <BossStep />)}
          {genStep(t("view.multiboss.step", { context: 2 }), <NumberStep />)}
          {genStep(t("view.multiboss.step", { context: 3 }), <NoteStep />)}
          {genStep(t("view.multiboss.step", { context: 4 }), <ConfirmStep />)}
        </Stepper>
      </Box>
    </StepContext.Provider>
  );
};

const BossStep = () => {
  return (
    <>
      <BossStepper />
      <Pannel next previous={false} />
    </>
  );
};

const NumberStep = () => {
  const createRoomState = useSelector(state => state.createroom);

  const verifyBeforeNext = () => {
    let { number = "" } = createRoomState;
    return /^\d{6}$/.test(number);
  };

  return (
    <>
      <RoomInput />
      <Pannel next previous {...{ verifyBeforeNext }} />
    </>
  );
};

const NoteStep = () => {
  return (
    <>
      <BossNote />
      <Pannel next previous />
    </>
  );
};

const ConfirmStep = () => {
  const createRoomState = useSelector(state => state.createroom);
  const { t } = useTranslation();
  const { setStep } = useContext(StepContext);
  const { name, number, level, note } = createRoomState;

  const handleFinish = () => {
    setStep(preStep => preStep + 1);
  };

  return (
    <>
      <BossCard
        {...{
          title: t(`boss.${name}.name`),
          img: t(`assets.${name}`),
          number,
          level: t("multiboss.level", { context: level }),
          note,
        }}
      />
      <LoadingButton
        loading
        loadingPosition="start"
        sx={{ mt: 1 }}
        variant="contained"
        startIcon={<SaveIcon />}
      >
        {t("view.common.finish")}
      </LoadingButton>
    </>
  );
};

const Pannel = props => {
  const { setStep } = useContext(StepContext);
  const { t } = useTranslation();
  const { next = true, previous = true, verifyBeforeNext = () => true } = props;
  return (
    <Box sx={{ mb: 2, mt: 1, "& .MuiButton-root": { mr: 1 } }}>
      {previous && (
        <Button
          variant="contained"
          onClick={() => setStep(preStep => preStep - 1)}
        >
          {t("view.multiboss.create.previous")}
        </Button>
      )}
      {next && (
        <Button
          variant="contained"
          onClick={() => {
            let validate = verifyBeforeNext();
            if (validate === false) return;
            setStep(preStep => preStep + 1);
          }}
        >
          {t("view.multiboss.create.next")}
        </Button>
      )}
    </Box>
  );
};

Pannel.propTypes = {
  next: PropTypes.bool,
  previous: PropTypes.bool,
  verifyBeforeNext: PropTypes.func,
};

function genStep(label, children) {
  return (
    <Step>
      <StepLabel>{label}</StepLabel>
      <StepContent TransitionProps={{ unmountOnExit: false }}>
        {children}
      </StepContent>
    </Step>
  );
}

export default NewRoomStepper;
