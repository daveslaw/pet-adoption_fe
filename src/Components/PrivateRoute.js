import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const appContext = useContext(AppContext);

	return (
		<Route
			{...rest}
			render={(routeProps) => {
				if (appContext.isLoggedIn) {
					return <Redirect to={"/"} />;
				} else {
					return <RouteComponent {...routeProps} />;
				}
			}}
		/>
	);
};

export default PrivateRoute;
