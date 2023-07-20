import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Section from 'components/Section'
import Button from 'components/ui/Button'

import 'swiper/css/effect-fade'

import 'swiper/css'

const SolutionSwiper = () => {
  return (
    <section className="bg-violet-500 text-black">
      <Swiper
        modules={[Autoplay, EffectFade]}
        // loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="gutter-y gutter-x mx-auto max-w-site">
            <h2>
              What can we do to better lives and what can we build together?
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="gutter-y gutter-x mx-auto max-w-site">
            <p>
              What can we do
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SolutionSwiper
