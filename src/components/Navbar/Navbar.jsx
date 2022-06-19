import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Image } from "../Shared/Image/Image";
import LogoSrc from "../../assets/img/logo.svg";
import CartSrc from "../../assets/img/cart.svg";
import UserSrc from "../../assets/img/user.svg";
import SearchSrc from "../../assets/img/search.svg";

import "./Navbar.scss";

export const NavbarBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar className='py-4' expand='lg'>
            <Container>
                <Navbar.Brand href='#home' className='d-flex d-lg-none me-auto'>
                    <Image type='logo' src={LogoSrc} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className=''>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#link'>Link</Nav.Link>
                    </Nav>

                    <Navbar.Brand
                        href='#home'
                        className='d-none d-lg-flex m-auto'>
                        <Image src={LogoSrc} />
                    </Navbar.Brand>
                    <Form>
                        <Form.Group
                            className='navbar-search me-3'
                            controlId='formBasicEmail'>
                            <Image type='img' src={SearchSrc} />
                            <Form.Control
                                type='text'
                                placeholder='Seaech Here'
                            />
                        </Form.Group>
                    </Form>
                    <Nav className=''>
                        <Nav.Link href='#home' className=' me-3'>
                            <Image type='img' src={CartSrc} />
                        </Nav.Link>
                        <Nav.Link href='#link'>
                            <Image type='img' src={UserSrc} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
