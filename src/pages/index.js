import Head from 'next/head'
import {Box} from '@mui/material'
import {useRouter} from 'next/router'
import {Header} from '@/components/Header'
import {BannerBlock} from '@/components/BannerBlock'
import {InfoBlock} from '@/components/InfoBlock'
import {carouselInfoBlock, imageInfoBlock, listBlock, partners, serviceBlockCards, textInfoBlock} from '@/config'
import {TextBannerOne} from '@/components/TextBannerOne'
import {ServiceBlock} from '@/components/ServiceBlock'
import {TextBlock} from '@/components/TextBlock'
import {ListBlock} from '@/components/ListBlock'
import {PartnersBlock} from '@/components/PartnersBlock'
import {ContactsBlock} from '@/components/ContactsBlock'
import {useState} from 'react'
import {Toast} from '@/components/Toast'

export default function Home() {
    const router = useRouter()
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

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
            </Box>

            {(success || failed) && <Toast isSuccess={success} isFailed={failed} handleClose={handleClose}/>}
        </>
    )
}
