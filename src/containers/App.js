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

  addActivityCard = (activityCard) => {
    this.setState({
      activityCards: this.state.activityCards.concat([activityCard]),
    });
  };

  removeActivity = (activity) => {
    const { activityCards } = this.state;
    var newActivityCards = activityCards.filter((card) => {
      return !(
        card.name === activity.name &&
        card.type === activity.type &&
        card.period === activity.period &&
        card.color === activity.color &&
        card.duration === activity.duration
      );
    });
    this.setState({ activityCards: newActivityCards });
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
            <ActivityCards
              activityCards={this.state.activityCards}
              removeActivity={this.removeActivity}
            />
          </Grid>

          <AppBarBottom addActivityCard={this.addActivityCard} />
        </Grid>
      </div>
    );
  }
}

export default App;
