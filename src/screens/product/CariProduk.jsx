import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Alert from '@material-ui/lab/Alert'

import ProductInfo from '../../components/ProductInfo.jsx'
import CommerceInfo from '../../components/CommerceInfo.jsx'

import axios from 'axios'

const ProductCariProduct = (props) => {
    const [productDetail, setProductDetail] = React.useState(false)
    const [modalOpen, setModalOpen] = React.useState(false)
    const [boxCari, setBoxCari] = React.useState(true)
    const [productData, setProductData] = React.useState(null)
    const [productTag, setProductTag] = React.useState('2470794')
    const [alertBox, setAlertBox] = React.useState(false)

    const handleModal = () => {
        setModalOpen(false)
    }

    const handleUpdateWebProduct = () => {
        setModalOpen(true)
        setProductDetail(false)
    }

    const CariForm = () => {
        const handleCari = () => {
            axios
                .get(
                    `${process.env.REACT_APP_SPE_API_V2}/Stock/item/${productTag}`
                )
                .then((response) => {
                    if (!response.data){
                        setAlertBox(true)
                    }
                    if (response.data) {
                        setBoxCari(false)
                        setProductDetail(true)
                        setProductData(response.data[0])
                    }
                })
        }
        return (
            <Container>
                { alertBox ? <Alert severity="info">Tiada barang dijumpai bagi nombor tag yang dimasukkan!</Alert> : <></> }
                <form action="" style={{marginTop:10}}>
                    <TextField
                        variant="outlined"
                        size="small"
                        type="number"
                        onChange={(e) => setProductTag(e.target.value)}
                        value={productTag}
                        autoFocus
                    />
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
                <ProductInfo  product_info={productData} />
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
                <CommerceInfo
                    triggerModal={() => handleModal()}
                    product_data={productData}
                />
            </>
        )
    }

    return (
        <div>
            {boxCari ? <CariForm key="cari_1" /> : <></>}
            {productDetail ? <ResultArea key="result_1" {...props} /> : <></>}
            {modalOpen ? <ModalBox key="box_1" {...props} /> : <></>}
        </div>
    )
}

export default ProductCariProduct
