import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const data_kategori = require('../data/kategori.json')

const useStyles = makeStyles((theme) => ({
    formMargin: {
        marginTop: 5,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: window.innerWidth - theme.spacing(2),
    },
    formControlExtra: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}))

const CommerceInfo = (props) => {
    console.log(props)
    const classes = useStyles()
    const [kategori, setKategori] = React.useState('')
    const [kategoriGroup, setKategoriGroup] = React.useState(false)
    const [values, setValues] = React.useState({
        kategori: '',
        panjang: ' ',
        lebar: ' ',
        size: '0',
        diameter: ' ',
    })

    const handleChange = (prop) => (event) => {
        if (parseFloat(event.target.value) > 0) {
            setValues({
                ...values,
                [prop]: parseFloat(event.target.value),
            })
        }
    }

    const handlePickKategori = (e) => {
        let kategori_group = data_kategori.filter((x) => x.value === e)[0]
            .kategori
        setKategori(e)
        setKategoriGroup(kategori_group)
        let a = 'kategori'
        setValues({
            ...values,
            [a]: e,
        })
    }

    const handleSubmit = () => {
        console.log(values)
    }

    const ProdukCincin = () => {
        let saiz_cincin = []
        let start_size = 8
        do {
            saiz_cincin.push(<MenuItem key={start_size} value={start_size}>{start_size}</MenuItem> )
            start_size++
        } while (start_size <= 26)
        return (
            <div>
                <Grid container spacing={2} className={classes.formMargin}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" size="small" style={{ width:170}}>
                            <InputLabel
                                id="produk-size-cincin"
                                style={{
                                    backgroundColor: '#fff',
                                    paddingLeft: 5,
                                    paddingRight: 5,
                                }}
                            >
                                Saiz Cincin
                            </InputLabel>
                            <Select
                                label="Size"
                                defaultValue={values.size}
                                onChange={(e) => {
                                    handleChange('size')(e)
                                }}
                            >
                                <MenuItem value={0}>Pilih Saiz</MenuItem>
                                {saiz_cincin}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        )
    }

    const ProdukRantai = () => {
        return (
            <div>
                <Grid container spacing={2} className={classes.formMargin}>
                    <Grid item xs={4}>
                        <TextField
                            label="Panjang"
                            id="produk-panjang"
                            size="small"
                            type="number"
                            onBlur={(e) => handleChange('panjang')(e)}
                            defaultValue={values.panjang}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        cm
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Lebar"
                            id="produk-lebar"
                            size="small"
                            type="number"
                            defaultValue={values.lebar}
                            onBlur={(e) => handleChange('lebar')(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        cm
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            label="Diameter"
                            id="produk-diameter"
                            size="small"
                            type="number"
                            defaultValue={values.diameter}
                            onBlur={(e) => handleChange('diameter')(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        cm
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }

    const ProductAdditonalElement = () => {
        if (kategoriGroup !== false) {
            if (kategoriGroup === 'cincin') {
                return <ProdukCincin />
            } else {
                return <ProdukRantai />
            }
        } else {
            return true
        }
    }

    const SelectElement = (items) => {
        let menu_item = []
        items.items.map((x) => {
            menu_item.push(
                <MenuItem key={x.value} value={x.value}>
                    {x.name}
                </MenuItem>
            )
            return true
        })
        return (
            <FormControl
                variant="outlined"
                className={classes.formControl}
                size="small"
            >
                <InputLabel
                    id="produk-kategori"
                    style={{
                        backgroundColor: '#fff',
                        paddingLeft: 5,
                        paddingRight: 5,
                    }}
                >
                    {items.label}
                </InputLabel>
                <Select
                    onChange={(e) => handlePickKategori(e.target.value)}
                    value={kategori}
                >
                    {menu_item}
                </Select>

                <ProductAdditonalElement />
            </FormControl>
        )
    }

    return (
        <form noValidate autoComplete="off" >
            <SelectElement items={data_kategori} label="kategori" />
            <div className="button-bottom">
                <ButtonGroup>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        disableElevation
                        style={{
                            width: window.innerWidth - 100,
                            borderRadius: 0,
                        }}
                        onClick={() => handleSubmit()}
                    >
                        kemaskini
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        disableElevation
                        style={{ width: 100, borderRadius: 0 }}
                        onClick={() => props.triggerModal()}
                    >
                        Batal
                    </Button>
                </ButtonGroup>
            </div>
        </form>
    )
}

export default CommerceInfo
