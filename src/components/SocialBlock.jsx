import React from 'react'
import {Box, Link} from '@mui/material'
import Image from 'next/image'
import {phoneTelegram, phoneViber, phoneWhatsApp} from '@/config'

const SocialBlock = ({className = ''}) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}
            className={className}
        >
            <Link target="_blank" href={`https://wa.me/${phoneWhatsApp}`}>
                <Image
                    src="/social/whatsapp.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            <Link target="_blank" href={`https://t.me/${phoneTelegram}`}>
                <Image
                    src="/social/telegram.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            <Link href={`viber://add?number=${phoneViber}`}>
                <Image
                    src="/social/viber.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
        </Box>
    )
}

export default React.memo(SocialBlock)
