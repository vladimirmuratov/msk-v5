import {Box} from '@mui/material'
import {BaseInfoBlockItem} from '@/components/base/BaseInfoBlockItem'
import {InfoBlockCarousel} from '@/components/InfoBlockCarousel'

export const InfoBlock = ({carousel = [], info, bgImage}) => {
    return (
        <Box
            component="section"
            sx={{
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', md: 'repeat(3, 1fr)'},
            }}
        >

                <InfoBlockCarousel info={carousel} Component={BaseInfoBlockItem}/>

                <BaseInfoBlockItem key={info.id} {...info}/>

            <Box sx={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
        </Box>
    )
}
