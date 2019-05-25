import React, { useState } from "react"

import "./SingleChoiceForm.scss"

const SingleChoiceForm = ({ data, onVote }) => {
	const [choice, setChoice] = useState(null)

	const handleChange = id => () => {
		setChoice(id)
	}

	const handleSubmit = () => onVote([choice])

	return (
		<div className="SingleChoiceForm m-t-30">
			<div className="options">
				{data.options.map(item => (
					<label className="option" key={item.id}>
						<input
							type="radio"
							checked={item.id === choice}
							onChange={handleChange(item.id)}
						/>
						Option
					</label>
				))}
			</div>
			<div className="field is-grouped is-grouped-right">
				<div className="control">
					<button className="button is-success" onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</div>
	)
}

export default SingleChoiceForm
