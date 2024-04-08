import Head from 'next/head'
import {Box, DialogContentText} from '@mui/material'
import {useRouter} from 'next/router'
import {Header} from '@/components/Header'
import {BannerBlock} from '@/components/BannerBlock'
import {InfoBlock} from '@/components/InfoBlock'
import {
    carouselInfoBlock,
    imageInfoBlock,
    listBlock,
    partners,
    serviceBlockCards,
    textInfoBlock,
    timeOut
} from '@/config'
import {TextBannerOne} from '@/components/TextBannerOne'
import {ServiceBlock} from '@/components/ServiceBlock'
import {TextBlock} from '@/components/TextBlock'
import {ListBlock} from '@/components/ListBlock'
import {PartnersBlock} from '@/components/PartnersBlock'
import {ContactsBlock} from '@/components/ContactsBlock'
import {useEffect, useState} from 'react'
import {FloatBtn} from '@/components/FloatBtn'
import {BaseModal} from '@/components/base/BaseModal'

export default function Home() {
    const router = useRouter()
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        let timeout
        if (success || failed) {
            timeout = setTimeout(() => {
                handleClose()
            }, timeOut)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [success, failed])

    const handleClose = () => {
        setFailed(false)
        setSuccess(false)
    }

    return (
        <>
            <Head>
                <title>МСК Доктор</title>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/icon.png"/>
            </Head>
            <Box component="main" className="container">
                <Header router={router}/>
                <BannerBlock router={router}/>
                <InfoBlock carousel={carouselInfoBlock} info={textInfoBlock} bgImage={imageInfoBlock}/>
                <TextBannerOne/>
                <ServiceBlock info={serviceBlockCards}/>
                <TextBlock/>
                <ListBlock info={listBlock}/>
                <PartnersBlock info={partners}/>
                <ContactsBlock onSuccess={setSuccess} onFailed={setFailed} router={router}/>
                <FloatBtn router={router}/>
            </Box>

            {/*{(success || failed) && <Toast isSuccess={success} isFailed={failed} handleClose={handleClose}/>}*/}

            {success && (
                <BaseModal title="Сообщение отправлено!" open={success} handleClose={handleClose}
                           color="var(--green)">
                    <DialogContentText id="alert-dialog-description">
                        Скоро в Вами свяжется наш специалист
                    </DialogContentText>
                </BaseModal>
            )}

            {failed && (
                <BaseModal title="Ошибка сервера!" open={failed} handleClose={handleClose} color="var(--red)">
                    <DialogContentText id="alert-dialog-description">
                        Попробуйте позже
                    </DialogContentText>
                </BaseModal>
            )}

        </>
    )
}
