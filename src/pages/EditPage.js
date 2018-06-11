import React from "react";
import EditForm from "./EditPageComponent/Form.js";
import Navagation from "./EditPageComponent/navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="edit-container" style={{ padding: "10px" }}>
        <Navagation />
        <br />
        <br />
        <EditForm {...this.props} />
      </div>
    );
  }
}

export default EditPage;
