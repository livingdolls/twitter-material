import { Avatar, Button, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";

const Follow = [
    {id:1,nama:'Asuka Saito',uname:'@Asuka_saito'},
    {id:1,nama:'Hirate Yurina',uname:'@Techi'},
    {id:1,nama:'Nanang Setiawan',uname:'@Yurina'}
]

const ListFollow = () => {
    return(
        Follow.map((foll) => {
            return (
                <ListItem
                    secondaryAction={
                        <Button 
                            color='item'
                            size="small" 
                            variant="contained"
                            sx={{
                                borderRadius:20    
                            }}
                        >
                            Ikuti
                        </Button>
                        }
                        disablePadding
                >
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                sx={{height:50, width:50}}
                                alt="Yurina"
                            />
                        </ListItemAvatar>

                        <ListItemText 
                            primary={
                            <Typography 
                                fontWeight={500}
                                color={'text.primary'}
                                display='block' 
                                component='h6'>
                                {foll.nama}
                            </Typography>
                            }
                            secondary={
                                <Typography 
                                    ontWeight={200}
                                    color={'text.secondary'}
                                    display='block' 
                                    component='h6'>
                                    {foll.uname}
                                </Typography>}
                                />
                        </ListItemButton>

                    </ListItem>
            )
        })
    )
}

export default ListFollow;