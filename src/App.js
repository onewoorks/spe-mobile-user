import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ScreenMainPage from './screens/MainPage.jsx'
import ScreenProductProduct from './screens/product/Product.jsx'
import ScreenProductAvatar from './screens/product/Avatar.jsx'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function App() {
    const classes = useStyles()
    return (
        <Router>
            <AppBar position="static">
            <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/" component={ScreenMainPage} />
                <Route path="/product/" component={ScreenProductProduct} />
                <Route path="/product-avatar/" component={ScreenProductAvatar} />
            </Switch>
            <Button color="primary" variant="contained">Login</Button>
        </Router>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default App
