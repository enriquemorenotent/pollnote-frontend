import React, { useState } from "react"
import Navbar from "./Navbar"
import NewPoll from "./NewPoll"
import Polls from "./Polls"
import "./App.css"

const App = () => {
	const [lastUpdate, setLastUpdate] = useState(Date.now())

	const handleSubmit = () => setLastUpdate(Date.now())

	return (
		<div className="App">
			<Navbar />
			<NewPoll onSubmit={handleSubmit} />
			<Polls onDelete={handleSubmit} lastUpdate={lastUpdate} />
		</div>
	)
}

export default App
