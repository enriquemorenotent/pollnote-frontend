import React from "react"

import "./OptionButton.scss"

const OptionButton = ({ children, multi, checked, onChange }) => {
	return (
		<div className="OptionButton">
			<label>
				<input type={multi ? "checkbox" : "radio"} {...{ onChange, checked }} />
				{children}
			</label>
		</div>
	)
}

export default OptionButton
