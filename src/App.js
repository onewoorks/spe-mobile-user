import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ScreenMainPage from './screens/MainPage.jsx'
import ScreenProductProduct from './screens/product/Product.jsx'
import ScreenProductAvatar from './screens/product/Avatar.jsx'
import ScreenProductCariProduct from './screens/product/CariProduk.jsx'
import DrawerMenu from './components/DrawerMenu.jsx'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'

function App() {
    const [state, setState] = React.useState({
        left: false
    })

    const classes = useStyles()
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }
        setState({ ...state, [anchor]: open })
    }

    const list = (anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <DrawerMenu />
        </div>
    )

    return (
        <Router>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        SPE
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div style={{ marginTop:68}}>
                <Switch>
                    <Route exact path="/" component={ScreenMainPage} />
                    <Route
                        exact
                        path="/product/"
                        component={ScreenProductProduct}
                    />
                    <Route
                        exact
                        path="/product-avatar/"
                        component={ScreenProductAvatar}
                    />
                    <Route
                        exact
                        path="/product/cari-product/"
                        component={ScreenProductCariProduct}
                    />
                </Switch>
            </div>
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
