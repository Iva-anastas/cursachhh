import React, {Component} from 'react';
import {Container, Form, FormControl, Nav, Navbar, Button} from "react-bootstrap";
import logo from '../assets/logo.png'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import GalleryPicture from "../Pages/GalleryPicture";
import Tidings from "../Pages/Tidings";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar sticky={"top"} collapseOnSelect expand="md" bg="light" variant={"light"}>
          <Container>
            <Navbar.Brand href={"/"}>
              <img
                src={logo}
                height='60'
                width='70'
                className="d-lg-inline-block align-content-center"
                alt={'logo'}
                backgroundColor='black'
                borderRadius="3px"
              /> Бухгалтерія
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto my-2 my-lg-0">
                <Nav.Link href='/'> Головна сторінка </Nav.Link>
                <Nav.Link href='/galleryPicture'> Галерея </Nav.Link>
                <Nav.Link href='/news'> Новини </Nav.Link>
                <Nav.Link href='/contacts'> Контакти </Nav.Link>
              </Nav>
              <Form style={{display: "flex"}}>
                <FormControl
                  type='text'
                  placeholder='Search'
                  className='mr-sm-2'
                />
                <Button style={{marginLeft: '10px'}} variant='outline-info'>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/galleryPicture' element={<GalleryPicture/>}/>
            <Route exact path='/news' element={<Tidings/>}/>
            <Route exact path='/contacts' element={<Contacts/>}/>
          </Routes>
        </Router>
      </>
    );
  }
}

export default Header;
