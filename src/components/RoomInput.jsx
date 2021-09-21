import React, { useState, useEffect } from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { useTranslation } from "react-i18next";
import { setRoomNumber } from "../actions";
import { useDispatch } from "react-redux";

const RoomInput = () => {
  const [roomNum, setNumber] = useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isValid = /^[0-9]{6}$/.test(roomNum);

  useEffect(() => {
    if (isValid) {
      dispatch(setRoomNumber({ number: roomNum }));
    }
  }, [roomNum]);

  const handleChange = num => {
    if (num.length > 6) return;
    setNumber(num);
  };

  return (
    <FormControl error={!isValid}>
      <OutlinedInput
        placeholder={t("view.multiboss.number")}
        fullWidth
        value={roomNum}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]{6}" }}
        onChange={e => handleChange(e.target.value)}
      />
      <MyFormHelperText />
    </FormControl>
  );
};

const MyFormHelperText = () => {
  const { error } = useFormControl() || {};
  const { t } = useTranslation();

  const helperText = React.useMemo(() => {
    if (error) {
      return t("error.room.number");
    }

    return t("helper.perfect");
  }, [error]);

  return <FormHelperText>{helperText}</FormHelperText>;
};

export default RoomInput;
