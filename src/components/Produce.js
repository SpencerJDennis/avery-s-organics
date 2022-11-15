import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <p>{props.produce}</p>
      <hr/>
    </React.Fragment>
  )
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  produce: PropTypes.string.isRequired
};

export default Produce;