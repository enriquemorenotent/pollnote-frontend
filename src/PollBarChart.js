import React from "react"
import { BarChart } from "react-chartkick"
import Chart from "chart.js"

const PollBarChart = ({ data }) => {
	return (
		<BarChart
			data={data.options.map(option => [
				option.title,
				data.votes.filter(vote => option.id === vote.option_id).length
			])}
		/>
	)
}

export default PollBarChart
