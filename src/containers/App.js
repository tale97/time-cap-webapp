// https://daveceddia.com/why-not-modify-react-state-directly/

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
      isCardCreationDialogOpen: false,
      targetedActivity: null,
    };
  }

  addActivityCard = (activityCard) => {
    this.setState({
      activityCards: this.state.activityCards.concat([activityCard]),
      isCardCreationDialogOpen: false,
    });
  };

  setTargetedActivity = (activity) => {
    console.log("set targted activity to");
    console.log(activity);
    this.setState({ targetedActivity: activity });
  };

  setIsCardCreationDialogOpen = (boolean) => {
    this.setState({ isCardCreationDialogOpen: boolean });
  };

  updateActivityRunningDuration = (activity, runningDuration) => {
    console.log("activity", activity);
    console.log("Duration", runningDuration);
    console.log("_________________________");
    const { activityCards } = this.state;
    const idx = this.indexOfActivity(activity);
    let activityCardsCopy = JSON.parse(JSON.stringify(activityCards));
    activityCardsCopy[idx].runningDuration = runningDuration;

    this.setState({ activityCards: activityCardsCopy });
  };

  indexOfActivity = (activity) => {
    const { activityCards } = this.state;
    console.log("in activityCards", activityCards);
    for (var i = 0; i < activityCards.length; i++) {
      console.log(i);
      let curActivity = activityCards[i];
      if (
        curActivity.name === activity.name &&
        curActivity.color === activity.color &&
        curActivity.period === activity.period &&
        // curActivity.duration === activity.duration &&
        curActivity.type === activity.type
      ) {
        return i;
      }
    }
    // if can't find activity
    console.log("error: can't find activity", activity);
    return -1;
  };

  // modify the specs for a specific activity
  modifyActivity = (activity, newActivitySpecs) => {
    const { activityCards } = this.state;
    const indexOfActivity = this.indexOfActivity(activity);

    // https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
    var activityCardsCopy = JSON.parse(JSON.stringify(activityCards));
    activityCardsCopy[indexOfActivity].name = newActivitySpecs.name;
    activityCardsCopy[indexOfActivity].type = newActivitySpecs.type;
    activityCardsCopy[indexOfActivity].color = newActivitySpecs.color;
    activityCardsCopy[indexOfActivity].duration = newActivitySpecs.duration;
    activityCardsCopy[indexOfActivity].period = newActivitySpecs.period;
    activityCardsCopy[indexOfActivity].runningDuration =
      newActivitySpecs.runningDuration;

    this.setState({ activityCards: activityCardsCopy });
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
    const {
      targetedActivity,
      activityCards,
      isCardCreationDialogOpen,
    } = this.state;

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
              activityCards={activityCards}
              removeActivity={this.removeActivity}
              setIsCardCreationDialogOpen={this.setIsCardCreationDialogOpen}
              setTargetedActivity={this.setTargetedActivity}
              updateActivityRunningDuration={this.updateActivityRunningDuration}
            />
          </Grid>

          <AppBarBottom
            addActivityCard={this.addActivityCard}
            isCardCreationDialogOpen={isCardCreationDialogOpen}
            setIsCardCreationDialogOpen={this.setIsCardCreationDialogOpen}
            modifyActivity={this.modifyActivity}
            targetedActivity={targetedActivity}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
