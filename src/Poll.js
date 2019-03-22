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
				{poll ? (
					<div className="box">
						<h1 className="is-size-1">Title: {poll.title}</h1>
						<hr />
						<div className="options buttons">
							{poll.options.map(x => (
								<button key={x.id} className="button is-fullwidth is-link">
									{x.title} - {x.votes} votes
								</button>
							))}
						</div>
					</div>
				) : (
					"Loading"
				)}
			</div>
		</div>
	)
}

export default Poll
