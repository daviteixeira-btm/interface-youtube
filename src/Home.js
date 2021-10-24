import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, MoreVert, VideoCall, Apps } from '@material-ui/icons';
import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Button, 
    Drawer, 
    List, 
    Box, 
    ListItem, 
    ListItemIcon,
    ListItemText,
    Divider,
    Typography,
    ListSubheader,

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 25,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none',
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
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar} >
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
            <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                        <ListItemText primary={'Início'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                        <ListItemText primary={'Em alta'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<Whatshot />}</ListItemIcon>
                        <ListItemText primary={'Inscrições'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>
                            <VideoLibrary />
                        </ListItemIcon>
                        <ListItemText primary={'Biblioteca'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText primary={'Histórico'} />
                    </ListItem>
                </List>
                <Divider />
                <Box p={4}>
                    <Typography variant='body2'>
                        Faça login para curtir vídeos, comentar e se inscrever.
                    </Typography>
                    <Box mt={2}>
                        <Button variant='outlined' color="primary" startIcon={<AccountCircle />}>
                            Fazer login
                        </Button>
                    </Box>
                </Box>
                <Divider />
                <List>
                    <ListSubheader className={classes.subheader}>
                        O Melhor do youtuber
                    </ListSubheader>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                        <ListItemText primary={'Música'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                        <ListItemText primary={'Esportes'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                        <ListItemText primary={'Jogos'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                        <ListItemText primary={'Filmes'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                        <ListItemText primary={'Notícias'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                        <ListItemText primary={'Ao vivo'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                        <ListItemText primary={'Destaques'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                        <ListItemText primary={'Vídeos 360'} />
                    </ListItem>
                    <Divider />
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                        <ListItemText primary={'Procurar mais'} />
                    </ListItem>
                    <Divider />
                </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default Home;