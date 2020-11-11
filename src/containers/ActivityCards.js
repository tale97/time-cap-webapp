import React from "react";
import "../styles/ActivityCard.css";
import Grid from "@material-ui/core/Grid";
import ActivityCard from "./ActivityCard";

class ActivityCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activities } = this.props;
    console.log(`DEBUG ${activities}`);
    const activityCardList = activities.map((activity) => {
      return (
        <Grid item>
          <ActivityCard activity={activity} />
        </Grid>
      );
    });
    return (
      <Grid
        className="action-cards-container"
        container
        justify="center"
        spacing="2"
      >
        {activityCardList}
      </Grid>
    );
  }
}

export default ActivityCards;
