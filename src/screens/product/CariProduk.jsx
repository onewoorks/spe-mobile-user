import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'

import ProductInfo from '../../components/ProductInfo.jsx'
import CommerceInfo from '../../components/CommerceInfo.jsx'

import axios from 'axios'

const ProductCariProduct = (props) => {
    const [productDetail, setProductDetail] = React.useState(false)
    const [modalOpen, setModalOpen] = React.useState(false)
    const [boxCari, setBoxCari] = React.useState(true)
    const [productData, setProductData] = React.useState(null)

    const handleModal = () => {
        setModalOpen(false)
    }

    const handleUpdateWebProduct = () => {
        setModalOpen(true)
        setProductDetail(false)
    }

    const CariForm = () => {
        const handleCari = () => {
            axios.get('http://192.168.0.198:3003').then((response) => {
                setBoxCari(false)
                setProductDetail(true)
                setProductData({
                    nama: "ini barangnya",
                    berat: "ini beratnya"
                })
            })
        }
        return (
            <Container>
                <form action="">
                    <TextField variant="outlined" size="small" type="number" />
                    <Button
                        variant="outlined"
                        label="Cari"
                        onClick={handleCari}
                    >
                        Cari
                    </Button>
                </form>
            </Container>
        )
    }

    const ResultArea = () => {
        return (
            <>
                <ProductInfo />
                <div>
                    <Button
                        onClick={() => handleUpdateWebProduct()}
                        variant="contained"
                        size="large"
                        color="primary"
                        disableElevation
                        style={{ width: window.innerWidth, borderRadius: 0 }}
                    >
                        Update
                    </Button>
                </div>
            </>
        )
    }

    const ModalBox = (props) => {
        return (
            <>
                <div className="text-center">
                    <h3>Maklumat barang untuk paparan online</h3>
                </div>
                { JSON.stringify(productData)}
                <Divider />
                <CommerceInfo triggerModal={() => handleModal()} product_data={productData} />
            </>
        )
    }

    return (
        <div>
            {boxCari ? <CariForm /> : <></>}
            {productDetail ? <ResultArea {...props} /> : <></>}
            {modalOpen ? <ModalBox {...props} /> : <></>}
        </div>
    )
}

export default ProductCariProduct
