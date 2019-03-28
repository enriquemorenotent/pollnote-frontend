import React, { useState } from "react"
import { Route } from "react-router-dom"
import axios from "axios"

const NewPoll = ({ onSubmit }) => {
	const [title, setTitle] = useState("")
	const [options, setOptions] = useState([])
	const [newOption, setNewOption] = useState("")
	const [errors, setErrors] = useState(false)

	const handleChange = e => {
		setTitle(e.target.value)
	}

	const handleKeyPress = e => {
		if (e.key === "Enter") {
			setOptions([...options, { title: e.target.value }])
			setNewOption("")
		}
	}

	return (
		<Route>
			{({ history }) => {
				const handleSubmit = () => {
					axios
						.post("http://localhost:3000/polls", {
							poll: { title },
							options
						})
						.then(response => {
							history.push("/")
						})
						.catch(error => {
							setErrors(error.response.data)
						})
				}

				return (
					<div className="NewPoll">
						<div className="container">
							<div className="columns">
								<div className="column">
									<h1 className="is-size-1">New poll</h1>
									{errors && (
										<div className="field">
											<div className="notification is-danger">
												<h1 className="is-size-4">Errors found</h1>
												<ul>
													{errors.map((error, index) => (
														<li key={index}>- {error}</li>
													))}
												</ul>
											</div>
										</div>
									)}
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
									<div className="field">
										<h2 className="is-size-4">Options</h2>
									</div>
									<div className="field">
										<ul>
											{options.map((item, index) => (
												<li key={index}>{item.title}</li>
											))}
										</ul>
									</div>
									<div className="field">
										<input
											className="input"
											type="text"
											placeholder="Add a new option"
											value={newOption}
											onChange={e => setNewOption(e.target.value)}
											onKeyPress={handleKeyPress}
										/>
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
