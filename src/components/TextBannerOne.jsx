import {Box, Typography} from '@mui/material'

export const TextBannerOne = () => {
    return (
        <Box
            component="section"
            sx={{backgroundColor: 'var(--white)'}}
        >
            <Typography
                component='h2'
                sx={{
                    color: 'var(--green)',
                    textAlign: 'center',
                    paddingY: {xs: '50px', sm: '100px'},
                    fontSize: {xs: 22, sm: 35},
                    fontWeight: 700
                }}
            >Будьте уверены: в любой момент мы рядом с вами!
            </Typography>
        </Box>
    )
}
