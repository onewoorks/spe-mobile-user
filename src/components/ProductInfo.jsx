import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Divider from '@material-ui/core/Divider'

const ProductInfo = () => {
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

            <TableContainer>
                <Table >
                    <TableBody>
                        <TableRow>
                            <TableCell>Mutu</TableCell>
                            <TableCell>916</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>No Tag</TableCell>
                            <TableCell>1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Nama Barang</TableCell>
                            <TableCell>1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Kategori</TableCell>
                            <TableCell>1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pembekal</TableCell>
                            <TableCell>1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Berat</TableCell>
                            <TableCell>1</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductInfo
