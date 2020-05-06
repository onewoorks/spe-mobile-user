import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}))
const MenuBlock = () => {
    const styles = useStyles()

    const MenuBox = (props) => {
        return (
            <Grid item xs={6}>
                <Paper elevation={0} className={styles.paper}>
                    <Link to={`/${props.page}`}>Upload Product To Web</Link>
                </Paper>
            </Grid>
        )
    }

    return (
        <Grid container spacing={2}>
            <MenuBox page="product" />
            <MenuBox page="product/cari-product" />
            <MenuBox page="product" />
            <MenuBox page="product" />
        </Grid>
    )
}

export default MenuBlock
