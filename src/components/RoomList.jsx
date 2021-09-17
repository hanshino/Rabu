import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";

const RoomList = props => {
  const { rooms } = props;
  const { t, i18n } = useTranslation();

  const cols = useMemo(
    () =>
      [
        t(`view.dashboard.number`),
        t(`view.dashboard.level`),
        t(`view.dashboard.note`),
      ].map(col => ({ field: col })),
    [i18n.language]
  );

  const rows = useMemo(
    () =>
      rooms.map((room, idx) => ({
        id: idx + 1,
        ...room,
        level: t("multiboss.level", { context: room.level }),
      })),
    [rooms]
  );

  console.log(cols, rows);

  return <DataGrid columns={cols} rows={rows} hideFooterPagination />;
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
