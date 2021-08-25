import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
// import ProfileSettings from "./Components/ProfileSettings";
// import axios from "axios";

import PetCard from "./Components/PetCard";
import { AppContext } from "./Context/AppContext";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginModal from "./Components/LoginModal";
import PrivateRoute from "./Components/PrivateRoute.js";
import AdminPanel from "./Components/AdminPanel";
import Home from "./Components/Home";
import AddPet from "./Components/AddPet";

function App() {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [show, setShow] = useState(false);

	const [petDataArray, setPetDataArray] = useState([]);
	const [petData, setPetData] = useState({});
	const [userArray, setUserArray] = useState([]);

	return (
		<div className="App main-wrapper">
			<AppContext.Provider
				value={{
					isLoggedIn: isLoggedIn,
					setLoggedIn: setLoggedIn,
					show: show,
					setShow: setShow,

					petDataArray: petDataArray,
					setPetDataArray: setPetDataArray,
					userArray: userArray,
					setUserArray: setUserArray,
					petData: petData,
					setPetData: setPetData,
				}}
			>
				<Router>
					<Navbar />
					<LoginModal />

					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/petpage" component={PetCard}></Route>
						<PrivateRoute exact path="/adminpanel" component={AdminPanel} />
						<PrivateRoute exact path="/addpet" component={AddPet} />
					</Switch>
				</Router>
			</AppContext.Provider>
		</div>
	);
}

export default App;
