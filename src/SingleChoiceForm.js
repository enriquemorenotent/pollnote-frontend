import React, { useState } from "react"

const SingleChoiceForm = ({ data, onVote }) => {
	const [choice, setChoice] = useState(null)

	const handleChange = id => () => {
		setChoice(id)
	}

	const handleSubmit = () => onVote([choice])

	return (
		<div className="SingleChoiceForm m-t-30">
			{data.options.map(item => (
				<div className="field" key={item.id}>
					<div className="control">
						<label className="radio">
							<input
								type="radio"
								checked={item.id === choice}
								onChange={handleChange(item.id)}
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

export default SingleChoiceForm
