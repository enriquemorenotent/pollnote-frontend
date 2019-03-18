import React, { useState } from "react"
import axios from "axios"

const NewPoll = ({ onSubmit }) => {
	const [title, setTitle] = useState("")

	const handleChange = e => {
		setTitle(e.target.value)
	}

	const handleSubmit = () => {
		axios.post("http://localhost:3000/polls", { title }).then(response => {
			console.log(response)
			onSubmit()
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
						<div className="field is-grouped">
							<div className="control">
								<button className="button is-link" onClick={handleSubmit}>
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
}
export default NewPoll
