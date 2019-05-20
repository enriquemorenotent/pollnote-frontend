import React from "react"
import { BarChart } from "react-chartkick"
import "chart.js"

const PollBarChart = ({ data }) => {
	const chartData = data.options.map(option => [
		option.title,
		data.votes.filter(vote => option.id === vote.option_id).length
	])
	return <BarChart data={chartData} />
}

export default PollBarChart
