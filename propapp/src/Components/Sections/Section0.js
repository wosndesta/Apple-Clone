import React, { Component } from "react";

class Section0 extends Component {
	render() {
		return (
			<div>
				<div className="model">{this.props.AboutSize}</div>
				<div className="mac-pro">{this.props.AboutBrand}</div>
				<div className="brightest">{this.props.AboutDiscription}</div>
				<div className="trade">{this.props.AboutTrade}</div>
				<div className="performance with">{this.props.AboutApperance}</div>
			
			</div>
		);
	}
}

export default Section0;
