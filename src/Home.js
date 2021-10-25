import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
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
    Grid,
    Hidden,
    Switch
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
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

const videos = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb1.png',
    },
    {
      id: 2,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      channel: 'Lucas Nhimi',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb2.png',
    },
    {
      id: 3,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb3.png',
    },
    {
      id: 4,
      title:
        'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
      channel: 'Lucas Nhimi',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb4.png',
    },
    {
      id: 5,
      title:
        'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
      channel: 'Lucas Nhimi',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb5.png',
    },
    {
      id: 6,
      title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
      channel: 'Lucas Nhimi',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb6.png',
    },
    {
      id: 7,
      title:
        'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
      channel: 'Lucas Nhimi',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb7.png',
    },
    {
      id: 8,
      title:
        'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
      channel: 'Lucas Nhimi',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar.jpeg',
      thumb: '/images/thumb8.png',
    },
];

function Home({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();

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
                <img src={theme.palette.type === 'dark' ? '/images/branco.png' : '/images/preto.png'} alt="logo" className={classes.logo} />
                <div className={classes.grow}/>
                <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} />
                <IconButton
                    size="large"
                    className={classes.icons}
                    sx={{ mr: 2 }}
                >
                    <VideoCall />
                </IconButton>
                <IconButton
                    size="large"
                    className={classes.icons}
                    sx={{ mr: 2 }}
                >
                    <Apps />
                </IconButton>
                <IconButton
                    size="large"
                    className={classes.icons}
                    sx={{ mr: 2 }}
                >
                    <MoreVert />
                </IconButton>
                <Button startIcon={<AccountCircle />} variant='outlined' color="primary">Fazer Login</Button>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <Hidden mdDown>
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
                </Hidden>
                

                <Box pl={32} pt={5} pr={2}>
                    <Toolbar />
                    <Typography variant="h6" color="textPrimary" style={{ fontWeight: 600 }}>
                        Recomendados
                    </Typography>

                    <Grid container spacing={3}>

                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            src={item.thumb} 
                                            alt={item.title}
                                            style={{ width: '100%'}} 
                                        />
                                        <Box>
                                            <Typography 
                                                style={{ fontWeight: 300 }}
                                                gutterBottom
                                                variant="body1"
                                                color="textPrimary"
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography 
                                                display="block"
                                                variant="body2"
                                                color="textSecondary"
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {`${item.views} . ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }

                    </Grid>

                </Box>
            </Box>
        </div>
    )
}

export default Home;