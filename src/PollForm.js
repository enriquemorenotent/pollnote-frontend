import React from "react"

import ShareWidget from "./ShareWidget"
import SingleChoiceForm from "./SingleChoiceForm"
import MultiChoiceForm from "./MultiChoiceForm"

const PollForm = ({ data, onVote }) => {
	return (
		<div className="PollForm">
			<div className="columns">
				<div className="column is-half is-offset-one-quarter">
					<h1 className="is-size-1">{data && data.title}</h1>

					{data.multichoice ? (
						<p>Choose some of these options</p>
					) : (
						<p>Choose one of these options</p>
					)}

					{data.multichoice ? (
						<MultiChoiceForm {...{ data, onVote }} />
					) : (
						<SingleChoiceForm {...{ data, onVote }} />
					)}

					<ShareWidget title={data.title} />
				</div>
			</div>
		</div>
	)
}

export default PollForm
