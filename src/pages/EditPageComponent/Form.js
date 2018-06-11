import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  onSubmit = evt => {
    evt.preventDefault();
    const AboutMe = evt.target.AboutMe.value;
    console.log("sdfsdfd");
    console.log(AboutMe);
    console.log(this.props.whenSubmit);
    this.props.whenSubmit({ AboutMe });
  };
  render() {
    const { AboutMe } = this.props;
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            About Me
          </Label>
          <Col sm={8}>
            <Input
              type="textarea"
              name="AboutMe"
              id="exampleText"
              defaultValue={AboutMe}
            />
          </Col>
        </FormGroup>
        <br />

        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Profile Image
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
          </Col>
        </FormGroup>
        <br />
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            Background Image
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
          </Col>
        </FormGroup>
        <br />
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
