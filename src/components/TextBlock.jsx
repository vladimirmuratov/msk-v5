import {Box, Link, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const TextBlock = ({isMobile, onOpenCallModal}) => {
    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                backgroundColor: 'var(--green)',
                paddingY: {xs: '25px', sm: '50px'},
                paddingX: '20px'
            }}
        >
            <Typography sx={{color: 'var(--black)', fontSize: 22, fontWeight: 300, lineHeight: 1.3}}>
                Плановая госпитализация больного — важнейший момент жизни, во время
                которого нужно принимать быстрые и безошибочные решения.
            </Typography>
            <Typography sx={{color: 'var(--red)', fontSize: 22, fontWeight: 300}}>
                И в этот момент мы готовы быть рядом!
            </Typography>
            <Typography sx={{color: 'var(--black)', fontSize: 18, fontWeight: 400}}>
                Позвоните нам или воспользуйтесь контактной формой: <Link href="#contacts" sx={{
                color: 'var(--red)',
                textDecorationColor: 'var(--red)'
            }}>написать</Link>
            </Typography>
            <Typography sx={{color: 'var(--black)', fontSize: 18, fontWeight: 400}}>
                Подробнее по телефону:<br/>
                {isMobile
                    ? (<Link
                        href={`tel:${phoneNumber}`}
                        sx={{
                            color: 'var(--red)',
                            textDecorationColor: 'var(--red)'
                        }}>{phoneNumber}</Link>)
                    : (<Link
                        onClick={onOpenCallModal}
                        sx={{
                            cursor: 'pointer',
                            color: 'var(--red)',
                            textDecorationColor: 'var(--red)'
                        }}>{phoneNumber}</Link>)}
                , круглосуточно
            </Typography>
        </Box>
    )
}
