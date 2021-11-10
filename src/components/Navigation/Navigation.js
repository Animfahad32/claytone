import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import img from '../../images/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="nav">
       <Container>
           <Navbar.Brand href="#home">
               <img src={img} alt="" />
           </Navbar.Brand>
           <Navbar.Toggle/>
           <Navbar.Collapse className="justify-content-end">
               
               <Nav.Link as={HashLink} to="/home" className="nav-hov">Home</Nav.Link>
               <Nav.Link as={HashLink} to="/home#products" className=" nav-hov">Featured Products</Nav.Link>
               <Nav.Link   as={HashLink} to="/allproducts" className=" nav-hov">Explore All products</Nav.Link>
              
            
                   
                   {/* <button onClick={logOut} className="log-btn">Log out </button>  */}
                   <div>
                       <Nav.Link as={HashLink} to="/login" className="nav-hov">Login</Nav.Link>
                       {/* <Nav.Link as={HashLink} to="/register" className="log-btn">Register</Nav.Link> */}
                   </div>
                  
                  
                  
           
             
           
               
                    <Navbar.Text className="user-name"> 
                        Signed in as: <a href="#login" className="user-name-style">Mark</a>
                        </Navbar.Text>  
         
           
           </Navbar.Collapse>
       </Container>
       </Navbar>
       </>
    );
};

export default Navigation;