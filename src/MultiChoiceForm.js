import React, { useState } from "react"

const MultiChoiceForm = ({ data, onVote }) => {
	const [choices, setChoices] = useState([])

	const handleChange = id => () =>
		setChoices(choices.includes(id) ? choices.filter(x => x !== id) : [...choices, id])

	const handleSubmit = () => onVote(choices)

	return (
		<div className="MultiChoiceForm">
			{data.options.map(item => (
				<div className="field" key={item.id}>
					<div className="control">
						<label className="checkbox">
							<input
								type="checkbox"
								onChange={handleChange(item.id)}
								checked={choices.includes(item.id)}
							/>{" "}
							{item.title} -{" "}
							{data.votes.filter(vote => item.id === vote.item_id).length} votes
						</label>
					</div>
				</div>
			))}
			<div className="field is-grouped is-grouped-right">
				<div className="control">
					<button className="button is-link" onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</div>
	)
}

export default MultiChoiceForm
