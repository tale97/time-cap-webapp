import React from "react";
import "../styles/ActivityCard.scss";
import Grid from "@material-ui/core/Grid";
import ActivityCard from "./ActivityCard";

class ActivityCards extends React.Component {
  render() {
    const {
      activityCards,
      removeActivity,
      modifyActivity,
      isCardCreationDialogOpen,
      setIsCardCreationDialogOpen,
      setTargetedActivity,
    } = this.props;

    const activityCardList = activityCards.map((activityCard, idx) => {
      return (
        <Grid item key={idx}>
          <ActivityCard
            activitySpecification={activityCard}
            removeActivity={removeActivity}
            modifyActivity={modifyActivity}
            isCardCreationDialogOpen={isCardCreationDialogOpen}
            setIsCardCreationDialogOpen={setIsCardCreationDialogOpen}
            setTargetedActivity={setTargetedActivity}
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
