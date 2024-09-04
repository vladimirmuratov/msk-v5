import {Fab} from '@mui/material'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'

export const FloatBtn = ({router}) => {
    return (
        <Fab
            onClick={() => router.push('#contacts')}
            color="error"
            sx={{
            position: 'fixed',
            bottom: {xs: '10px', sm: '30px', md: '50px'},
            right: {xs: '10px', sm: '30px', md: '50px'}
        }}>
            <PhoneEnabledIcon/>
        </Fab>
    )
}
