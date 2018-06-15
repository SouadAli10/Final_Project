import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class TagList extends React.Component {
  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem tag="a" href="/tags/Computer_Science" action>
            Computer Science
          </ListGroupItem>
          <ListGroupItem tag="a" href="/tags/AI" action>
            AI
          </ListGroupItem>
          <ListGroupItem tag="a" href="/tags/Music" action>
            Music
          </ListGroupItem>
          <ListGroupItem tag="a" href="/tags/Languages" action>
            Languages
          </ListGroupItem>{" "}
        </ListGroup>
        <p />
      </div>
    );
  }
}
