import React, { Component } from 'react'
import Section0 from './Section0';
import Section00 from './Section00';

 class Section3 extends Component {
    render() {
        return (
					<div>
						<section className="third-section">
							<div className="frame trade-in">
								<Section0
									AboutBrand=" iphone 13"
									AboutDiscription=" Just the right amount of everything."
									AboutTrade="From $16.62. or $399 with trade-in."
								/>

								<div className="more">
									<ul>
										<Section00
											linkname="Learn more"
											UrlLink="https://www.apple.com/shop/buy-iphone/iphone-13"
											linknameOther="Buy"
											UrlLink1="https://www.apple.com/shop/buy-iphone/iphone-13-pro"
										/>
									</ul>
								</div>
							</div>
						</section>
					</div>
				);
    }
}
export default Section3