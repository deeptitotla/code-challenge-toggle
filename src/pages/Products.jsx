import React, { useEffect, useState } from 'react';
import productList from '../mocks/products.json';
import { Toggle } from '../app.config'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextInput from '../components/TextInput';
import Button from '@mui/material/Button';

function fetchFeatureToggles() {
    return new Promise(resolve => {
        const featureToggles = {
            isFeedbackButtonEnabled: true,
        };
        setTimeout(resolve, 500, featureToggles);
    })
}

function Products() {
    //Initialize with static config file toggle value    
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchFeatureToggles().then(
            function (value) {
                setShowForm(value.isFeedbackButtonEnabled);
            },
            function (error) {
                setShowForm(Toggle);
            }
        )
    }, [])

    return (
        <Container fixed>
            {showForm && (
                <>
                    <Box
                        component="form"
                        sx={{
                            mt: 5, mb: 2,
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Please add a product here
                        </Typography>
                        <TextInput
                            id="id"
                            label="Product Id"
                            type='text'
                        />
                        <TextInput
                            id="sku"
                            label="Product SKU"
                            type='text'
                        />
                        <TextInput
                            id="name"
                            label="Product Name"
                            type='text'
                        />
                        <TextInput
                            id="price"
                            label="Product Price"
                            type='text'
                        />
                    </Box>
                    <Button variant="contained">Submit</Button>
                </>
            )}

            <Typography variant="h6" sx={{ mb: 5, mt: 5 }}>
                Product List
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>SKU</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.products.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.sku}</TableCell>
                                <TableCell>{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Products;