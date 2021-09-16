import React from "react";
import PropTypes from "prop-types";

const RoomList = props => {};

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      note: PropTypes.string.isRequired,
    })
  ),
};

export default RoomList;
