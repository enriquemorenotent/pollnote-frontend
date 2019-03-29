import React, { useState, useEffect } from "react"
import ReactChartkick, { LineChart, PieChart } from "react-chartkick"
import Chart from "chart.js"
import axios from "axios"

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
				setPoll(response.data)
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
				console.log(response)
				return axios(
					`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
						process.env.REACT_APP_BACKEND_HOST
					}/polls/` + match.params.id
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
				<div className="column">
					<h1 className="is-size-1">{poll && poll.title}</h1>
				</div>
				<div className="columns">
					<div className="column is-two-thirds">
						{poll ? (
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
						) : (
							"Loading"
						)}
					</div>
					<div className="column is-one-third">
						<div className="box">
							{poll && (
								<>
									<h2 className="is-size-4">Results</h2>
									<hr />
									<PieChart
										data={[
											...poll.options.map(option => [
												option.title,
												poll.votes.filter(
													vote => option.id === vote.option_id
												).length
											])
										]}
									/>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Poll
