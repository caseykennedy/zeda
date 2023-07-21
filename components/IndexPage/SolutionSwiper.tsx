import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Section from 'components/Section'
import Button from 'components/ui/Button'

import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import 'swiper/css'
import styles from './swiper.module.css'

const Slide = ({ heading, message, image, alt, href, btnText }) => {
  return (
    <>
      <div className="gutter-y gutter-x relative z-10 mx-auto max-w-site">
        <div className="max-w-[48ch] text-white">
          <h2>{heading}</h2>
        </div>

        <div className="mt-96 border-l border-white pl-5">
          <p
            dangerouslySetInnerHTML={{ __html: message }}
            className="max-w-[38ch] text-base text-white"
          />
          <Button variant="outline" size="sm" className="relative z-20" asChild>
            <Link href={href}>{btnText}</Link>
          </Button>
        </div>
      </div>

      <figure className="absolute left-0 top-0 z-0 h-full w-full">
        <Image
          src={`/images/${image}`}
          alt={alt}
          fill={true}
          style={{ objectFit: 'cover' }}
          sizes="100%"
          className="brightness-75"
        />
      </figure>
    </>
  )
}

const SolutionSwiper = () => {
  const paginationRef = useRef(null)

  return (
    <section className="relative bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={{ el: '.swiper-pagination', clickable: true }}
        loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Slide
            heading="What can we do to better lives and what can we build together?"
            message="<strong>Zeda technologies</strong><br />We use technology to better humanity<br />—built using
          trust."
            image="solutions-tech.jpg"
            alt="Zeda Inc. manufacturing facility"
            href="/technologies"
            btnText="Zeda Technologies"
          />
        </SwiperSlide>

        <div className="absolute right-0 top-0 z-10 pr-10 pt-8">
          <div className="swiper-pagination" />
        </div>
      </Swiper>
    </section>
  )
}

export default SolutionSwiper
