import React, { Component } from 'react'
import watch from "../images/icons/watch-series5-logo.png"
import card from "../images/icons/apple-card-logo.png"
import Section0 from './Section0'
import Section00 from './Section00'

 class Section4 extends Component {
    render() {
        return (
					<div>
						<section className="fourth-section container-fluid">
							<div className="row">
								<div className="  col-md-6">
									<div className="left-section and">
										<div className="series">
											<div className="ausome">
												<img src={watch} alt="" />
											</div>
										</div>

										{/* <div classNameName="performance with">
                        With the new Always-On Retina display.<br/>
                        You’ve never seen a watch like this.
                    </div> */}
										<Section0 AboutApperance="With the new Always-On Retina display.You’ve never seen a watch like this." />

										<div className="more">
											<ul>
												<Section00
													linkname="Learn more"
													UrlLink="https://www.apple.com/apple-watch-series-7/"
													linknameOther="Buy"
													UrlLink1="https://www.apple.com/shop/buy-watch/apple-watch"
												/>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-md-6 ">
									<div div className="right-section but">
										<div className="series">
											<div className="ausome">
												<img src={card} alt="" />
											</div>
										</div>

										<div className="performance with">
											With the new Always-On Retina display.
											<br />
											You’ve never seen a watch like this.
										</div>

										<div className="more">
											<ul>
												<li>
													<a href="">Learn more</a>
												</li>
												<li>
													<a href="">Buy</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				);
    }
}
export default Section4