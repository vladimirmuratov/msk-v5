import React from 'react';
import { Box, Link } from '@mui/material';
import Image from 'next/image';
import { email, telegramLink, phoneWhatsApp, maxLink } from '@/config';

const SocialBlock = ({ className = '' }) => {
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
            {/*<Link target="_blank" href={`https://wa.me/${phoneWhatsApp}`}>
                <Image
                    src="/social/whatsapp.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>*/}
            <Link target="_blank" href={maxLink}>
                <Image
                    src="/social/max.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            <Link target="_blank" href={telegramLink}>
                <Image
                    src="/social/telegram.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
            {/*<Link href={`viber://add?number=${phoneViber}`}>
                <Image
                    src="/social/viber.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>*/}
            <Link href={`mailto:${email}`}>
                <Image
                    src="/social/email.svg"
                    alt="icon"
                    width={30}
                    height={30}
                />
            </Link>
        </Box>
    );
};

export default React.memo(SocialBlock);
