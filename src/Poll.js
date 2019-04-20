import React, { useState, useEffect } from "react"
import axios from "axios"
import PollResults from "./PollResults"

let canVote

const Poll = ({ match, history }) => {
	const [poll, setPoll] = useState(null)
	const [voting, setVoting] = useState(false)

	useEffect(() => {
		axios(
			`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
				process.env.REACT_APP_BACKEND_HOST
			}/polls/${match.params.id}`
		)
			.then(response => {
				canVote = response.data.canVote
				setPoll(response.data.poll)
			})
			.catch(error => history.push("/"))
	}, [])

	const handleVote = id => () => {
		axios
			.post(
				`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
					process.env.REACT_APP_BACKEND_HOST
				}/options/${id}/vote`
			)
			.then(response => {
				return axios(
					`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
						process.env.REACT_APP_BACKEND_HOST
					}/polls/` + match.params.id
				)
			})
			.then(response => {
				canVote = response.data.canVote
				setPoll(response.data.poll)
				setVoting(false)
			})
	}

	return (
		<div className="Poll">
			<div className="container">
				<div className="column">
					<h1 className="is-size-1">{poll && poll.title}</h1>
				</div>

				{!poll ? (
					"Loading"
				) : canVote ? (
					<div className="columns">
						<div className="column is-two-thirds">
							<div className="box">
								<h2 className="is-size-4">Options</h2>
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
													poll.votes.filter(
														vote => option.id === vote.option_id
													).length
												}{" "}
												votes
											</button>
										)
									)}
								</div>
							</div>
						</div>
					</div>
				) : (
					<PollResults data={poll} />
				)}
			</div>
		</div>
	)
}

export default Poll
