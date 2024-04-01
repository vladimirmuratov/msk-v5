import {Box, Typography} from '@mui/material'
import {PartnersBlockCarousel} from '@/components/PartnersBlockCarousel'

export const PartnersBlock = ({info = []}) => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: 'var(--white)',
                paddingX: '20px',
                paddingTop: {xs: '25px', sm: '15px'},
                paddingBottom: {xs: '25px', sm: '50px'},
            }}
        >

            <Typography
                variant="h4"
                sx={{
                    color: 'var(--black)',
                    fontWeight: 500,
                    fontSize: 30,
                    lineHeight: '29px',
                    marginBottom: {xs: '25px', sm: '50px'}
                }}
            >
                Партнёры
            </Typography>

            <Typography
                sx={{
                    color: 'var(--black)',
                    fontSize: 18,
                    lineHeight: '25px',
                }}
            >
                Мы сотрудничаем со всеми ведущими больницами Москвы и Московской области (кроме детских) и прекрасно
                знаем их компетенции.
            </Typography>

            <Typography
                sx={{
                    color: 'var(--black)',
                    fontWeight: 700,
                    fontSize: 18,
                    lineHeight: '29px',
                    marginBottom: {xs: '50px', sm: '50px'}
                }}
            >
                Для вас всегда найдется место в палате.
            </Typography>

            <PartnersBlockCarousel info={info}/>
        </Box>
    )
}
