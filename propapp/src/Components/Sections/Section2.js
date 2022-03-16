import React, { Component } from "react";
import Section0 from "./Section0";
import Section00 from "./Section00";

class Section2 extends Component {
	render() {
		return (
			<div>
				<section className="second-section container-flud ">
					<div className="frame ">
						<Section0
							AboutBrand=" iPhone 12 Pro"
							AboutDiscription=" Pro cameras. Pro display. Pro performance."
							AboutTrade="From $24.95/mo. or $599 with trade‑in."
						/>

						<div className="more buy">
							<ul>
								<Section00
									linkname="Learn more"
									UrlLink="https://www.apple.com/shop/buy-iphone/iphone-12"
									linknameOther="Buy"
									UrlLink1="https://www.apple.com/shop/buy-iphone/iphone-12-pro"
								/>
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default Section2;
