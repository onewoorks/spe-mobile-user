import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'

import ProductInfo from '../../components/ProductInfo.jsx'


const ProductCariProduct = () => {

    const ResultArea = () => {
        return (
            <Paper elevation={0} >
                <ProductInfo />
            </Paper>
        )
    }

    return (
        <div>
            <form action="">
                <TextField variant="outlined" size="small" />
                <Button variant="outlined" label="Cari">Cari</Button>
            </form>

            <Divider style={{marginTop:10, marginBottom:10}} />

            <ResultArea />
        </div>
    )
}

export default ProductCariProduct