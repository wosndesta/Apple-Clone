import React, { Component } from "react";

class Navigation extends Component {
	render() {
		return (
			<li className="nav-item">
				<a className="nav-link js-scroll-trigger" href="#">
					{this.props.linkname}
				</a>
			</li>
		);
	}
}
export default Navigation;
