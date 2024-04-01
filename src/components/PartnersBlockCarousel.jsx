import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import {BasePartnerCard} from '@/components/base/BasePartnerCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const PartnersBlockCarousel = ({info = []}) => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            // slidesPerView={6}
            navigation
            pagination={{clickable: true}}
            autoplay={{delay: 2500}}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                320: {
                    slidesPerView: 2
                },
                400: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 3
                },
                700: {
                    slidesPerView: 4
                },
                900: {
                    slidesPerView: 5
                },
                1000: {
                    slidesPerView: 6
                }
            }}
        >
            {info.map((item) => (
                <SwiperSlide key={item.id}>
                    <BasePartnerCard {...item}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
