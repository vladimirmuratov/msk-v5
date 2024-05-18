import {Box, Typography} from '@mui/material'
import {FloatBtn} from '@/components/FloatBtn'
import {FloatBtnPulse} from '@/components/FloatBtnPulse'

export const TextBannerTwo = ({router, isMobile, onOpenCallModal}) => {
    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                backgroundColor: 'var(--white)',
                paddingY: {xs: '50px', sm: '100px'},
                paddingX: '20px',
            }}
        >
            <Typography
                sx={{
                    color: 'var(--green)',
                    textAlign: 'center',
                    // paddingY: {xs: '50px', sm: '100px'},
                    fontSize: {xs: 22, sm: 35},
                    fontWeight: 700,
                    marginBottom: {xs: '20px', sm: '40px'}
                }}
            >
                Платная госпитализация в стационары г.Москвы в экстренном и плановым порядке
            </Typography>

            <Box component="ul">
                <Box component="li">
                    <Typography
                        sx={{
                            color: 'var(--black)',
                            fontSize: {xs: 22, sm: 25},
                            fontWeight: 500,
                        }}
                    >
                        &mdash; Объединенная больница с поликлиникой Управления делами Президента РФ
                    </Typography>
                </Box>
                <Box component="li">
                    <Typography
                        sx={{
                            color: 'var(--black)',
                            fontSize: {xs: 22, sm: 25},
                            fontWeight: 500
                        }}
                    >
                        &mdash; Клиническая больница №1 (Волынская) Управления делами Президента РФ
                    </Typography>
                </Box>
                <Box component="li">
                    <Typography
                        sx={{
                            color: 'var(--black)',
                            fontSize: {xs: 22, sm: 25},
                            fontWeight: 500
                        }}
                    >
                        &mdash; Клиническая больница Управления делами Президента РФ
                    </Typography>
                </Box>
            </Box>
            <FloatBtnPulse router={router} isMobile={isMobile} onOpenCallModal={onOpenCallModal}/>
        </Box>
    )
}
