import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody
} from "reactstrap";

const ComputerScienceOffering = props => {
  return (
    <CardGroup>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://uploads.codesandbox.io/uploads/user/2a63db4f-3e50-4eb2-b070-6348d0d518a2/Vhp7-Algorithm.jpeg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Algorithm</CardTitle>
          <CardSubtitle>Teacher Name: Olivia Valdez</CardSubtitle>
          <CardText>
            Learn how to write and understand algorithms and how to use your
            knowladge in the different fields to improve your efficiency
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://uploads.codesandbox.io/uploads/user/2a63db4f-3e50-4eb2-b070-6348d0d518a2/cxx9-Machine%20Learning.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Algorithm</CardTitle>
          <CardSubtitle>Teacher Name: Olivia Valdez</CardSubtitle>
          <CardText>
            Learn how to write and understand algorithms and how to use your
            knowladge in the different fields to improve your efficiency
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://uploads.codesandbox.io/uploads/user/2a63db4f-3e50-4eb2-b070-6348d0d518a2/Vhp7-Algorithm.jpeg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Algorithm</CardTitle>
          <CardSubtitle>Teacher Name: Olivia Valdez</CardSubtitle>
          <CardText>
            Learn how to write and understand algorithms and how to use your
            knowladge in the different fields to improve your efficiency
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default ComputerScienceOffering;
