import React from "react";
import "../styles/ActivityCard.scss";
import Grid from "@material-ui/core/Grid";
import ActivityCard from "./ActivityCard";

class ActivityCards extends React.Component {
  render() {
    const { activityCards, removeActivity } = this.props;
    const activityCardList = activityCards.map((activityCard, idx) => {
      return (
        <Grid item key={idx}>
          <ActivityCard
            activitySpecification={activityCard}
            removeActivity={removeActivity}
          />
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
