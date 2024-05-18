import {Box, Link, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const BaseServiceBlockCard = ({src, label, text, isMobile, onOpenCallModal}) => {
    return (
        <Box sx={{
            display: 'flex',
            gap: {xs: '20px', sm: '30px'}
        }}>
            <img className="serviceIcon" src={src} alt="icon"/>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography sx={{
                    fontSize: {xs: '18px', sm: '24px'},
                    fontWeight: 700,
                    color: 'var(--black)',
                    lineHeight: '27px',
                    marginBottom: {xs: '15px', sm: '30px'}
                }}>{label}</Typography>

                <Typography sx={{color: 'var(--black)', lineHeight: 1.3}}>{text}</Typography>

                <Typography sx={{color: 'var(--black)', marginTop: {xs: '15px', sm: '30px'}}}>
                    Подробнее по телефону:<br/>
                    {isMobile
                        ? (<Link
                        href={`tel:${phoneNumber}`}
                        sx={{
                            color: 'var(--green)',
                            fontWeight: 700,
                            ':hover': {textDecoration: 'underline'},
                            textDecorationColor: 'var(--green)'
                        }}
                    >{phoneNumber}</Link>)
                    : (<Link
                            onClick={onOpenCallModal}
                            sx={{
                                color: 'var(--green)',
                                fontWeight: 700,
                                ':hover': {textDecoration: 'underline'},
                                textDecorationColor: 'var(--green)',
                                cursor: 'pointer'
                            }}
                        >{phoneNumber}</Link>)}
                    , круглосуточно
                </Typography>
            </Box>

        </Box>
    )
}
