import React from "react";
import "../styles/ActivityCard.scss";
import Grid from "@material-ui/core/Grid";
import ActivityCard from "./ActivityCard";

class ActivityCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activities } = this.props;
    const activityCardList = activities.map((activity, idx) => {
      return (
        <Grid item key={idx}>
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
