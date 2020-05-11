import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Divider from '@material-ui/core/Divider'

const ProductInfo = (props) => {
    let product_data = props.product_info
    return (
        <div>
            <div className="text-center text-uppercase">
                <h3>Maklumat Dari Sistem</h3>
            </div>

            <img
                src="https://www.wahchan.com.my/WahChan/files/65/65310890-d67d-4e5c-bcdf-f18d0d933313.jpg"
                alt="nama barang"
                style={{ width: window.innerWidth }}
            />

            <Divider />
            { (product_data !== null) ? 
            <TableContainer>
                <Table >
                    <TableBody>
                        <TableRow>
                            <TableCell>Mutu</TableCell>
                            <TableCell>{product_data.mutu}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>No Tag</TableCell>
                            <TableCell>{product_data.no_tag}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Nama Barang</TableCell>
                            <TableCell>{product_data.nama_stok}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dulang</TableCell>
                            <TableCell>{product_data.dulang}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Berat</TableCell>
                            <TableCell>{product_data.berat}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tarikh Daftar</TableCell>
                            <TableCell>{product_data.tarikh_daftar}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

    : <></>}
        </div>
    )
}

export default ProductInfo
