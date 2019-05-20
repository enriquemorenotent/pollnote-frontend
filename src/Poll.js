import React, { useState, useEffect } from "react"
import axios from "axios"

import PollResults from "./PollResults"
import PollForm from "./PollForm"

import "./Poll.css"

const BASE_URL = `${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_HOST}`

const Poll = ({ match, history }) => {
	const [data, setData] = useState(null)

	useEffect(() => {
		axios(`${BASE_URL}/polls/${match.params.id}`)
			.then(response => setData({ ...response.data }))
			.catch(error => history.push("/"))
	}, [])

	const handleVote = options => {
		axios.post(`${BASE_URL}/polls/${match.params.id}/vote`, { options })
		// .then(response => axios(`${BASE_URL}/polls/` + match.params.id))
		// .then(response => setData({ ...response.data }))
	}

	return (
		<div className="Poll">
			<div className="container">
				{!data ? (
					"Loading"
				) : data.canVote ? (
					<PollForm data={data.poll} onVote={handleVote} />
				) : (
					<PollResults data={data.poll} />
				)}
			</div>
		</div>
	)
}

export default Poll
