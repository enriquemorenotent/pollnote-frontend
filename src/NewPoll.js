import React, { useState } from "react"
import { Route } from "react-router-dom"
import axios from "axios"

const NewPoll = ({ onSubmit }) => {
	const [title, setTitle] = useState("")

	const handleChange = e => {
		setTitle(e.target.value)
	}

	return (
		<Route>
			{({ history }) => {
				const options = [{ title: "o1" }, { title: "o2" }]
				const handleSubmit = () => {
					axios
						.post("http://localhost:3000/polls", {
							poll: { title },
							options
						})
						.then(response => {
							history.push("/")
						})
				}

				return (
					<div className="NewPoll">
						<div className="container">
							<div className="columns">
								<div className="column">
									<h1 className="is-size-1">New poll</h1>
									<div className="field">
										<label className="label">Name</label>
										<div className="control">
											<input
												className="input"
												type="text"
												placeholder="Text input"
												value={title}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className="field has-text-danger">
										<p>Manually added 2 options! Make this custom.</p>
									</div>
									<div className="field is-grouped">
										<div className="control">
											<button
												className="button is-link"
												onClick={handleSubmit}
											>
												Submit
											</button>
										</div>
										<div className="control">
											<button className="button is-text">Cancel</button>
										</div>
									</div>

									<hr />
								</div>
							</div>
						</div>
					</div>
				)
			}}
		</Route>
	)
}
export default NewPoll
