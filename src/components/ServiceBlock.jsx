import {Box, Typography} from '@mui/material'
import {BaseServiceBlockCard} from '@/components/base/BaseServiceBlockCard'

export const ServiceBlock = ({info = [], isMobile, onOpenCallModal}) => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: 'var(--white)',
                paddingX: '20px',
                paddingBottom: {xs: '50px', sm: '100px'}
            }}
        >
            <Typography
                variant='h4'
                sx={{
                    color: 'var(--black)',
                    fontWeight: 500,
                    fontSize: 30,
                    lineHeight: '29px',
                    marginBottom: {xs: '20px', sm: '50px'}
                }}
            >
                Что мы предлагаем Вам?
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', md: '1fr 1fr'},
                    gap: {xs: '20px ', sm: '60px'}
            }}
            >
                {info.map((item) => <BaseServiceBlockCard key={item.id} {...item} isMobile={isMobile} onOpenCallModal={onOpenCallModal}/>)}
            </Box>
        </Box>
    )
}
