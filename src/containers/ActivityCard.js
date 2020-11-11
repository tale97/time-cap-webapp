import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "../styles/ActivityCard.css";

class ActivityCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activity } = this.props;
    return (
      <Card className="activity-card">
        <CardContent className="card-content">
          {activity}
          <br />
          {`Goal/Limit | Time | Period`}
        </CardContent>
        <Button>Start</Button>
      </Card>
    );
  }
}

export default ActivityCard;
