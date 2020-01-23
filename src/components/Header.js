import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand as={NavLink} to="/autocomplete">
				Google Map
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link as={NavLink} to="/autocomplete">
						Autocomplete
					</Nav.Link>
					<Nav.Link as={NavLink} to="/google-map">
						Google map
					</Nav.Link>
					{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">
							Action
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
							Another action
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">
							Something
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">
							Separated link
						</NavDropdown.Item>
					</NavDropdown> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
