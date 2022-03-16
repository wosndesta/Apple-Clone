import React, { Component } from 'react'
import newipad from "../images/icons/new-ipad-logo.png"

import NewsChanal from '../YouTubeVidio/NewsChanal'





// import NewsChanal from '../YouTubeVidio&News/NewsChanal'


 class Section6 extends Component {
    render() {
        return (
            <div>
                  <section className="six-section container-flud">
        <div className="row">
            <div className="col-md-6">
                <div className="left-frame and">
                    <div className="model">
                        16-inch model
                    </div>
                    <div className="mac-pro-left">
                        MacBook Pro
                    </div>
                    <div className="brightest-best">
                        The best for the brightest.
                    </div>
                    <div className="more">
                        <ul>
                            <li><a href="">Learn more</a> </li>
                            <li><a href="">Buy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="six-right-section but">
                    <div>
                        <div className="to-logo">
                            <img src={newipad}/>
                        </div>
                    </div>

                    <div className="performance with">
                        Like a computer. Unlike any computer.
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
    </section>

                
            </div>
        )
    }
 }

<section>
   
	<NewsChanal/>
	{/* <AppleNews /> */}
	
</section>;
export default Section6;