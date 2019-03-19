import React, { useState, useEffect } from "react"
import axios from "axios"

const Poll = ({ match, history }) => {
	const [poll, setPoll] = useState(null)

	useEffect(() => {
		axios("http://localhost:3000/polls/" + match.params.id)
			.then(response => {
				setPoll(response.data)
			})
			.catch(error => history.push("/"))
	}, [])

	return (
		<div className="Poll">
			<div className="container">
				{poll ? <h1 className="is-size-1">{poll.title}</h1> : "Loading"}
			</div>
		</div>
	)
}

export default Poll
