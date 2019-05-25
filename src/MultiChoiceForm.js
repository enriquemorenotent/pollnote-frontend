import React, { useState } from "react"

import OptionButton from "./OptionButton"

import "./MultiChoiceForm.scss"

const MultiChoiceForm = ({ data, onVote }) => {
	const [choices, setChoices] = useState([])

	const handleChange = id => () =>
		setChoices(choices.includes(id) ? choices.filter(x => x !== id) : [...choices, id])

	const handleSubmit = () => onVote(choices)

	return (
		<div className="MultiChoiceForm">
			<div className="options">
				{data.options.map(item => (
					<OptionButton
						key={item.id}
						multi
						checked={choices.includes(item.id)}
						onChange={handleChange(item.id)}>
						{item.title}
					</OptionButton>
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

export default MultiChoiceForm
