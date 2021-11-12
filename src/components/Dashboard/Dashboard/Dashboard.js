import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import AddProducts from '../AddProducts/AddProducts';
import AddReviews from '../AddReviews/AddReviews';
import AllOrders from '../AllOrders/AllOrders';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import Payment from '../Payment/Payment';
import './Dashboard.css';


const drawerWidth = 220;


function Dashboard(props) {
  const {logout} = useAuth()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawrer-styles">
     
      <Link to={'/home'}>
      <img src={logo} alt="" />
      </Link>
      
    <div className="mt-5">
    <Link to={`${url}/addproducts`}> <button className="dashbtn">Add Products</button> </Link>
    <Divider/>
    <Link to={`${url}/makeadmin`}> <button className="dashbtn">Make Admin</button> </Link>
    <Divider/>
    <Link to={`${url}/reviews`}> <button className="dashbtn">Add Reviews</button> </Link>
    <Divider/>
    <Link to={`${url}/manageallproducts`}> <button className="dashbtn">Manage All Products</button> </Link>
    <Divider/>
    <Link to={`${url}/allorders`}> <button className="dashbtn"> Manange All Orders</button> </Link>
    <Divider/>
    <Link to={`${url}/payment`}> <button className="dashbtn"> Payment</button> </Link>
    <Divider/>
    <button onClick={logout} className="dashbtn"> Logout</button>
    </div>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'  }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: '#ffe9e2', color: '#111111' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/addproducts`}>
         <AddProducts></AddProducts>
        </Route>
        <Route path={`${path}/reviews`}>
         <AddReviews></AddReviews>
        </Route>
        <Route path={`${path}/manageallproducts`}>
         <ManageAllProducts></ManageAllProducts>
        </Route>
        <Route path={`${path}/allorders`}>
         <AllOrders></AllOrders>
        </Route>
        <Route path={`${path}/payment`}>
         <Payment></Payment>
        </Route>
      </Switch>
   
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
