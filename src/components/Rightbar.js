import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import { AppBar, Box, Button, CircularProgress, Input, InputAdornment, List, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import ListFollow from "./ListFollow";
import ListItemTrend from "./ListItemTrend";

const SearchBar = styled('div')({
    backgroundColor:'rgba(96,125,139, .2)',
    padding:'6.9px',
    borderRadius:'50px',
    width:'100%'
})

const SideBox = styled(Box)({
    marginTop:'15px',
    padding:'2px',
    backgroundColor:'rgba(96,125,139, .2)', 
    borderRadius:'10px',
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto'
})

const TrenPosting = [
    {id:1,prm:'Hanya di Twitter',title:'Krakatau Steal', qtyPost:'1.318 Post'},
    {id:2,prm:'Sedang tren dalam topik Indonesia',title:'Ginting', qtyPost:'5.013 Post'},
    {id:3,prm:'Permainan',title:'School 2015', qtyPost:'3.462 Post'},
    {id:4,prm:'Politik',title:'Yurina Hirate', qtyPost:'132 rb Post'},
    {id:5,prm:'Teknologi',title:'IPhone', qtyPost:'243 rb Post'},
    {id:6,prm:'Sedang tren dalam topik Indonesia',title:'Siang Panas', qtyPost:'12.143 Post'},
    {id:7,prm:'Olahraga',title:'#JapanOpen2022', qtyPost:'43.012 Post'},
    {id:8,prm:'Teknologi',title:'Linux', qtyPost:'1.012 Post'},
]

const AppBarStyled = styled(AppBar)((({theme}) => ({
    backgroundColor: theme.palette.background.default
})))

const Rightbar = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, [3000])
    return(
        <Box flex={2} sx={{display:{xs:'none',sm:'none',md:'block',lg:'block'}}} >
            
            {/* Navigasi */}
            <AppBarStyled position='sticky' sx={{boxShadow:0, width:'100%',padding:1}}>
                <Stack direction='row'>
                <SearchBar color={'text.primary'}>
                <Input
                disableUnderline={true}
                    id="input-with-icon"
                    placeholder="Cari di Twitter"
                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                />
            </SearchBar>
                </Stack>

            </AppBarStyled>
            {/* EndNavigasi */}
            
            

            {/* Trend Posting */}
            <SideBox>
                <Typography variant="h6" color={'text.primary'} sx={{ml:2}} fontWeight={600}>
                    Tren Untuk Anda
                </Typography>

                {loading ? (
                    <Box p={5} sx={{display:'flex', justifyContent:'center'}}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <List>
                        <ListItemTrend TrenPosting = {TrenPosting} />
                    </List>
                )
            }

                <Button variant="text" size="small" color="primary" sx={{ml:2, mb:2}}>
                    Tampilkan lebih banyak
                </Button>
            </SideBox>


            {/* Rekomendasi Ikuti */}
            <SideBox>
                <Typography variant="h6" color={'text.primary'} sx={{ml:2, mt:2}} fontWeight={600}>
                    Untuk di ikuti
                </Typography>

                {loading ? (
                    <Box p={5} sx={{display:'flex', justifyContent:'center'}}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <List>
                        <ListFollow />
                    </List>
                )}

                <Button variant="text" size="small" color="primary" sx={{ml:2, mb:2}}>
                    Tampilkan lebih banyak
                </Button>
            </SideBox>
            
        </Box>
    )
}

export default Rightbar;