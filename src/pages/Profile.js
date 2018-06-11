import React from "react";
import RemovedGallery from "./ProfileComponent/galleryremoved";
import DropMenu from "./ProfileComponent/menudrop";
import Taps from "./ProfileComponent/tabs.js";
import Template from "./ProfileComponent/templete";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfileComponent/style/style.css";
import "./ProfileComponent/style/style1.css";
import "./ProfileComponent/style/style2.css";
import EditPage from "./EditPage";

class Profile extends React.Component {
  state = {
    ProfileImageSrc:
      "https://image.noelshack.com/fichiers/2017/38/2/1505775062-1505606859-portrait-1961529-960-720.jpg",
    Name: "Olivia Valdez",
    Title: "Machine Learning Expert",
    NumberOfYears: "5",
    RatingValue: "6",
    AboutMe: `Hi ! My name is Olivia Valdez. I'm a Machine Learning Expert from Paris, in France. I really enjoy photography and mountain.`
  };
  changeProfile = profile => {
    this.setState(profile);
  };
  render() {
    return (
      <div className="Profiletotal">
        <Template {...this.state} />{" "}
      </div>
    );
  }
}
export default Profile;
