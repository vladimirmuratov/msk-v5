import {Box, Typography} from '@mui/material'

export const BasePartnerCard = ({logo, label}) => {

    return(
        <Box sx={{
            borderRadius: '5px',
            padding: '10px',
            lineHeight: 1.3,
            width: '150px'
        }}>
            <img src={logo} alt="logo" style={{width: '100px'}}/>
            <Typography sx={{fontSize: {xs: '12px', sm: '14px'}}}>{label}</Typography>
        </Box>
    )
}
