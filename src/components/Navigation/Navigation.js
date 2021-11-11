import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import img from '../../images/logo.png';
import './Navigation.css';

const Navigation = () => {
    const {user, logout} = useAuth()
    return (
        <>
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="nav">
       <Container>
           <Navbar.Brand>
               <Link to="/home">
               <img src={img} alt="" />
               </Link>
           </Navbar.Brand>
           <Navbar.Toggle/>
           <Navbar.Collapse className="justify-content-end">
               
               <Nav.Link as={HashLink} to="/home" className="nav-hov">Home</Nav.Link>
               <Nav.Link as={HashLink} to="/home#products" className=" nav-hov">Featured Products</Nav.Link>
               <Nav.Link   as={HashLink} to="/allproducts" className=" nav-hov">Explore All products</Nav.Link>
              
            
                 {
                     user?.email ?
                       
                   <div className="logs-style">
                       <button onClick={logout} className="logoutbtn">Log out </button>
                       <Nav.Link as={HashLink} to="/dashboard" className="nav-hov">Dashboard</Nav.Link>
                   </div>  :
                   <div className="logs-style">
                   <Nav.Link as={HashLink} to="/login" className="nav-hov">Login</Nav.Link>
                    <Nav.Link as={HashLink} to="/register" className="nav-hov">Register</Nav.Link> 
               </div>
                 }
                  
                  
                  
           
                 {
                     user?.email &&
                     <Navbar.Text className="user-name"> 
                     Signed in as: <a href="#login" className="user-name-style">{user?.displayName}</a>
                     </Navbar.Text> 
                 }
           
               
                    
         
           
           </Navbar.Collapse>
       </Container>
       </Navbar>
       </>
    );
};

export default Navigation;