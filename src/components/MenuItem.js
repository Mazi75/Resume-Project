import React from "react";
import { Link } from "react-scroll";

class MenuItem extends React.Component {
  render() {
    const { submenu } = this.props;
    return (
      <Link activeClass="active" to={submenu.to}>
        <li>{submenu.content}</li>
      </Link>
    );
  }
}
export default MenuItem;
