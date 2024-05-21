import {Box, Typography} from '@mui/material'
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
                <Box component="li" sx={{display: 'flex', justifyContent: 'left', alignItems: {xs: 'top', lg: 'center'}}}>
                    <Typography sx={{fontWeight: 700}}>&mdash;&nbsp;</Typography>
                    <Typography
                        sx={{
                            color: 'var(--black)',
                            fontSize: {xs: 18, sm: 20},
                            fontWeight: 500,
                        }}
                    >
                        Объединенная больница с поликлиникой Управления делами Президента РФ <Box component="span" sx={{display: 'inline-block'}}>(ФГБУ "ОБП")</Box>
                    </Typography>
                </Box>
                <Box component="li" sx={{display: 'flex', justifyContent: 'left', alignItems: {xs: 'top', lg: 'center'}}}>
                    <Typography sx={{fontWeight: 700}}>&mdash;&nbsp;</Typography>
                    <Typography
                        sx={{
                            color: 'var(--black)',
                            fontSize: {xs: 18, sm: 20},
                            fontWeight: 500
                        }}
                    >
                         Клиническая больница №1 Управления делами Президента РФ <Box component="span" sx={{display: 'inline-block'}}>(ФГБУ "Клиническая больница №1")</Box>
                    </Typography>
                </Box>
                <Box component="li" sx={{display: 'flex', justifyContent: 'left', alignItems: {xs: 'top', lg: 'center'}}}>
                    <Typography sx={{fontWeight: 700}}>&mdash;&nbsp;</Typography>
                    <Typography
                        sx={{
                            color: 'var(--black)',
                            fontSize: {xs: 18, sm: 20},
                            fontWeight: 500
                        }}
                    >
                        Клиническая больница Управления делами Президента РФ <Box component="span" sx={{display: 'inline-block'}}>(ФГБУ "ЦКБ")</Box>
                    </Typography>
                </Box>
            </Box>
            <FloatBtnPulse router={router} isMobile={isMobile} onOpenCallModal={onOpenCallModal}/>
        </Box>
    )
}
