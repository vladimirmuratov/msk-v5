import {Box, Typography} from '@mui/material'

export const BasePartnerCard = ({logo, alt, label, address, license, imgStyle={}}) => {
    return(
        <Box sx={{
            border: '1px solid var(--green)',
            borderRadius: '5px',
            padding: '10px',
            minHeight: '223px'
        }}>
            <img src={logo} alt={alt} style={imgStyle}/>
            <Typography variant='h4' sx={{fontSize: {xs: '12px', sm: '14px', md: '16px'}, fontWeight: 500, lineHeight: 1.3, marginBottom: '5px', marginTop: '5px'}}>{label}</Typography>
            <Typography sx={{fontSize: {xs: '10px', sm: '11px', md: '12px'}, lineHeight: 1.3, color: 'var(--gray)'}}>{address}</Typography>
            <Typography sx={{fontSize: {xs: '10px', sm: '11px', md: '12px'}, lineHeight: 1.3, color: 'var(--gray)'}}>{license}</Typography>
        </Box>
    )
}
