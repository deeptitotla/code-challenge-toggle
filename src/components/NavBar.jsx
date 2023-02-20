import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

const pages = [
    { title: 'Home', url: '/home' },
    { title: 'Products', url: '/products' },
    { title: 'Contact Us', url: '/contactUs' }];

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: '1' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" sx={{ mr: 10 }}>
                        Galleria
                    </Typography>
                    {
                        pages.map((page) => (
                            <Typography variant="h6" sx={{ mr: 4 }} key={page.title}>
                                <Link href={page.url} color='inherit' underline='none'>
                                    {page.title}
                                </Link>
                            </Typography>
                        ))
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default NavBar;