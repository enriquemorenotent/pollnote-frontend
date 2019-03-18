import React, { useState, useEffect } from "react"
import axios from "axios"

const Polls = ({ lastUpdate, onDelete }) => {
	const [loading, setLoading] = useState(true)
	const [polls, setPolls] = useState(undefined)

	const handleDelete = id => {
		console.log("handleDelete")
		axios.delete(`http://localhost:3000/polls/${id}`, { id }).then(response => {
			console.log(response)

			onDelete()
		})
	}

	useEffect(() => {
		axios("http://localhost:3000/polls").then(response => {
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
				<div />

				{loading ? (
					"Loading"
				) : (
					<div className="content">
						<p>Polls found: {polls.length}</p>
						<p>
							<ul>
								{polls.map(item => (
									<li className="poll" key={item.id}>
										{item.title}{" "}
										<a href="/" onClick={() => handleDelete(item.id)}>
											Delete
										</a>
									</li>
								))}
							</ul>
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Polls
