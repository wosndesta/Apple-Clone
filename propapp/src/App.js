import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Navigatione from './Components/Header/Nav';
import Section1 from './Components/Sections/Section1';
import Section2 from './Components/Sections/Section2';
import Section3 from './Components/Sections/Section3'
import Section4 from './Components/Sections/Section4';
import Section5 from './Components/Sections/Section5';
import Section6 from './Components/Sections/Section6';

import NewsChanal from './Components/YouTubeVidio/NewsChanal';

import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";
import Ipad from "./Pages/Ipad/ipad";








 function App() {
  return (
		<Router>
			<div>
				<Navigatione />
				<Route path="/" exact component={Section1} />
				<Route path="/" exact component={Section2} />
				<Route path="/" exact component={Section3} />
				<Route path="/" exact component={Section4} />
				<Route path="/" exact component={Section5} />
				<Route path="/" exact component={Section6} />

				<Switch>
					<Route path="/" exact component={NewsChanal} />
					<Route path="/iphone" exact component={Iphone} />
					<Route path="/mac" exact component={Mac} />
					<Route path="/ipad" exact component={Ipad } />

					<Route path="/iphone/:pid" exact component={Productpage} />
					<Route path="/" component={Four04} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}


export default App;
