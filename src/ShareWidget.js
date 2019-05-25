import React from "react"
import {
	FacebookShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	RedditShareButton,
	FacebookIcon,
	TwitterIcon,
	TelegramIcon,
	WhatsappIcon,
	RedditIcon
} from "react-share"

import "./ShareWidget.scss"

const ShareWidget = ({ title }) => {
	return (
		<div className="ShareWidget">
			<div className="box">
				<h4 className="is-size-5">Share:</h4>
				{window.location.href}
				<div className="share-icons">
					<FacebookShareButton
						url={window.location.href}
						quote={`Its pollnote time. ${title}`}>
						<FacebookIcon size={40} round={false} />
					</FacebookShareButton>
					<TwitterShareButton
						url={window.location.href}
						title={`Its pollnote time. ${title}`}>
						<TwitterIcon size={40} round={false} />
					</TwitterShareButton>
					<TelegramShareButton
						url={window.location.href}
						title={`Its pollnote time. ${title}`}>
						<TelegramIcon size={40} round={false} />
					</TelegramShareButton>
					<WhatsappShareButton
						url={window.location.href}
						title={`Its pollnote time. ${title}`}>
						<WhatsappIcon size={40} round={false} />
					</WhatsappShareButton>
					<RedditShareButton url={window.location.href}>
						<RedditIcon size={40} round={false} />
					</RedditShareButton>
				</div>
			</div>
		</div>
	)
}

export default ShareWidget
