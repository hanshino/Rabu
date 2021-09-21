import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTranslation } from "react-i18next";
import { setRoomNote } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const BossNote = () => {
  const dispatch = useDispatch();
  const createRoomState = useSelector(state => state.createroom);
  const { t } = useTranslation();

  return (
    <FormControl>
      <OutlinedInput
        placeholder={t("view.multiboss.note")}
        value={createRoomState.note}
        fullWidth
        onChange={e => dispatch(setRoomNote({ note: e.target.value }))}
      />
    </FormControl>
  );
};

export default BossNote;
