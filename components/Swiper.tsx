import Autoplay from 'swiper'
import { Swiper as SwiperPrimitive, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'

const Swiper = () => {
  return (
    <SwiperPrimitive
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
    </SwiperPrimitive>
  )
}

export default Swiper
