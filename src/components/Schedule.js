import React from "react";
import PropTypes from "prop-types";

function Schedule(props){
  return (
    <React.Fragment>
      <h3>{props.day} - {props.booth}</h3>
      <h3><em>{props.location} - {props.hours}</em></h3>
      <hr/>
    </React.Fragment>
  )
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Schedule;