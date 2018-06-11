import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style/item.css";
const members = [
  {
    ItemImageSrc: "/Pictures/Machine Learning.jpg",
    Title: "Machine Learning: Introduction ",
    Explanation:
      "Introduction to the basic concepts of machine learning. I also intend to provide practical examples and case studies.",
    Tag: " Machine Learning, AI, Computer Science"
  },
  {
    ItemImageSrc: "/Pictures/Algorithm.jpeg",
    Title: "Machine Learning: Algorithm ",
    Explanation:
      "Algorithms plays an important part in the development of machine learning programs.",
    Tag: "Machine Learning, AI, Computer Science, Algorithm"
  }
];
const Item = ({ children, ItemImageSrc, Title, Explanation, Tag }) => (
  <Row className="item">
    <Col xs="4" sm="4">
      <img className="image" src={ItemImageSrc} />
    </Col>
    <Col xs="8">
      <h3>{Title}</h3>
      <p> {Explanation}</p>
      <p> {Tag}</p>
    </Col>
    <br />
  </Row>
);
class Items extends React.Component {
  state = {
    ItemImageSrc:
      "https://image.noelshack.com/fichiers/2017/38/2/1505775062-1505606859-portrait-1961529-960-720.jpg",
    Title: "batata",
    Explanation: "sdfsdfsdf",
    Tag: "jhchsoihc6"
  };
  render() {
    return <Item {...this.state} />;
  }
}
const RemovedGallery = () => {
  return (
    <Container className="items-wrapper">
      <Row>
        {members.map(members => <Item key={members.Title} {...members} />)}
      </Row>
    </Container>
  );
};
export default RemovedGallery;
