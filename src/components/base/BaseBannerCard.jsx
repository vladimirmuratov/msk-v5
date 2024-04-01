import {Avatar, Box, Button, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const BaseBannerCard = ({title, icon, router}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            border: '1px solid var(--white)',
            paddingY: '30px',
            paddingX: '20px'
        }}>
            <Avatar src={icon} alt="icon" sx={{width: '100px', height: '100px', backgroundColor: 'var(--white)'}}/>
            <Typography
                sx={{
                    fontWeight: 500,
                    fontSize: 22,
                    lineHeight: '26px',
                    color: 'var(--white)',
                    textAlign: 'center'
                }}
            >
                {title}
            </Typography>
            <Button
                onClick={() => router.push(`tel:${phoneNumber}`)}
                size="large"
                variant="contained"
                sx={{
                    backgroundColor: 'var(--green)'
                }}
            >
                позвонить
            </Button>
        </Box>
    )
}
