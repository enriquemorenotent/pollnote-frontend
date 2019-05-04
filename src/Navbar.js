import React from "react"
import { Link } from "react-router-dom"

import "./NavBar.css"

const Navbar = () => (
	<nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="navbar-brand">
			<a class="navbar-item" href="/">
				<div className="logo">Pollnote</div>
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
				<Link className="navbar-item is-link" to="/list">
					List
				</Link>
			</div>

			<div className="navbar-end">
				<div className="navbar-item">
					<div className="buttons">
						<Link className="button is-primary" to="/">
							<strong>New poll</strong>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</nav>
)

export default Navbar
