import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, Icon } from 'components/ui'

import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import 'swiper/css'

interface SlideProps {
  heading: string
  message: string
  image: string
  alt: string
  href: string
  btnText: string
}

const Slide = ({ heading, message, image, alt, href, btnText }: SlideProps) => {
  return (
    <>
      <div className="gutter-y gutter-x relative z-10 mx-auto max-w-site">
        <div className="max-w-[60ch] text-white">
          <h2>{heading}</h2>
        </div>

        <div className="mt-96 border-l border-white pl-5">
          <p
            dangerouslySetInnerHTML={{ __html: message }}
            className="max-w-[28ch] text-base text-white"
          />
          <Button variant="outline" size="sm" className="relative z-20" asChild>
            <Link href={href}>
              <Icon
                name="arrow-right"
                className="relative -translate-x-1 transition-all group-hover:translate-x-1"
              />
              {btnText}
            </Link>
          </Button>
        </div>
      </div>

      <figure className="absolute left-0 top-0 z-0 h-full w-full">
        <Image
          src={`/images/${image}`}
          alt={alt}
          fill={true}
          style={{ objectFit: 'cover' }}
          className="brightness-[0.65]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw"
        />
      </figure>
    </>
  )
}

const SolutionSwiper = () => {
  // const paginationRef = useRef(null)

  return (
    <section className="relative bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{
          delay: 9000,
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
            message="<strong>Zeda Technologies</strong><br />We use technology to better humanity—built with
          trust."
            image="solutions-tech.jpg"
            alt="Zeda Inc. manufacturing facility"
            href="/technologies"
            btnText="Technologies"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            heading="We offer better value for the devices you know and use everyday."
            message="<strong>Zeda Health</strong><br />Devices that are good for all<br />—made better."
            image="health/med-device.jpg"
            alt="Zeda Inc. manufacturing facility"
            href="/health"
            btnText="Health"
          />
        </SwiperSlide>

        <div className="absolute bottom-6 right-10 z-10 pt-8 sm:top-6 sm:pr-10 md:bottom-auto">
          <div className="swiper-pagination" />
        </div>
      </Swiper>
    </section>
  )
}

export default SolutionSwiper
