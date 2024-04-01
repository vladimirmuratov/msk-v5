import {ListItem, ListItemIcon, ListItemText} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const BaseListItem = ({text}) => {
    return (
        <ListItem>
            <ListItemIcon>
                <CheckIcon/>
            </ListItemIcon>
            <ListItemText
                primaryTypographyProps={{fontSize: '18px'}}
                primary={text}
                sx={{color: 'var(--black)'}}
            />
        </ListItem>
    )
}
