import React, { useState, useEffect } from "react"
import axios from "axios"
import {
	FacebookShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	PinterestShareButton,
	RedditShareButton,
	TumblrShareButton,
	EmailShareButton,
	FacebookIcon,
	TwitterIcon,
	TelegramIcon,
	WhatsappIcon,
	PinterestIcon,
	RedditIcon,
	TumblrIcon,
	EmailIcon
} from "react-share"

import PollResults from "./PollResults"

import "./Poll.css"

const Poll = ({ match, history }) => {
	const [poll, setPoll] = useState(null)
	const [voting, setVoting] = useState(false)

	useEffect(() => {
		axios(
			`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
				process.env.REACT_APP_BACKEND_HOST
			}/polls/${match.params.id}`
		)
			.then(response => {
				setPoll({ ...response.data.poll, canVote: response.data.canVote })
			})
			.catch(error => history.push("/"))
	}, [])

	const handleVote = id => () => {
		axios
			.post(
				`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
					process.env.REACT_APP_BACKEND_HOST
				}/options/${id}/vote`
			)
			.then(response => {
				return axios(
					`${process.env.REACT_APP_BACKEND_PROTOCOL}://${
						process.env.REACT_APP_BACKEND_HOST
					}/polls/` + match.params.id
				)
			})
			.then(response => {
				setPoll({ ...response.data.poll, canVote: response.data.canVote })
				setVoting(false)
			})
	}

	return (
		<div className="Poll">
			<div className="container">
				{!poll ? (
					"Loading"
				) : poll.canVote ? (
					<>
						<div className="column">
							<h1 className="is-size-1">{poll && poll.title}</h1>
						</div>
						<div className="columns">
							<div className="column is-two-thirds">
								<div className="box">
									<h2 className="is-size-4">Options</h2>
									<div className="options buttons">
										{poll.options.map(option =>
											voting ? (
												<button
													key={option.id}
													className="button is-fullwidth is-link"
													disabled
												>
													{" "}
													Voting
												</button>
											) : (
												<button
													key={option.id}
													className="button is-fullwidth is-link"
													onClick={handleVote(option.id)}
												>
													{option.title} -{" "}
													{
														poll.votes.filter(
															vote => option.id === vote.option_id
														).length
													}{" "}
													votes
												</button>
											)
										)}
									</div>
								</div>
								<div className="box">
									<h4 className="is-size-5">Share:</h4>
									<div className="share-icons">
										<FacebookShareButton url={window.location.href}>
											<FacebookIcon size={40} round={false} />
										</FacebookShareButton>
										<TwitterShareButton url={window.location.href}>
											<TwitterIcon size={40} round={false} />
										</TwitterShareButton>
										<TelegramShareButton url={window.location.href}>
											<TelegramIcon size={40} round={false} />
										</TelegramShareButton>
										<WhatsappShareButton url={window.location.href}>
											<WhatsappIcon size={40} round={false} />
										</WhatsappShareButton>
										<PinterestShareButton url={window.location.href}>
											<PinterestIcon size={40} round={false} />
										</PinterestShareButton>
										<RedditShareButton url={window.location.href}>
											<RedditIcon size={40} round={false} />
										</RedditShareButton>
										<TumblrShareButton url={window.location.href}>
											<TumblrIcon size={40} round={false} />
										</TumblrShareButton>
										<EmailShareButton url={window.location.href}>
											<EmailIcon size={40} round={false} />
										</EmailShareButton>
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<PollResults data={poll} />
				)}
			</div>
		</div>
	)
}

export default Poll
