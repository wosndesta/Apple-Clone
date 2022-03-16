import React from "react";
// import { Link } from "react-router-dom";
// import Navigation from "./Navigation";
import logo from '../images/icons/logo.png';
import search from '../images/icons/search-icon.png';
import cart from "../images/icons/cart.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import '../Css/stylea.css'



function Navigatione() {
	return (
		<div className="nav-wrapper fixed-top ">
			<div className="container">
				<Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Brand href="/">
						<img className="appimg" src={logo} alt="" />
					</Navbar.Brand>

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="nav-justified w-100 nav-fill">
							<Nav.Link className="nav-link" href="/mac">
								Mac
							</Nav.Link>
							<Nav.Link href="/iphone">iphone</Nav.Link>
							<Nav.Link href="/ipad">ipad</Nav.Link>
							<Nav.Link href="/watch">watch</Nav.Link>
							<Nav.Link href="/tv">tv</Nav.Link>
							<Nav.Link href="/music">Music</Nav.Link>
							<Nav.Link href="/support">Support</Nav.Link>
							<Nav.Link href="/search">
								<img src={search} alt="" />
							</Nav.Link>
							<Nav.Link href="/cart">
								<img src={cart} alt="" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
}

export default Navigatione;



//  function Navigatione() {
// 	return (
// 			<div>
// 				<div className="nav-wrapper fixed-top">
// 					<div className="container">
// 						<nav className="navbar navbar-toggleable-sm navbar-expand-md">
// 							<button
// 								className="navbar-toggler navbar-toggler-right"
// 								type="button"
// 								data-bs-toggle="collapse"
// 								data-bs-target="#navbar-collapse"
// 							>
// 								☰
// 							</button>

// 							<a className="navbar-brand mx-auto" href="#">
// 								<img src={logo} />{" "}
// 							</a>

// 							<div className="navbar-collapse collapse" id="navbar-collapse">
// 								<ul className="navbar-nav nav-justified w-100 nav-fill">
// 									<Navigation linkname="Mac" />
// 									<Navigation linkname="iphone" />
// 									<Navigation linkname="ipad" />
// 									<Navigation linkname="Watch" />
// 									<Navigation linkname="Tv" />
// 									<Navigation linkname="Music" />
// 									<Navigation linkname="Support" />
// 									<li className="nav-item">
// 										<a className="nav-link js-scroll-trigger" href="#">
// 											<img src={search} />{" "}
// 										</a>
// 									</li>
// 									<li className="nav-item">
// 										<a className="nav-link js-scroll-trigger" href="#">
// 											<img src={cart} />{" "}
// 										</a>
// 									</li>
// 								</ul>
// 							</div>
// 						</nav>
// 					</div>
// 				</div>
// 			</div>
// 	)
// }

// export default Navigatione;

