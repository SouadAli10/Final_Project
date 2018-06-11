import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "./material_title_panel";
import SidebarContent from "./sidebar_content";
import "../../Style/menu/style.css";
import "../../Style/menu/style1.css";
const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "black",
    padding: 8,
    display: "block",
    backgroundColor: "white",
    width: 40,
    textAlign: "center"
  },
  content: {
    padding: "16px"
  }
};

export default class ResponsiveSidebar extends React.Component {
  state = {
    open: false
  };

  onSetOpen = open => {
    this.setState({ open: open });
  };

  toggleOpen = ev => {
    this.setState({ open: !this.state.open });

    if (ev) {
      ev.preventDefault();
    }
  };

  render() {
    const sidebarProps = {
      sidebar: <SidebarContent />,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen
    };

    return (
      <Sidebar {...sidebarProps}>
        <div style={styles.content}>
          <a onClick={this.toggleOpen} style={styles.contentHeaderMenuLink}>
            =
          </a>
          {this.props.children}
        </div>
      </Sidebar>
    );
  }
}
