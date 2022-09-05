import styled from '@emotion/styled';
import { Bookmark, BookmarkBorder, Edit, Email, EmailOutlined, Fence, FenceOutlined, Home, HomeOutlined, ListAlt, ListAltOutlined, ModeNight, MoreHoriz, MoreHorizOutlined, Notifications, NotificationsOutlined, Person, PersonOutline } from '@mui/icons-material';
import Twitter from '@mui/icons-material/Twitter';
import { AppBar, Avatar, Box, Button, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import profil from '../assets/image/Yurina.png'

const SideMed = styled(Box)((({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        width:'70px',
    }
})))

const SideBox = styled(Box)((({theme}) => ({
    [theme.breakpoints.up('lg')]: {
        flex:1.5
    }
})))

const NavMobile = styled(AppBar)((({theme}) => ({
    backgroundColor: theme.palette.background.default
})))


const Sidebar = ({setMod, mode, setMode}) => {
    return(
        <SideBox>

            <Box 
                position="fixed" 
                top={5} 
                sx={{display:{xs:'none', sm:'none', md:'none', lg:'block'}}}>
            
                <Twitter sx={{color:"#2196f3", mb:2, ml:2, fontSize:'40px'}} />

                <List disablePadding>

                    <ListItemButton>
                        <ListItemIcon>
                            <Home/>    
                        </ListItemIcon>
                        <ListItemText  primary={<Typography color={'text.primary'} variant='h5'>Beranda</Typography>} />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <Fence/> 
                        </ListItemIcon>
                        <ListItemText primary={<Typography color={'text.primary'} variant='h5'>Jelajah</Typography>}/>
                    </ListItemButton>
                    
                    <ListItemButton>
                        <ListItemIcon>
                            <Notifications  />    
                        </ListItemIcon>
                        <ListItemText primary={<Typography color={'text.primary'} variant='h5'>Notifikasi</Typography>}/>
                    </ListItemButton>
                    
                    <ListItemButton>
                        <ListItemIcon>
                            <Email  />    
                        </ListItemIcon>
                        <ListItemText primary={<Typography color={'text.primary'} variant='h5'>Pesan</Typography>}/>
                    </ListItemButton>
                    
                    <ListItemButton>
                        <ListItemIcon>
                            <Bookmark  />    
                        </ListItemIcon>
                        <ListItemText primary={<Typography color={'text.primary'} variant='h5'>Markah</Typography>}/>
                    </ListItemButton>
                    
                    <ListItemButton>
                        <ListItemIcon>
                            <ListAlt  />    
                        </ListItemIcon>
                        <ListItemText primary={<Typography color={'text.primary'} variant='h5'>Daftar</Typography>}/>
                    </ListItemButton> 
                    
                    <ListItemButton>
                        <ListItemIcon>
                            <Person  />    
                        </ListItemIcon>
                        <ListItemText primary={<Typography color={'text.primary'} variant='h5'>Profil</Typography>}/>
                    </ListItemButton>
                    
                    <ListItemButton>
                        <ListItemIcon>
                            <MoreHoriz  />    
                        </ListItemIcon>
                        <ListItemText primary={<Typography  color={'text.primary'}variant='h5'>Lainnya</Typography>}/>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <ListItemText primary={<Typography color={'text.primary'} variant='h5'>Mode</Typography>} />
                        <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')} />
                    </ListItemButton>
                </List>

                <Stack 
                    sx={{height:'450px'}} 
                    direction='column' 
                    justifyContent='space-between' 
                    alignItems='center'
                    >
                    
                    <Button 
                        onClick={() => setMod(true)} 
                        sx={{width:'230px',mt:2, ml:-2, borderRadius:'20px', p:2}} 
                        variant="contained"
                        >
                            Tweet
                    </Button>        

                    <List>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label='more'>
                                    <MoreHoriz />
                                </IconButton>
                            }
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar>Y</Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Yurina Hirate"
                                    secondary="@Yurina_hirate"
                                />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Stack>
            </Box>

            {/* Sidebar Mobile */}
            <SideMed sx={{display:{lg:'none'}}}>
                <NavMobile 
                    sx={{ display:'flex', flexDirection:"column", width:'70px', left:0,padding:1}} 
                    elevation={0}
                    >
                    <Twitter sx={{color:"#2196f3", mb:2, ml:1, fontSize:'35px'}} />
            
                    <List 
                        disablePadding 
                        sx={{ml:-1}}
                        >
                        
                        <ListItemButton sx={{marginBottom:1}}>
                            <ListItemIcon>
                                <HomeOutlined sx={{ fontSize:'35px'}} />    
                            </ListItemIcon>
                        </ListItemButton>
                        
                        <ListItemButton sx={{marginBottom:1}}>
                            <ListItemIcon>
                                <FenceOutlined sx={{ fontSize:'35px'}} /> 
                            </ListItemIcon>
                        </ListItemButton>
                        
                        <ListItemButton sx={{marginBottom:1}}>
                            <ListItemIcon>
                                <NotificationsOutlined sx={{ fontSize:'35px'}} />    
                            </ListItemIcon>
                        </ListItemButton>
                        
                        <ListItemButton sx={{marginBottom:1}}>
                            <ListItemIcon>
                                <EmailOutlined sx={{ fontSize:'35px'}} />    
                            </ListItemIcon>
                        </ListItemButton>
                        
                        <ListItemButton sx={{marginBottom:1}}>
                            <ListItemIcon>
                                <BookmarkBorder sx={{ fontSize:'35px'}} />    
                            </ListItemIcon>
                        </ListItemButton >
                        
                        <ListItemButton sx={{marginBottom:1}}>
                            <ListItemIcon>
                                <ListAltOutlined sx={{ fontSize:'35px'}} />    
                            </ListItemIcon>
                        </ListItemButton>
                        
                        <ListItemButton sx={{marginBottom:1}}>
                            <ListItemIcon>
                                <PersonOutline sx={{ fontSize:'35px'}} />    
                            </ListItemIcon>
                        </ListItemButton>
                        
                        <ListItemButton sx={{marginBottom:1}}>
                            <ListItemIcon>
                                <MoreHorizOutlined sx={{ fontSize:'35px'}} />    
                            </ListItemIcon>
                        </ListItemButton>
                    </List>

                <Button 
                    variant='contained' 
                    size='small' 
                    sx={{borderRadius:'50%', width:60, height:60, marginLeft:-0.5}} 
                    color='primary'
                    >
                    <Edit />
                </Button>

                <Box 
                    sx={{mt:45}}
                    >
                    <Avatar sx={{ml:0.5,width:50, height:50}} src={profil}>Y</Avatar>
                </Box>

                </NavMobile>
            </SideMed>
            {/* End SideMede Navigasi */}
        </SideBox>
    )
}

export default Sidebar;