import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

function NavigationBar() {
	const appContext = useContext(AppContext);
	const handleShow = () => appContext.setShow(true);
	const handleLogout = () => appContext.setLoggedIn(false);
	// const handleLogin = () => appContext.setLoggedOut(false);

	return (
		<div>
			{!appContext.isLoggedIn ? (
				<Navbar className="navbar">
					<Container>
						<Navbar.Brand href="/" className="navbarbrand">
							My Furry Friend
						</Navbar.Brand>

						<Nav className="navbarlinks">
							<Nav.Link href="/petpage">Pet Page</Nav.Link>
							<Nav.Link onClick={handleShow}>Login / Sign Up</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			) : (
				<Navbar className="navbar">
					<Container>
						<Navbar.Brand href="/" className="navbarbrand">
							My Furry Friend
						</Navbar.Brand>

						<Nav className="navbarlinks">
							<Nav.Link href="/petpage">Pets Page</Nav.Link>
							<Nav.Link href="/adminpanel">Admin Panel</Nav.Link>
							<Nav.Link onClick={handleLogout}>Log out</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			)}
		</div>
	);
}

export default NavigationBar;
