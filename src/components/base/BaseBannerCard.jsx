import { Avatar, Box, Button, Typography } from '@mui/material';
import { phoneNumber } from '@/config';

export const BaseBannerCard = ({ alt, title, icon, router, isMobile, onOpenCallModal }) => {
    return (
        <Box
            onClick={isMobile ? () => router.push(`tel:${phoneNumber}`) : onOpenCallModal}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '10px',
                border: '1px solid var(--white)',
                paddingY: '30px',
                paddingX: '20px',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                    backdropFilter: 'blur(10px)',
                    transform: 'scale(103%)'
                }
            }}>
            <Avatar src={icon} alt={alt} sx={{ width: '100px', height: '100px', backgroundColor: 'var(--white)' }} />
            <Typography
                variant="h2"
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
                // onClick={isMobile ? () => router.push(`tel:${phoneNumber}`) : onOpenCallModal}
                size="large"
                variant="contained"
                sx={{
                    backgroundColor: 'var(--green)'
                }}
            >
                позвонить
            </Button>
        </Box>
    );
};
