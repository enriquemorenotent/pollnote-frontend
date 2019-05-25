import React, { useState } from "react"
import useReactRouter from "use-react-router"
import axios from "axios"

const NewPoll = () => {
	const [title, setTitle] = useState("")
	const [options, setOptions] = useState(["", "", ""])
	const [errors, setErrors] = useState(false)
	const [multichoice, setMultichoice] = useState(false)

	const { history } = useReactRouter()

	const handleTitleChange = e => {
		setTitle(e.target.value)
	}

	const handleOptionChange = index => e => {
		let newOptions = [...options]
		newOptions[index] = e.target.value
		if (newOptions[newOptions.length - 1] !== "") newOptions.push("")
		setOptions(newOptions)
	}

	const handleSubmit = () => {
		console.log(options.filter(item => item !== ""))
		axios
			.post(
				`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
					process.env.REACT_APP_BACKEND_HOST
				}/polls`,
				{
					poll: {
						title,
						multichoice,
						options_attributes: options
							.filter(item => item !== "")
							.map(item => ({ title: item }))
					}
				}
			)
			.then(({ data }) => {
				console.log(data.id)
				history.push("/polls/" + data.id)
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
									onChange={handleTitleChange}
								/>
							</div>
						</div>
						<div className="field">
							<h2 className="is-size-4">Options</h2>
						</div>
						<div className="field">
							{options.map((item, index) => (
								<div className="field" key={index}>
									<div className="control">
										<input
											key={index}
											className="input"
											type="text"
											placeholder="Add a new option"
											value={item}
											onChange={handleOptionChange(index)}
										/>
									</div>
								</div>
							))}
						</div>
						<div className="field">
							<div className="control">
								<label className="checkbox">
									<input
										type="checkbox"
										selected={multichoice}
										onClick={() => setMultichoice(!multichoice)}
									/>{" "}
									Is multichoice?
								</label>
							</div>
						</div>
						<div className="field" />
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
