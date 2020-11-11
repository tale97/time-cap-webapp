import React from "react";
import "../styles/App.css";
import ActivityCards from "./ActivityCards";
import AppBarBottom from "./AppBarBottom";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
    };
  }

  addActivity = () => {
    var activities = this.state.activities.concat("new work");
    this.setState({ activities: activities });
  };

  render() {
    return (
      <Grid className="App" container justify="center" spacing="2">
        <Grid className="nav-bar" item></Grid>
        <Grid className="date-bar" item></Grid>
        <Grid className="tag-bar" item></Grid>
        <Grid className="cards-area" item>
          <ActivityCards activities={this.state.activities} />
        </Grid>
        <AppBarBottom addActivity={this.addActivity} />
      </Grid>
    );
  }
}

export default App;
