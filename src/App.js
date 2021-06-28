import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Project from "./components/pages/Project";
import Donate from "./components/pages/Donate";

function App() {
	return (
		<>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route path="/" exact component={Home}></Route> {/* opening "/" path renders home page component*/}
					<Route path="/services" component={Services}></Route>
					<Route path="/project" component={Project}></Route>
					<Route path="/donate" component={Donate}></Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
