import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Poll = ({ data, onDelete }) => {
	const handleDelete = e => {
		e.preventDefault()
		console.log("handleDelete")
		axios
			.delete(
				`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
					process.env.REACT_APP_BACKEND_HOST
				}/polls/${data.id}`,
				{ id: data.id }
			)
			.then(response => {
				console.log(response)
				onDelete(data.id)
			})
	}

	return (
		<li className="poll">
			<Link to={`/polls/${data.id}`}>{data.title}</Link> (
			<a href="/" onClick={handleDelete}>
				Delete
			</a>
			)
		</li>
	)
}

const Polls = ({ lastUpdate, onDelete }) => {
	const [loading, setLoading] = useState(true)
	const [polls, setPolls] = useState(undefined)

	useEffect(() => {
		axios(
			`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
				process.env.REACT_APP_BACKEND_HOST
			}/polls`
		).then(response => {
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
								<Poll data={item} onDelete={onDelete} key={item.id} />
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default Polls
