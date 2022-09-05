import { AddLocation, BarChart, Clear, DateRange, GifBoxOutlined, Image, KeyboardArrowDown, Mood, Public } from "@mui/icons-material"
import { Avatar, Button, Input, Modal, Tooltip } from "@mui/material"
import { Box, Stack, styled } from "@mui/system"

const IconTweet = styled(Box)({
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
})

const ModalTweet = ({open, clModal}) =>{

    return(
        <Modal open={open} onClose={() => clModal(false)}>
            <Box bgcolor={'background.default'}
                sx={{
                    height:'300px', 
                    width:'600px',
                    ml:'auto',
                    mr:'auto',
                    mt:'100px',
                    borderRadius:'10px',
                    padding:'10px',
                    display:{xs:{width:'1000px'}}
                    }}>
                
                <Tooltip 
                    title="close" 
                    onClick={() => clModal(false)} 
                    arrow
                    >
                    <Clear />
                </Tooltip>

                <Stack 
                    direction='row' 
                    mr={2} 
                    ml={1} 
                    mb={1} 
                    spacing={1} 
                    sx={{height:'90%'}}
                    >
                        <Avatar sx={{width:60, height:60, bgcolor:'red'}}>Y</Avatar>
                        
                        <Box 
                            sx={{width:"90%"}}
                            >
                        
                        <Button 
                            variant="outlined" 
                            endIcon={<KeyboardArrowDown />}
                            size="small"
                            sx={{borderRadius:'10px', fontSize:'10px'}}
                            >Semua Orang</Button>

                        <Input
                            id="standar-multiline-flexible"
                            multiline
                            rows={6}
                            fullWidth
                            placeholder="Apa yang sedang terjadi ?"
                            disableUnderline='true' 
                        />

                        <Button 
                            variant="text" 
                            size="small" 
                            startIcon={<Public />} 
                            sx={{fontSize:'10px', marginTop:'20px'}}
                            >
                                Semua orang dapat membalas
                        </Button>
                        
                        <hr/>
                        
                        <IconTweet 
                            mt={1}
                            >
                        
                        <Box>
                            <Tooltip title="gambar">
                                <Image sx={{color:'#2196f3', mr:1}} />
                            </Tooltip>

                            <Tooltip title="gif">
                                <GifBoxOutlined sx={{color:'#2196f3', mr:1}} />
                            </Tooltip>

                            <Tooltip title="chart">
                                <BarChart sx={{color:'#2196f3', mr:1}} />
                            </Tooltip>

                            <Tooltip title="Mood">
                                <Mood sx={{color:'#2196f3', mr:1}} />
                            </Tooltip>
                            <Tooltip title="jadwal">
                                <DateRange sx={{color:'#2196f3', mr:1}} />
                            </Tooltip>
   
                            <Tooltip title="lokasi">
                                <AddLocation sx={{color:'#2196f3', mr:1}} />
                            </Tooltip>
                        </Box>

                        <Button 
                            variant="contained" 
                            size="small" 
                            sx={{borderRadius:'10px'}}
                            >
                                Tweet
                        </Button>
                    
                    </IconTweet>
                    </Box>
                </Stack>
            </Box>
        </Modal>
    )
}

export default ModalTweet