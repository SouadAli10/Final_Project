import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from "./pages/TotalMainPage";
import EditPage from "./pages/EditPage";
import Profile from "./pages/Profile";
import Sign_in from "./pages/Sign_In_Page";
import Log_in from "./pages/Log_In_Page";
class Home extends React.Component {
  state = {
    ProfileImageSrc:
      "https://image.noelshack.com/fichiers/2017/38/2/1505775062-1505606859-portrait-1961529-960-720.jpg",
    Name: "Olivia Valdez",
    Title: "Machine Learning Expert",
    NumberOfYears: "5",
    RatingValue: "6",
    AboutMe: `Hi ! My name is Olivia Valdez. I'm a Machine Learning Expertfrom Paris, in France. I really enjoy photography and moutains.`
  };
  changeProfile = profile => {
    this.setState(profile);
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route exact path="/sign_in" render={() => <Sign_in />} />
          <Route exact path="/log_in" render={() => <Log_in />} />

          <Route
            exact
            path="/user"
            render={() => <Profile {...this.state} />}
          />
          <Route
            exact
            path="/user/edit"
            render={() => (
              <EditPage whenSubmit={this.changeProfile} {...this.state} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}
export default Home;
