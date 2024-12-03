import {Box, Typography} from '@mui/material'

export const BaseInfoBlockItem = ({title = null, text = null, img = null, alt = ''}) => {

    return (
        <Box sx={{height: '100%', backgroundColor: 'var(--green)', paddingBottom: '30px'}}>
            {img && <img className="img" src={img} alt={alt}/>}
            {title && <Typography
                sx={{
                    color: 'var(--white)',
                    fontSize: 25,
                    lineHeight: '32px',
                    textDecoration: 'underline',
                    paddingX: '30px',
                    paddingTop: {xs: '20px', md: '100px'},
                }}
            >
                {title}
            </Typography>}
            {text && <Typography
                sx={{
                    fontSize: '18px',
                    lineHeight: '29px',
                    color: 'var(--white)',
                    paddingX: '30px',
                    paddingTop: '20px'
                }}
            >
                {text}
            </Typography>}
        </Box>
    )
}
