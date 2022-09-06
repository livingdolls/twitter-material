import { Comment, DataArray, FavoriteBorder, FileUpload, MoreHoriz } from "@mui/icons-material";
import { Avatar, Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Asuka from '../assets/image/asuka.png';
import Yurina from '../assets/image/Yurina.png';

const posts = [
    {id:1,name:'Nanang Setiawan',uname:'@Nanang_Setiawan',pst:'Diam adalah lebih baik daripada mengucapkan kata-kata yang tanpa makna'},
    {id:2,name:'Yurina Hirate',img:Yurina,uname:'@Yurina_Hirate',pst:'Seperti namanya, cerpen cenderung singkat, padat, dan langsung pada tujuannya dibandingkan karya-karya fiksi lain yang lebih panjang. Adapun yang dimaksud pendek ialah dapat selesai dibaca sekali duduk dalam waktu kurang dari satu jam.'},
    {id:3,name:'Asuka Saito',img:Asuka,uname:'@AsukaSaito',pst:'Menurut Kamus Besar Bahasa Indonesia (KBBI), cerita berarti tuturan yang membentangkan bagaimana terjadinya suatu hal atau karangan yang menuturkan perbuatan, pengalaman, penderitaan orang, atau kejadian baik yang sungguh terjadi maupun hanya rekaan belaka.'},
    {id:4,name:'Instagram',uname:'@Instagram',pst:'Google My Business API memberi Anda kemampuan untuk membuat Postingan di Google Penelusuran dalam beberapa kategori, seperti berita, acara, dan penawaran'},
    {id:5,name:'Facebook',uname:'@Facebook',pst:'Beri tahu pelanggan Anda tentang acara berikutnya di bisnis Anda dengan Postingan. Postingan Anda untuk acara mencakup tanggal mulai dan akhir, yang ditampilkan secara jelas di Postingan.'},
    {id:6,name:'Indonesia Update',uname:'@IndonesiaUpdate',pst:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam eros, feugiat lacinia massa a, gravida sagittis purus. Suspendisse faucibus tellus nec nisl volutpat pellentesque. Aenean hendrerit accumsan mi vel placerat. Fusce eu elementum risus, id vehicula eros. Proin et sollicitudin odio. Orci varius natoque penatibus et magnis dis parturient montes, nascet'},
    {id:7,name:'International Update',uname:'@International',pst:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam eros, feugiat lacinia massa a, gravida sagittis purus. Suspendisse faucibus tellus nec nisl volutpat pellentesque. Aenean hendrerit accumsan mi vel placerat. Fusce eu elementum risus, id vehicula eros. Proin et sollicitudin odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque a metus in tellus efficitur luctus. Donec fermentum hendrerit mi, ut scelerisque dui. Nullam eleifend tellus id lorem ultrices iaculis.'},
]

const ButtonIcon = styled(Button)({
    color:'rgba(166, 166, 170, 1)',
    padding:0,
})


const TweetPosts = ({TweetBox, TweetBoxIcon, IconList}) => {
    return (
        posts.map((post) => {
            return(
                <Stack 
                    direction='row'
                    spacing={1}
                    p={1}
                    ml={1}
                    sx={{minHeight:100,borderBottom:1, borderBottomColor:'rgba(166, 166, 170, 0.6)'}}
                    key={post.id}
                >
                    <Avatar 
                        sx={{height:50, width:50}} 
                        src={post.img} 
                    />
        
                    <TweetBox>
                        <Box 
                            sx={{display:'flex', justifyContent:'space-between'}}
                        >
                        
                            <Box>
                                <Typography 
                                    display='inline' 
                                    color={'text.primary'} 
                                    fontWeight={500} 
                                    varian='h6'
                                >
                                    {post.name}
                                </Typography>

                                <Typography display='inline'> </Typography>
                                
                                <Typography 
                                    display='inline' 
                                    color={'text.secondary'} 
                                    fontWeight={200} 
                                    varian='body1'
                                >
                                        {post.uname} . 1j
                                </Typography>
                            </Box>

                            <Box>
                                <Tooltip title="lainnya">
                                    <MoreHoriz sx={{color:'rgba(166, 166, 170, 5)', mr:2 , borderRadius:'50%', "&:hover": {bgcolor:'rgba(144, 202, 249, 0.5)'}}} />
                                </Tooltip>
                            </Box>

                        </Box>

                        <Typography 
                            color={'text.primary'} 
                            variant="subtitle1"
                        >
                            {post.pst}
                        </Typography>
        
                        <TweetBoxIcon 
                            sx={{width:'80%'}} 
                            mt={2}
                        >
                            <Tooltip title="Balas">
                                <ButtonIcon 
                                    startIcon={<Comment />} 
                                    size="small" 
                                    sx={{"&:hover":{color:'blue'}}}
                                >
                                    <Typography 
                                        display='inline' 
                                        variant="caption" 
                                        fontWeight={500}
                                    >
                                        200
                                    </Typography>
                                </ButtonIcon>
                            </Tooltip>

                            <Tooltip title="Retweet">
                                <ButtonIcon 
                                    startIcon={<DataArray/>} 
                                    size="small" 
                                    sx={{"&:hover":{color:'green'}}}
                                >
                                    <Typography 
                                        display='inline' 
                                        variant="caption" 
                                        fontWeight={500}
                                    >
                                        10
                                    </Typography>
                                </ButtonIcon>
                            </Tooltip>

                            <Tooltip title="Favorit">
                                <ButtonIcon 
                                    startIcon={<FavoriteBorder />} 
                                    size="small" 
                                    sx={{"&:hover":{color:'red'}}}
                                >
                                    <Typography 
                                        display='inline' 
                                        variant="caption" 
                                        fontWeight={500}
                                    >
                                        23
                                    </Typography>
                                </ButtonIcon>
                            </Tooltip>
        
                            <Tooltip title="Sebarkan">
                                <ButtonIcon 
                                    startIcon={<FileUpload/>} 
                                    size="small" 
                                    sx={{"&:hover":{color:'green'}}}
                                >
                                    <Typography 
                                        display='inline' 
                                        variant="caption" 
                                        fontWeight={500}
                                    >
                                        50
                                    </Typography>
                                </ButtonIcon>
                            </Tooltip>
                        </TweetBoxIcon>
                    </TweetBox>
            </Stack>
            )
        })
    )
}

export default TweetPosts;