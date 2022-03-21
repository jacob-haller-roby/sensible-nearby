import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const AppFrame = (props: React.PropsWithChildren<any>) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Sensible - Nearby App
                    </Typography>
                </Toolbar>
            </AppBar>
            {props.children}
        </div>
    );
};

export default AppFrame;
