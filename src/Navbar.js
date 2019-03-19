import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => (
	<nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="navbar-brand">
			<a className="navbar-item" href="https://bulma.io">
				<img
					src="https://bulma.io/images/bulma-logo.png"
					width="112"
					height="28"
					alt="logo"
				/>
			</a>

			<a
				href="/"
				role="button"
				className="navbar-burger burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>

		<div id="navbarBasicExample" className="navbar-menu">
			<div className="navbar-start">
				<Link className="navbar-item" to="/">
					Home
				</Link>

				<a href="/" className="navbar-item">
					Documentation
				</a>

				<div className="navbar-item has-dropdown is-hoverable">
					<a href="/" className="navbar-link">
						More
					</a>

					<div className="navbar-dropdown">
						<a href="/" className="navbar-item">
							About
						</a>
						<a href="/" className="navbar-item">
							Jobs
						</a>
						<a href="/" className="navbar-item">
							Contact
						</a>
						<hr className="navbar-divider" />
						<a href="/" className="navbar-item">
							Report an issue
						</a>
					</div>
				</div>
			</div>

			<div className="navbar-end">
				<div className="navbar-item">
					<div className="buttons">
						<Link className="button is-primary" to="/polls/new">
							<strong>New poll</strong>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</nav>
)

export default Navbar
