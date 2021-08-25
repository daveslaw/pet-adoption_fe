import React from "react";
import pug from "../Images/pug-801826_1920.jpg";
import { useContext } from "react";

import { AppContext } from "../Context/AppContext";
import { Button } from "@material-ui/core";

function Home() {
	const appContext = useContext(AppContext);
	const handleShow = () => appContext.setShow(true);

	return (
		<div className="home-wrapper">
			<div className="body-container">
				<div className="body-heading">My Furry Friend</div>
				<div className="body-element">
					The online pet adoption community where people who want to adopt a pet
					connect with people who need to rehome their furry friend.
				</div>
			</div>
			<img className="homepage-image" src={pug} alt="dog-homepage"></img>
			<div className="center-button">
				<Button variant="contained" color="primary" onClick={handleShow}>
					Sign up here
				</Button>
			</div>
		</div>
	);
}

export default Home;
