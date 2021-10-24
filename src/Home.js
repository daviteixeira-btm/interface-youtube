import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, MoreVert, VideoCall, Apps } from '@material-ui/icons';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
    },
    logo: {
        height: 25,
    },
    menuIcon: {
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(4),
    },
    icons: {
        paddingRight: theme.spacing(3),
    },
    grow: {
        flexGrow: 1,
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    className={classes.menuIcon}
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <img src="/images/preto.png" alt="logo" className={classes.logo} />
                <div className={classes.grow}/>
                <IconButton
                    size="large"
                    className={classes.icons}
                    color="inherit"
                    sx={{ mr: 2 }}
                >
                    <VideoCall />
                </IconButton>
                <IconButton
                    size="large"
                    className={classes.icons}
                    color="inherit"
                    sx={{ mr: 2 }}
                >
                    <Apps />
                </IconButton>
                <IconButton
                    size="large"
                    className={classes.icons}
                    color="inherit"
                    sx={{ mr: 2 }}
                >
                    <MoreVert />
                </IconButton>
                <Button startIcon={<AccountCircle />} variant='outlined' color="primary">Fazer Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Home;