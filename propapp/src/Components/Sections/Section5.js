import React, { Component } from 'react'
import appletvp from "../images/icons/apple-tv-logo.png"
import serventpng from "../images/icons/servant-logo.png"

 class Section5 extends Component {
    render() {
        return (
					<div>
						  <section className="fivth-section container-fluid">
        <div className="row">
            <div className="col-md-6">
                <div className="second-left-section and ">
                    <div className="fivth-left-margin">
                        <div className="series">
                            <div className="ausome">
                                <img src={appletvp} alt=""/>
                            </div>
                        </div>

                        <div className="servant">
                                        <img src={ serventpng}alt=""/>
                        </div>
                        <div className="watch-more">
                            <a href="#">Watch the trailer</a>
                        </div>

                        <div className="more">
                            <ul>
                                <li><a href="">Learn more</a></li>
                                <li><a href="">Buy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="fivth-right-section but ">
                    <div className="fivth-right-margin">
                        <div className="air">
                            AirPods Pro
                        </div>

                        <div className="performance with">
                            Magic like you've never heard.
                        </div>

                        <div className="more buy">
                            <ul>
                                <li><a href="">Learn more</a></li>
                                <li><a href="">Buy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
					</div>
				);
    }
}
export default Section5;