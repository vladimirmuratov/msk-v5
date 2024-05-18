import {Box, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const FloatBtnPulse = ({router, isMobile, onOpenCallModal}) => {
    const goPhone = () => router.push(`tel:${phoneNumber}`)

    return (
        <Box
            sx={{
                position: 'absolute',
                right: {xs: '10px', sm: '40px', lg: '60px'},
                bottom: {xs: '10px', sm: '40px', md: '35px'},
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'var(--white)',
                border: '2px solid var(--red)',
                borderRadius: '50%',
                width: '65px',
                height: '65px',
                boxShadow: '5px 5px 10px lightgray'
            }}
        >
            <Box className="pulse" onClick={isMobile ? goPhone : onOpenCallModal}>
                <Typography sx={{color: 'var(--white)', fontWeight: 500}}>24/7</Typography>
            </Box>
        </Box>
    )
}
