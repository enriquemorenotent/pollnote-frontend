import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Polls = ({ lastUpdate, onDelete }) => {
	const [loading, setLoading] = useState(true)
	const [polls, setPolls] = useState(undefined)

	const handleDelete = id => {
		console.log("handleDelete")
		axios
			.delete(`http://${process.env.REACT_APP_BACKEND_HOST}/polls/${id}`, { id })
			.then(response => {
				console.log(response)

				onDelete()
			})
	}

	useEffect(() => {
		axios(`http://${process.env.REACT_APP_BACKEND_HOST}/polls`).then(response => {
			setPolls(response.data)
		})
	}, [lastUpdate])

	useEffect(() => {
		if (polls) {
			setLoading(false)
		}
	}, [polls])

	return (
		<div className="Polls">
			<div className="container">
				<h1 className="is-size-1">Polls</h1>
				{loading ? (
					"Loading"
				) : (
					<div className="content">
						<p>Polls found: {polls.length}</p>
						<ul>
							{polls.map(item => (
								<li className="poll" key={item.id}>
									<Link to={`/polls/${item.id}`}>{item.title}</Link> (
									<a href="/" onClick={() => handleDelete(item.id)}>
										Delete
									</a>
									)
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default Polls
