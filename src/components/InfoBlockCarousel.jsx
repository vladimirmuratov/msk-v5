import Carousel from 'react-material-ui-carousel'

export const InfoBlockCarousel = ({info = [], Component}) => {

    return (
        <Carousel
            sx={{height: '100%'}}
            autoPlay={true}
            navButtonsAlwaysInvisible={true}
            indicators={false}
            animation='fade'
            height='100%'
        >
            {info.map((item) => <Component key={item.id} {...item}/>)}
        </Carousel>
    )
}
