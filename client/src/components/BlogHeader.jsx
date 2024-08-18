import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    {/* Brand Logo */}
                    <Navbar.Brand href="#">MyBlog</Navbar.Brand>

                    {/* Toggler/collapsibe Button */}
                    <Navbar.Toggle aria-controls="navbarNav" />

                    {/* Navbar Links */}
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="me-auto">
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </Nav>

                        {/* Search Bar */}
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default BlogHeader;
