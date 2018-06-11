import React from "react";
import Cards from "./cards";
import RemovedGallery from "./galleryremoved";
import DropMenu from "./menudrop";
import Taps from "./tabs.js";
export const Templete = ({
  ProfileImageSrc,
  Name,
  Title,
  NumberOfYears,
  RatingValue,
  AboutMe
}) => {
  return (
    <div className="main-container">
      <header>
        <i className="fa ">
          <DropMenu />
        </i>
      </header>
      <div className="row">
        <div className="left col-lg-4">
          <div className="photo-left">
            <img className="photo" src={ProfileImageSrc} />
          </div>
          <h4 className="name">{Name}</h4>
          <p className="info">{Title}</p>
          <div className="stats row-stats">
            <div className="stat col-xs-4">
              <p className="number-stat">{NumberOfYears}</p>
              <p className="desc-stat">Teaching Experience</p>
            </div>
            <div className="stat col-xs-4">
              <p className="number-stat">{RatingValue}</p>
              <p className="desc-stat">Average Rating</p>
            </div>
          </div>
          <p className="desc">{AboutMe}</p>
          <span className="contact">Message Me</span>
        </div>
        <div className="right col-lg-8">
          <div className="nav">
            <Taps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templete;
