import React, { Component } from 'react'

class Section00 extends Component {
    render() {
        return (
					<div>
						<li>
							<a href={this.props.UrlLink}>{this.props.linkname}</a>
						</li>
						<li>
							<a href={this.props.UrlLink1}>{this.props.linknameOther}</a>
						</li>
					</div>
				);
    }
}
export default Section00