import { type BrandTheme, BrandThemes } from 'lib/constants'
import { cn } from 'utils'

const Logo = ({
  brand,
  className,
}: {
  brand: BrandTheme
  className?: string
}) => {
  let brandFillColor
  let brandFillColorDark

  if (!brand || brand === BrandThemes.ZEDA) {
    brandFillColor = '#8E72FF'
    brandFillColorDark = '#453195'
  } else if (brand === BrandThemes.TECHNOLOGIES) {
    brandFillColor = '#2E97EF'
    brandFillColorDark = '#136DB9'
  }

  return (
    <svg
      viewBox="0 0 142 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(`w-[138px]`, className)}
    >
      <title>Zeda Inc.</title>
      <path
        d="M30.2234 30.3698L30.1734 30.3198L30.1484 30.2948C30.0984 30.2698 29.9484 30.1198 29.6484 29.9448C29.0734 30.2448 28.3984 30.5198 27.5984 30.7948C25.6984 31.4448 23.1234 31.9448 19.9984 31.9448C17.0234 31.9448 14.5734 31.4948 12.6984 30.8948C11.7734 30.5948 10.9984 30.2698 10.3734 29.9448C10.0734 30.1448 9.92343 30.2698 9.87343 30.2948L9.82343 30.3448L9.79843 30.3698C7.24843 32.4948 7.59843 35.3198 7.87343 36.4198C8.12343 37.4698 8.62343 38.4198 9.24843 39.2198C12.2984 40.3448 15.9734 40.9698 20.0234 40.9698C24.0734 40.9698 27.7484 40.3448 30.7984 39.2198C31.4234 38.4448 31.9234 37.4698 32.1734 36.4198C32.4234 35.3198 32.7734 32.4948 30.2234 30.3698Z"
        fill="url(#paint0_linear_841_3274)"
      />
      <path
        opacity="0.6"
        d="M40.0016 28.7195C40.0016 26.3695 39.0766 24.2195 37.4016 22.3945C36.8516 22.8445 36.2766 23.2945 35.6516 23.6945C33.5016 25.0695 30.9016 26.0945 27.9766 26.7695C29.7766 27.4195 30.9516 28.1945 31.4266 28.7195C34.3766 31.1695 34.8516 34.7945 33.8016 37.8445C37.6766 35.6445 40.0016 32.4445 40.0016 28.7195Z"
        fill={brandFillColor}
      />
      <path
        d="M7.85 5.51973C7.575 6.64473 7.225 9.44473 9.775 11.5697L9.825 11.6197L9.85 11.6447C9.9 11.6697 10.05 11.8197 10.35 11.9947C10.975 11.6697 11.775 11.3447 12.7 11.0447C14.575 10.4447 17.025 9.99473 20 9.99473C23.15 9.99473 25.7 10.4947 27.6 11.1447C28.4 11.4197 29.075 11.6947 29.65 11.9947C29.95 11.7947 30.1 11.6697 30.15 11.6447L30.2 11.5947L30.225 11.5697C32.775 9.44473 32.425 6.61973 32.15 5.51973C31.9 4.46973 31.4 3.51973 30.775 2.71973C27.725 1.59473 24.05 0.969727 20 0.969727C15.95 0.969727 12.275 1.59473 9.225 2.71973C8.6 3.51973 8.1 4.46973 7.85 5.51973Z"
        fill="url(#paint1_linear_841_3274)"
      />
      <path
        d="M33.775 4.09473C34.85 7.14473 34.375 10.7697 31.4 13.2197C30.5 14.2447 27.05 16.1197 21.475 16.4197C21.425 16.4197 21.4 16.4197 21.35 16.4197C21.175 16.4197 21.025 16.4447 20.85 16.4447C20.775 16.4447 20.725 16.4447 20.65 16.4447C20.425 16.4447 20.2 16.4447 20 16.4447C13.025 16.4697 7.6 18.2197 4.15 20.9697C2.025 22.6447 0.625 24.7197 0.15 27.0447C0.15 27.0697 0.15 27.0697 0.15 27.0947C0.125 27.2697 0.1 27.4197 0.075 27.5947C0.075 27.6197 0.075 27.6447 0.075 27.6697C0.05 27.8197 0.05 27.9947 0.025 28.1697C0.025 28.1947 0.025 28.2197 0.025 28.2447C0.025 28.4197 0 28.5947 0 28.7697C0 32.4947 2.325 35.6947 6.225 37.8947C5.15 34.8697 5.625 31.2447 8.6 28.7697C9.5 27.7447 12.95 25.8697 18.5 25.5697C18.55 25.5697 18.6 25.5697 18.65 25.5697C18.8 25.5697 18.95 25.5447 19.125 25.5447C19.2 25.5447 19.275 25.5447 19.35 25.5447C19.55 25.5447 19.725 25.5447 19.925 25.5447C19.95 25.5447 19.975 25.5447 20 25.5447C26.975 25.5447 32.4 23.7697 35.85 21.0447C37.975 19.3697 39.375 17.2947 39.825 14.9697C39.825 14.9447 39.825 14.9447 39.825 14.9197C39.85 14.7447 39.875 14.5947 39.9 14.4197C39.9 14.3947 39.9 14.3697 39.9 14.3447C39.925 14.1947 39.925 14.0197 39.95 13.8447C39.95 13.8197 39.95 13.7947 39.95 13.7697C39.95 13.5947 39.975 13.4197 39.975 13.2447C40 9.49473 37.675 6.29473 33.775 4.09473Z"
        fill={brandFillColor}
      />
      <path
        opacity="0.6"
        d="M12.025 15.1946C10.225 14.5446 9.05 13.7696 8.575 13.2446C5.625 10.7946 5.15 7.16963 6.2 4.11963C2.325 6.29463 0 9.49463 0 13.2196C0 15.5696 0.925 17.7196 2.6 19.5446C3.15 19.0946 3.725 18.6446 4.35 18.2446C6.525 16.8696 9.1 15.8446 12.025 15.1946Z"
        fill={brandFillColor}
      />
      <path
        d="M72.025 14.3198L59.75 27.5698H72.025V30.9198H55V27.5698L67.275 14.3198H55V10.9448H72.025V14.3198Z"
        className="fill-black dark:fill-white"
      />
      <path
        d="M84.5516 31.4195C82.7266 31.4195 81.0266 30.9445 79.5516 30.0195C78.0266 29.0945 76.8266 27.8195 75.9516 26.1945C75.0516 24.6195 74.6016 22.8445 74.6016 20.9195C74.6016 19.4695 74.8516 18.0695 75.3766 16.7945C75.8766 15.5195 76.6016 14.4195 77.5516 13.4445C78.4516 12.4695 79.5016 11.7445 80.7266 11.1945C81.9266 10.6445 83.2266 10.3945 84.6016 10.3945C86.0766 10.3945 87.5016 10.6945 88.7516 11.2945C90.0266 11.8945 91.0766 12.7445 91.9766 13.7945C92.8766 14.8445 93.5516 16.1195 93.9766 17.5445C94.4516 18.9945 94.5766 20.4695 94.4766 22.1445H78.1766C78.3516 23.2945 78.7266 24.2695 79.2766 25.1695C79.8766 26.0695 80.6016 26.7445 81.5266 27.2945C82.4266 27.7945 83.4266 28.0695 84.5766 28.0945C85.7766 28.0945 86.8766 27.7945 87.8516 27.1695C88.8266 26.5445 89.6016 25.6945 90.1766 24.6195L93.5766 25.4195C92.7766 27.1945 91.5766 28.6445 89.9766 29.7445C88.3516 30.8695 86.5516 31.4195 84.5516 31.4195ZM78.0766 19.5445H91.0766C90.9516 18.4445 90.6016 17.4195 90.0266 16.4945C89.4266 15.5695 88.6266 14.8445 87.7016 14.2945C86.7766 13.7445 85.7016 13.4445 84.6016 13.4445C83.5016 13.4445 82.4766 13.6945 81.5516 14.2445C80.6266 14.7945 79.8516 15.5195 79.2516 16.4445C78.5766 17.3195 78.2016 18.3945 78.0766 19.5445Z"
        className="fill-black dark:fill-white"
      />
      <path
        d="M113.748 0.969727H117.098V30.9197H113.748V27.5197C113.073 28.7197 112.173 29.6447 111.023 30.3697C109.873 31.0947 108.523 31.4197 106.998 31.4197C105.548 31.4197 104.198 31.1697 102.923 30.6197C101.648 30.0697 100.548 29.2947 99.5734 28.3697C98.5984 27.3947 97.8234 26.2947 97.3234 25.0197C96.7734 23.7447 96.5234 22.3947 96.5234 20.9447C96.5234 19.4947 96.7734 18.1447 97.3234 16.8697C97.8734 15.5947 98.6484 14.4947 99.5734 13.5197C100.548 12.5447 101.648 11.8197 102.923 11.2697C104.198 10.7197 105.548 10.4697 106.998 10.4697C108.523 10.4697 109.898 10.8197 111.023 11.5197C112.173 12.2447 113.073 13.1697 113.748 14.3697V0.969727ZM107.023 28.1947C108.348 28.1947 109.498 27.8447 110.473 27.2197C111.448 26.5947 112.173 25.6947 112.723 24.5947C113.223 23.4947 113.523 22.2697 113.523 20.9447C113.523 19.5947 113.273 18.3447 112.723 17.2447C112.173 16.1447 111.448 15.2947 110.473 14.6197C109.498 13.9947 108.398 13.6447 107.073 13.6447C105.748 13.6447 104.573 13.9947 103.498 14.6197C102.448 15.2447 101.598 16.1447 100.948 17.2447C100.323 18.3447 99.9734 19.5697 99.9734 20.8947C99.9734 22.2447 100.323 23.4447 100.948 24.5447C101.573 25.6447 102.473 26.4947 103.548 27.1697C104.573 27.8697 105.748 28.1947 107.023 28.1947Z"
        className="fill-black dark:fill-white"
      />
      <path
        d="M137.773 10.9447H141.123V30.9197H137.773L137.648 27.5697C137.023 28.7197 136.173 29.6447 135.048 30.3697C133.948 31.0947 132.623 31.4197 131.148 31.4197C129.698 31.4197 128.298 31.1197 127.023 30.5697C125.748 30.0197 124.598 29.2447 123.623 28.2697C122.648 27.2947 121.873 26.1447 121.323 24.8697C120.773 23.5947 120.523 22.1947 120.523 20.7447C120.523 19.2947 120.773 17.9947 121.323 16.7197C121.873 15.4447 122.598 14.3447 123.523 13.3947C124.448 12.4697 125.573 11.6947 126.848 11.1447C128.123 10.5947 129.448 10.3447 130.873 10.3447C132.448 10.3447 133.798 10.7197 134.998 11.4447C136.198 12.1697 137.123 13.1447 137.898 14.2947L137.773 10.9447ZM131.073 28.1947C132.398 28.1947 133.548 27.8447 134.523 27.2197C135.498 26.5947 136.223 25.6947 136.773 24.5947C137.273 23.4947 137.573 22.2697 137.573 20.9447C137.573 19.5947 137.323 18.3447 136.773 17.2447C136.223 16.1447 135.498 15.2947 134.523 14.6197C133.548 13.9947 132.448 13.6447 131.123 13.6447C129.798 13.6447 128.623 13.9947 127.523 14.6197C126.473 15.2447 125.573 16.1447 124.973 17.2447C124.373 18.3447 124.048 19.5697 124.048 20.8947C124.048 22.2447 124.398 23.4447 125.023 24.5447C125.648 25.6447 126.548 26.4947 127.623 27.1697C128.598 27.8697 129.798 28.1947 131.073 28.1947Z"
        className="fill-black dark:fill-white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_841_3274"
          x1="7.68358"
          y1="35.4573"
          x2="32.3459"
          y2="35.4573"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={brandFillColorDark} />
          <stop offset="1" stopColor={brandFillColor} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_841_3274"
          x1="32.3397"
          y1="6.48223"
          x2="7.66015"
          y2="6.48223"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={brandFillColorDark} />
          <stop offset="1" stopColor={brandFillColor} />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
