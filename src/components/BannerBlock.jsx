import {Box, Typography} from '@mui/material'
import {bannerCards} from '@/config'
import {BaseBannerCard} from '@/components/base/BaseBannerCard'

export const BannerBlock = ({router, isMobile, onOpenCallModal}) => {
    return (
        <Box
            component="section"
            sx={{
                marginTop: '102px',
                paddingBottom: {xs: '25px', sm: '50px'}
            }}
        >
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: 33, lineHeight: '40px',
                    color: 'var(--white)',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    paddingY: {xs: '25px', sm: '50px'}
                }}
            >
                ПОМОЩЬ В ОРГАНИЗАЦИИ ПЛАТНОЙ ГОСПИТАЛИЗАЦИИ
            </Typography>

            <Box sx={{display: {xs: 'none', sm: 'grid'}, gridTemplateColumns: {sm: '1fr', md: 'repeat(3, 1fr)'}, gap: '20px'}}>
                {bannerCards.map((item) => <BaseBannerCard key={item.id} {...item} router={router} isMobile={isMobile} onOpenCallModal={onOpenCallModal}/>)}
            </Box>

        </Box>
    )
}
