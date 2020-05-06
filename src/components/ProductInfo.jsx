import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const ProductInfo = () => {
    return (
        <div>
            Information about product tempolate
            <TableContainer>
                <Table>
                    <TableRow>
                        <TableCell>No Tag</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Nama Barang</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Kategory</TableCell>
                        <TableCell>1</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ProductInfo
