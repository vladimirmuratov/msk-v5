import {Box, Typography} from '@mui/material'
import {BasePartnerCard} from '@/components/base/BasePartnerCard'

export const PartnersBlock = ({partners = []}) => {
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
                variant="h3"
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

            {/*<PartnersBlockCarousel info={partners}/>*/}

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'},
                    gap: {xs: '3px', sm: '5px', md: '10px'},
                }}
            >
                {partners.map((item) => <BasePartnerCard key={item.id} {...item}/>)}
            </Box>

        </Box>
    )
}
