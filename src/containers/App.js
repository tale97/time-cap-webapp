import React from "react";
import "../styles/App.scss";
import ActivityCards from "./ActivityCards";
import AppBarTop from "./AppBarTop";
import AppBarBottom from "./AppBarBottom";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activityCards: [],
    };
  }

  componenDidUpdate(prevProps, prevState) {
    if (this.state.activityCards !== prevState.activityCards) {
      console.log(`test ${this.state.activityCards}`);
    }
  }

  addActivityCard = (activityCard) => {
    this.setState({
      activityCards: this.state.activityCards.concat([activityCard]),
    });
  };

  render() {
    return (
      <div>
        <Grid
          container
          className="App"
          direction="column"
          justify="center"
          spacing="2"
        >
          <Grid className="nav-bar" item>
            <AppBarTop />
          </Grid>
          <Grid className="date-bar" item></Grid>
          <Grid className="tag-bar" item></Grid>
          <Grid className="cards-area" item>
            <ActivityCards activityCards={this.state.activityCards} />
          </Grid>

          <AppBarBottom addActivityCard={this.addActivityCard} />
        </Grid>
      </div>
    );
  }
}

export default App;
