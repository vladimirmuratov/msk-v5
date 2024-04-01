import {Box, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const Header = ({router}) => {
    return (
        <Box className="container" component="header"
             sx={{
                 zIndex: 2,
                 display: 'flex',
                 position: 'fixed',
                 top: 0,
                 left: 0,
                 right: 0,
                 backgroundColor: 'var(--white)',
                 boxShadow: '0 2px 2px lightgray'
             }}>
            <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1, paddingY: '20px'}}>
                <Typography sx={{
                    display: {xs: 'block', sm: 'none'},
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: '20px',
                    color: 'var(--red)'
                }}>МСК —<br/>госпитализация</Typography>
                <Typography sx={{
                    display: {xs: 'none', sm: 'block'},
                    paddingLeft: {sm: '20px'},
                    fontWeight: 700,
                    fontSize: 24,
                    lineHeight: '30px',
                    color: 'var(--red)'
                }}>МСК —<br/>Просто. Быстро. Надежно</Typography>
            </Box>

            <Box sx={{
                flexGrow: 1,
                display: {xs: 'none', md: 'flex'},
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography sx={{fontWeight: 700, fontSize: 24, lineHeight: '30px', color: 'var(--green)'}}>Круглосуточно
                    24/7</Typography>
            </Box>

            <Box sx={{
                flexGrow: 1,
                backgroundColor: 'var(--green)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography
                    onClick={() => router.push('#contacts')}
                    sx={{
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: {xs: 18, sm: 20, md: 26},
                    lineHeight: '30px',
                    color: 'var(--red)',
                    whiteSpace: 'nowrap'
                }}>{phoneNumber}</Typography>
            </Box>
        </Box>
    )
}
