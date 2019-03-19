import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./Navbar"
import NewPoll from "./NewPoll"
import Polls from "./Polls"
import Poll from "./Poll"
import "./App.css"

const App = () => {
	const [lastUpdate, setLastUpdate] = useState(Date.now())

	const handleSubmit = () => setLastUpdate(Date.now())

	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/polls/new">
					<NewPoll onSubmit={handleSubmit} />
				</Route>
				<Route path="/polls/:id" component={Poll} />
				<Route>
					<Polls onDelete={handleSubmit} lastUpdate={lastUpdate} />
				</Route>
			</Switch>
		</div>
	)
}

export default App
