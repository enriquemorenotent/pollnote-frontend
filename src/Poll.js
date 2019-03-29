import React, { useState, useEffect } from "react"
import axios from "axios"

const Poll = ({ match, history }) => {
	const [poll, setPoll] = useState(null)
	const [voting, setVoting] = useState(false)

	useEffect(() => {
		axios(`http://${process.env.REACT_APP_BACKEND_HOST}/polls/${match.params.id}`)
			.then(response => {
				setPoll(response.data)
			})
			.catch(error => history.push("/"))
	}, [])

	const handleVote = id => () => {
		axios
			.post(`http://${process.env.REACT_APP_BACKEND_HOST}/options/${id}/vote`)
			.then(response => {
				console.log(response)
				return axios(
					`http://${process.env.REACT_APP_BACKEND_HOST}/polls/` + match.params.id
				)
			})
			.then(response => {
				setPoll(response.data)
				setVoting(false)
			})
	}

	return (
		<div className="Poll">
			<div className="container">
				{poll ? (
					<div className="box">
						<h1 className="is-size-1">{poll.title}</h1>
						<hr />
						<div className="options buttons">
							{poll.options.map(option =>
								voting ? (
									<button
										key={option.id}
										className="button is-fullwidth is-link"
										disabled
									>
										{" "}
										Voting
									</button>
								) : (
									<button
										key={option.id}
										className="button is-fullwidth is-link"
										onClick={handleVote(option.id)}
									>
										{option.title} -{" "}
										{
											poll.votes.filter(vote => option.id === vote.option_id)
												.length
										}{" "}
										votes
									</button>
								)
							)}
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
