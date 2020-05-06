import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ScreenMainPage from './screens/MainPage.jsx'
import ScreenProductProduct from './screens/product/Product.jsx'
import ScreenProductAvatar from './screens/product/Avatar.jsx'
import ScreenProductCariProduct from './screens/product/CariProduk.jsx'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'

function App() {
    const classes = useStyles()
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container style={{marginTop:15}}>
                <Switch>
                
                    <Route exact path="/" component={ScreenMainPage} />
                    <Route exact path="/product/" component={ScreenProductProduct} />
                    <Route exact
                        path="/product-avatar/"
                        component={ScreenProductAvatar}
                    />
                    <Route exact path="/product/cari-product/" component={ScreenProductCariProduct} />
                    
                </Switch>
            </Container>
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
}))

export default App
