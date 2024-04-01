import {Box, Typography} from '@mui/material'
import {BaseList} from '@/components/base/list/BaseList'

export const ListBlock = ({info = []}) => {
    return(
        <Box
            component='section'
            sx={{
                backgroundColor: 'var(--white)',
                paddingX: '20px',
                paddingTop: {xs: '50px', sm: '100px'},
                paddingBottom: {xs: '25px', sm: '50px'},
            }}
        >
            <Typography
                variant='h4'
                sx={{
                    color: 'var(--black)',
                    fontWeight: 500,
                    fontSize: 30,
                    lineHeight: '29px',
                    marginBottom: {xs: '20px', sm: '30px'}
                }}
            >
                Мы отвечаем за:
            </Typography>

            <BaseList info={info}/>
        </Box>
    )
}
