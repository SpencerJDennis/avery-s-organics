import React from "react";
import ScheduleList from "./ScheduleList";
import SeasonalProducts from "./SeasonalProducts";

class MarketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <SeasonalProducts />
      buttonText = "Return to Market Schedule";
    } else {
      currentlyVisibleState = <ScheduleList />
      buttonText = "View Produce";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default MarketControl;