import React from "react"
import PollPieChart from "./PollPieChart"
import PollBarChart from "./PollBarChart"

const PollResults = ({ data }) => {
	console.log("Pollresults", data)
	return (
		<div className="PollResults">
			<div className="container">
				<div className="column">
					<h1 className="is-size-1">{data.title}</h1>
					<div className="columns">
						<div className="column is-two-thirds">
							<PollBarChart data={data} />
						</div>
						<PollPieChart data={data} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PollResults
