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
import {Metrika} from '@/components/Metrika'
import {Suspense} from 'react'
import {TextBannerTwo} from '@/components/TextBannerTwo'
import {CallModal} from '@/components/CallModal'

export default function Home() {
    const router = useRouter()
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)
    const [isMobile, setMobile] = useState(false)
    const [isOpenCallModal, setOpenCallModal] = useState(false)

    useEffect(() => {
        const os = navigator.userAgentData.platform

        if (os === 'Android' || os === 'iOS') {
            setMobile(true)
        }

    }, [])

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

    const handleOpenCallModal = () => setOpenCallModal(true)
    const handleCloseCallModal = () => setOpenCallModal(false)

    const handleSuccessSendCallForm = () => setSuccess(true)
    const handleFailedSendCallForm = () => setFailed(true)

    return (
        <>
            <Head>
                <title>Платная госпитализация 8(499)719-81-00, 24/7</title>
                <meta name="description" content="Московская Сервисная Компания: 10 лет опыта в платной госпитализации и транспортировке пациентов. Круглосуточные услуги в ведущих клиниках Москвы."/>
                <meta name="keywords" content="платные больницы гинекологии, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, госпитализация в терапию, сомнология в москве"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="canonical" href="https://mskdoctor.ru/" />
                <link rel="icon" href="/icon.png"/>
            </Head>
            <Box component="main" className="container">
                <Header router={router} isMobile={isMobile} onOpenCallModal={handleOpenCallModal}/>
                <BannerBlock router={router} isMobile={isMobile} onOpenCallModal={handleOpenCallModal}/>
                <TextBannerTwo router={router} isMobile={isMobile} onOpenCallModal={handleOpenCallModal}/>
                <InfoBlock carousel={carouselInfoBlock} info={textInfoBlock} bgImage={imageInfoBlock}/>
                <TextBannerOne/>
                <ServiceBlock info={serviceBlockCards} isMobile={isMobile} onOpenCallModal={handleOpenCallModal}/>
                <TextBlock isMobile={isMobile} onOpenCallModal={handleOpenCallModal}/>
                <ListBlock info={listBlock}/>
                <PartnersBlock partners={partners}/>
                <ContactsBlock onSuccess={setSuccess} onFailed={setFailed} router={router} isMobile={isMobile}
                               onOpenCallModal={handleOpenCallModal}/>
                <FloatBtn router={router}/>
                <CallModal isOpen={isOpenCallModal} onClose={handleCloseCallModal} onSuccess={handleSuccessSendCallForm}
                           onFailed={handleFailedSendCallForm} onCloseModal={handleCloseCallModal}/>
                <Suspense>
                    <Metrika/>
                </Suspense>
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
