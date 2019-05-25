import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Loader from "./Loader"

import "./Polls.scss"

const baseUrl = `${process.env.REACT_APP_BACKEND_PROTOCOL}://${process.env.REACT_APP_BACKEND_HOST}`

const Poll = ({ data, onDelete }) => {
	const handleDelete = e => {
		e.preventDefault()
		axios
			.delete(`${baseUrl}/polls/${data.id}`, { id: data.id })
			.then(response => onDelete(data.id))
	}

	return (
		<div className="poll">
			<Link to={`/polls/${data.id}`}>{data.title}</Link>
			<i className="fas fa-trash-alt" onClick={handleDelete} />
		</div>
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
					<Loader />
				) : (
					<div className="content">
						<p>Polls found: {polls.length}</p>
						{polls.map(item => (
							<Poll data={item} onDelete={onDelete} key={item.id} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Polls
