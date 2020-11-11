import "../styles/App.css";
import ActivityCards from "./ActivityCards";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Grid className="App" container justify="center" spacing="2">
      <Grid className="nav-bar" item></Grid>
      <Grid className="date-bar" item></Grid>
      <Grid className="tag-bar" item></Grid>
      <Grid className="cards-area" item>
        <ActivityCards activities={[`eat`, `drink`, `sleep`, `work`]} />
      </Grid>
    </Grid>
  );
}

export default App;
