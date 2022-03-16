import React, { Component } from "react";
// import mac from "../images/home/mac-laptop.jpg";
import aplog from "../images/home/aplog-1.png"
import headp from "../images/home/headphone-2.png"
import series from "../images/home/series.png"
import iphone13 from "../images/home/iphone13-3.png"

import Section0 from "./Section0";
import Section00 from "./Section00"



class Section1 extends Component {
	render() {
		return (
			<div>
				<section className="first-section ">
					<div className="frame">
						<img src={aplog} />
						<Section0
							// AboutSize="16-inch model"
							AboutBrand=" Last-minute gift for every last one."
							// AboutDiscription=" The best for the brightest."
						/>
						<div className="more">
							<ul>
								<Section00
									linkname="Learn more"
									UrlLink="https://www.apple.com/macbook-pro-14-and-16/"
									linknameOther="Buy"
									UrlLink1="https://www.apple.com/shop/gifts"
								/>
							</ul>
						</div>
						<div className="focal">
							<ul className="mar">
								<li>
									<img src={headp} />
								</li>
								<li className="midle">
								
									<img src={series} />
								</li>
								<li>
							
									<img src={iphone13} />
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
	}
}


export default Section1;
