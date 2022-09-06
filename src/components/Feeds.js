import styled from "@emotion/styled";
import { AddLocation, AutoAwesomeOutlined, BarChart, DateRange,  GifBoxOutlined, Home, Image, Mail, Mood, Notifications, Search } from "@mui/icons-material";
import { AppBar, Avatar, BottomNavigation, BottomNavigationAction, Box, Button, CircularProgress, Input, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import TweetPosts from "./TweetPosts";
import profil from '../assets/image/Yurina.png'
import { useState } from "react";

const PostBox = styled(Box)({
    display:'flex',
    flexDirection:'column'
})

const IconTweet = styled(Box)({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
})

const TweetBox = styled(Box)({
    display: 'flex',
    flexDirection:'column',
    minWidth:'90%'
})

const TweetBoxIcon = styled(Box)({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
})

const IconList = styled(Box)({
    display:'flex',
    width:50,
    justifyContent:'space-between'
})

const BottomNav = styled(Paper)((({theme}) => ({
    [theme.breakpoints.up('xs')]:{
      position:'fixed',
      left:70,
      bottom:0,
      right:0
    }
  })))

const AppBarStyled = styled(AppBar)((({theme}) => ({
    backgroundColor: theme.palette.background.default
})))

const Feeds = () => {
    const [Loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, [3000])

    return (
        <Box 
            flex={3} 
            borderLeft={1} 
            borderRight={1} 
            sx={{borderRightColor:'rgba(166, 166, 170, 0.3)', 
                    borderLeftColor:'rgba(166, 166, 170, 0.3)',
                    minHeight:'1200px'
            }}>

            {/* Navbar */}
            <AppBarStyled 
                position="sticky" 
                sx={{boxShadow:0, opacity:0.9 }} 
                >
                
                <Stack 
                    direction='row' 
                    justifyContent='space-between' 
                    alignItems='flex-start' 
                    p={2}
                > 
                    <Typography variant="h6" color={'text.primary'}>
                        Beranda
                    </Typography>

                    <AutoAwesomeOutlined />
                </Stack>
            </AppBarStyled>
            {/* End Navbar */}

            <Stack 
                direction='row'
                p={1} 
                ml={1} 
                mr={1} 
                spacing={2}
                sx={{borderBottom:1, borderBottomColor:'rgba(166, 166, 170, 0.6)'}}
            >
                <Avatar 
                    sx={{height:60, width:60}} 
                    src={profil} 
                    alt="Yurina"
                />

                <PostBox 
                    width='100%'
                >
                    <Input
                        id="standar-multiline-flexible"
                        multiline
                        rows={2.5}
                        fullWidth
                        placeholder="Apa yang sedang terjadi ?"
                        disableUnderline={true}   
                    />

                    <IconTweet mt={1}>
                        <Box>
                            <Image sx={{color:'#2196f3', mr:1}} />
                            <GifBoxOutlined sx={{color:'#2196f3', mr:1}} />
                            <BarChart sx={{color:'#2196f3', mr:1}} />
                            <Mood sx={{color:'#2196f3', mr:1}} />
                            <DateRange sx={{color:'#2196f3', mr:1}} />
                            <AddLocation sx={{color:'#2196f3', mr:1}} />
                        </Box>

                        <Button 
                            variant="contained" 
                            size="small" 
                            sx={{borderRadius:'20px', fontSize:'12px', padding:1}}
                        >
                            Tweet
                        </Button>
                    </IconTweet>
                </PostBox>
                
            </Stack>

            <Stack 
                direction='column'
            >
            
                {Loading ? (
                    <Box p={5} sx={{display:'flex', justifyContent:'center'}}>
                        <CircularProgress />
                    </Box>
                ) : 
                (
                    <TweetPosts TweetBox={TweetBox} TweetBoxIcon={TweetBoxIcon} IconList={IconList} />
                )
            }
            </Stack>

    {/* Navigasi Mobile Bottom */}
            <Box>
                <BottomNav 
                    sx={{display:{lg:'none', md:'none'}}}
                >
                    <BottomNavigation>
                        <BottomNavigationAction label="Home" icon={<Home />} />
                        <BottomNavigationAction label="Notifikasi" icon={<Notifications />} />
                        <BottomNavigationAction label="Cari" icon={<Search />} />
                        <BottomNavigationAction label="Pesan" icon={<Mail />} />
                    </BottomNavigation>
                </BottomNav>
            </Box>
    {/* End Navigasi Mobile Bottom */}

        </Box>
    )
}

export default Feeds;