import React from "react";
import Rating from "./Rating.js";
import Counter from "./Counter.js";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import RemovedGallery from "./galleryremoved";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Skills offerings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Rating
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Time Counter
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col>
                <Button
                  outline
                  style={{ float: "right" }}
                  color="primary"
                  sm={{ size: 2, offset: 2 }}
                  onClick={() => {
                    this.setState({ editmode: true });
                  }}
                >
                  <img
                    style={{
                      width: "30px"
                    }}
                    src="/Pictures/pencil.svg"
                  />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <RemovedGallery />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              Interpersonal Skills <Rating />
            </Row>
            <Row>
              Explanation <Rating />
            </Row>
            <Row>
              Time Manegment <Rating />
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Counter />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
