import { MoreHoriz } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText, Typography } from "@mui/material";

const ListItemTrend = ({TrenPosting}) => {
    return (

        TrenPosting.map((post) => {
            return(
                <ListItem key={post.id}
                button
                secondaryAction={
                    <IconButton edge="end" aria-label="lainnya">
                        <MoreHoriz />
                    </IconButton>
                }
            >
                <ListItemText
                    primary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                color={'text.secondary'}
                            >
                                {post.prm}
                            </Typography>
                        </>
                    }
                    secondary={
                        <>
                            <Typography 
                            fontWeight={500}
                            color={'text.primary'}
                            display='block'
                            component="span" 
                            variant='body1'>
                                {post.title}
                            </Typography>
    
                            <Typography 
                                variant="body2" 
                                component="span"
                                fontWeight={200}
                                color={'text.secondary'}
                                >
                                    {post.qtyPost}
                            </Typography>
                        
                        </>
                    }
                />
            </ListItem>
            )
        })
    )
}

export default ListItemTrend;