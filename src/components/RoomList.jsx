import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const RoomList = props => {
  const { rooms } = props;
  const { t, i18n } = useTranslation();

  const rows = useMemo(
    () =>
      rooms.map((room, idx) => (
        <TableRow
          key={idx}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
        >
          <TableCell>{room.number}</TableCell>
          <TableCell>{room.note}</TableCell>
          <TableCell>{t(`multiboss.level`, { context: room.level })}</TableCell>
        </TableRow>
      )),
    [rooms, i18n.language]
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t("view.dashboard.number")}</TableCell>
            <TableCell>{t("view.dashboard.note")}</TableCell>
            <TableCell>{t("view.dashboard.level")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      note: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })
  ),
};

export default RoomList;
