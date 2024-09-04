import {Box, Link, Typography} from '@mui/material'
import {address, phoneNumber} from '@/config'
import {MessageForm} from '@/components/MessageForm'
import SocialBlock from '@/components/SocialBlock'

export const ContactsBlock = ({onSuccess, onFailed, router, isMobile, onOpenCallModal}) => {
    const goPhone = () => router.push(`tel:${phoneNumber}`)

    return (
        <Box
            component="section"
            id="contacts"
            sx={{
                scrollMarginTop: '100px',
                backgroundColor: 'var(--white)',
                paddingY: {xs: '25px', md: '50px'},
                paddingX: '20px',
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', md: '1fr 1fr'},
                gap: '20px'
            }}>

            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {xs: 22, sm: 30},
                        fontWeight: 600,
                        color: 'var(--black)',
                        marginBottom: {xs: '20px', sm: '30px'}
                    }}
                >
                    Контакты
                </Typography>

                <Typography sx={{color: 'var(--black)', fontSize: 18}}>
                    Мы работаем ежедневно и круглосуточно, без выходных и праздников. Вы можете получить
                    консультацию специалиста по телефону:
                    {isMobile
                        ? (<Link
                                href={`tel:${phoneNumber}`}
                                sx={{
                                    color: 'var(--green)',
                                    fontWeight: 700,
                                    textDecorationColor: 'var(--green)'
                                }}>{phoneNumber}</Link>
                        )
                        : (<Link
                                onClick={onOpenCallModal}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'var(--green)',
                                    fontWeight: 700,
                                    textDecorationColor: 'var(--green)'
                                }}>{phoneNumber}</Link>
                        )}.
                    Мы постараемся ответить Вам максимально оперативно!
                </Typography>
                <Box sx={{marginTop: '20px'}}>
                    <Typography sx={{color: 'var(--black)', fontSize: 18, textTransform: 'uppercase'}}>ООО
                        "МСК"</Typography>
                    <Typography sx={{color: 'var(--black)', fontSize: 18, textTransform: 'uppercase'}}>ИНН:
                        9725116009</Typography>
                    <Typography sx={{color: 'var(--black)', fontSize: 18, textTransform: 'uppercase'}}>КПП:
                        772501001</Typography>
                    <Typography sx={{color: 'var(--black)', fontSize: 18, textTransform: 'uppercase'}}>ОГРН:
                        1237700147343</Typography>
                </Box>
                <Box sx={{marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center'}}>
                        <img src="/contact-icons/adres.png" alt="icon"/>
                        <Typography sx={{color: 'var(--black)', fontWeight: 700, fontSize: 14, textAlign: 'center'}}>Центральный
                            офис</Typography>
                        <Typography
                            sx={{color: 'var(--red)', fontWeight: 700, textAlign: 'center'}}>{address}</Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center'}}>
                        <img src="/contact-icons/telefon.png" alt="icon"/>
                        <Typography sx={{color: 'var(--black)', fontWeight: 700, fontSize: 14}}>Телефон</Typography>
                        <Typography
                            onClick={isMobile ? goPhone : onOpenCallModal}
                            sx={{
                                color: 'var(--red)',
                                fontWeight: 700,
                                textAlign: 'center',
                                cursor: 'pointer'
                            }}
                        >
                            {phoneNumber}
                        </Typography>
                        <SocialBlock className='banner-social-mobile'/>
                    </Box>

                </Box>
            </Box>

            <MessageForm onSuccess={onSuccess} onFailed={onFailed}/>

        </Box>
    )
}
