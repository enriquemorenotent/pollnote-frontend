import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => (
	<nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="navbar-brand">
			<div className="logo">Pollnote</div>

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
