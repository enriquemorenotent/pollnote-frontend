import React from "react"
import { PieChart } from "react-chartkick"

const PollPieChart = ({ data }) => {
	return (
		<PieChart
			data={[
				...data.options.map(option => [
					option.title,
					data.votes.filter(vote => option.id === vote.option_id).length
				])
			]}
		/>
	)
}

export default PollPieChart
