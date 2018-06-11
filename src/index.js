import React from "react";
import { render } from "react-dom";
import Home from "./Home";

class App extends React.Component {
  render() {
    return <Home />;
  }
}

render(<App />, document.getElementById("root"));
// state = {
//   ProfileImageSrc:
//   "https://image.noelshack.com/fichiers/2017/38/2/1505775062-1505606859-portrait-1961529-960-720.jpg",
//   Name: "jane doe",
//   Title: "Ui/UX designer",
//   NumberOfYears: "5",
//   RatingValue: "6",
//   AboutMe: `Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I really enjoy photography and moutains.`
// };
// changeProfile = profile => {
//   this.setState(profile);
// };
