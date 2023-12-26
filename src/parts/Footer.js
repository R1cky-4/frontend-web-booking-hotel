import Button from "components/Button";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-primary md:py-12 py-10 relative">
      <div className="footer-wrapper">
        <div className="wrapper-text-about hidden">
          <h4 className="text-white about">Tentang Kami</h4>
          <p className="text-white">
            Kami memberikan tempat penginapan yang sesuai kebutuhan anda dengan
            harga yang sangat terjangkau. Pelayanan ramah dan profesional
            merupakan tanggung jawab kami dalam kepuasan pelanggan. Mari
            mencintai negeri ini dengan liburan di destinasi alam Indoesia, kami
            tunggu anda untuk segera merasakan indahnya alam dan tempat hotel
            kami
          </p>
        </div>
        <div className="social-media">
          <Button
            type="link"
            isExternal
            href="https://www.instagram.com/"
            target="_blank"
          >
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[25px] md:h-[25px] w-4 h-4"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.5049 6.88477C9.39941 6.88477 6.89453 9.38965 6.89453 12.4951C6.89453 15.6006 9.39941 18.1055 12.5049 18.1055C15.6104 18.1055 18.1152 15.6006 18.1152 12.4951C18.1152 9.38965 15.6104 6.88477 12.5049 6.88477ZM12.5049 16.1426C10.498 16.1426 8.85742 14.5068 8.85742 12.4951C8.85742 10.4834 10.4932 8.84766 12.5049 8.84766C14.5166 8.84766 16.1523 10.4834 16.1523 12.4951C16.1523 14.5068 14.5117 16.1426 12.5049 16.1426ZM19.6533 6.65527C19.6533 7.38281 19.0674 7.96387 18.3447 7.96387C17.6172 7.96387 17.0361 7.37793 17.0361 6.65527C17.0361 5.93262 17.6221 5.34668 18.3447 5.34668C19.0674 5.34668 19.6533 5.93262 19.6533 6.65527ZM23.3691 7.9834C23.2861 6.23047 22.8857 4.67773 21.6016 3.39844C20.3223 2.11914 18.7695 1.71875 17.0166 1.63086C15.21 1.52832 9.79492 1.52832 7.98828 1.63086C6.24023 1.71387 4.6875 2.11426 3.40332 3.39355C2.11914 4.67285 1.72363 6.22559 1.63574 7.97852C1.5332 9.78516 1.5332 15.2002 1.63574 17.0068C1.71875 18.7598 2.11914 20.3125 3.40332 21.5918C4.6875 22.8711 6.23535 23.2715 7.98828 23.3594C9.79492 23.4619 15.21 23.4619 17.0166 23.3594C18.7695 23.2764 20.3223 22.876 21.6016 21.5918C22.8809 20.3125 23.2812 18.7598 23.3691 17.0068C23.4717 15.2002 23.4717 9.79004 23.3691 7.9834ZM21.0352 18.9453C20.6543 19.9023 19.917 20.6396 18.9551 21.0254C17.5146 21.5967 14.0967 21.4648 12.5049 21.4648C10.9131 21.4648 7.49023 21.5918 6.05469 21.0254C5.09766 20.6445 4.36035 19.9072 3.97461 18.9453C3.40332 17.5049 3.53516 14.0869 3.53516 12.4951C3.53516 10.9033 3.4082 7.48047 3.97461 6.04492C4.35547 5.08789 5.09277 4.35059 6.05469 3.96484C7.49512 3.39355 10.9131 3.52539 12.5049 3.52539C14.0967 3.52539 17.5195 3.39844 18.9551 3.96484C19.9121 4.3457 20.6494 5.08301 21.0352 6.04492C21.6064 7.48535 21.4746 10.9033 21.4746 12.4951C21.4746 14.0869 21.6064 17.5098 21.0352 18.9453Z"
                  fill="#1A202C"
                />
              </svg>
            </figure>
          </Button>
          <Button
            type="link"
            target="_blank"
            isExternal
            href="https://www.facebook.com/"
          >
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[25px] md:h-[25px] w-4 h-4"
                viewBox="0 0 25 25"
                fill="none"
              >
                <g clipPath="url(#clip0_62_79)">
                  <path
                    d="M24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.1533 4.42822 23.1631 10.2173 24.0723V15.6099H7.14111V12.1094H10.2173V9.44141C10.2173 6.40674 12.0239 4.73047 14.791 4.73047C16.1162 4.73047 17.502 4.9668 17.502 4.9668V7.94531H15.9746C14.4707 7.94531 14.0015 8.87891 14.0015 9.83643V12.1094H17.3599L16.8228 15.6099H14.0015V24.0723C19.7905 23.1631 24.2188 18.1533 24.2188 12.1094Z"
                    fill="#1A202C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_62_79">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </figure>
          </Button>
          <Button
            type="link"
            target="_blank"
            href="https://twitter.com/?lang=en"
            isExternal
          >
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[25px] md:h-[25px] w-4 h-4"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M22.4302 7.40791C22.446 7.62998 22.446 7.8521 22.446 8.07417C22.446 14.8476 17.2906 22.6522 7.86802 22.6522C4.96509 22.6522 2.26841 21.8114 0 20.3521C0.412451 20.3997 0.808984 20.4155 1.2373 20.4155C3.63257 20.4155 5.83755 19.6065 7.59834 18.2265C5.3458 18.1789 3.45811 16.7036 2.80771 14.6731C3.125 14.7207 3.44224 14.7524 3.77539 14.7524C4.2354 14.7524 4.69546 14.689 5.12373 14.578C2.77603 14.102 1.01519 12.0399 1.01519 9.54941V9.48599C1.69727 9.8667 2.49048 10.1046 3.33115 10.1363C1.95107 9.21626 1.04692 7.64585 1.04692 5.86919C1.04692 4.91743 1.30068 4.04497 1.74487 3.28354C4.26709 6.39268 8.05835 8.4231 12.3096 8.64522C12.2303 8.2645 12.1827 7.86797 12.1827 7.47139C12.1827 4.64775 14.4669 2.34766 17.3064 2.34766C18.7816 2.34766 20.1141 2.96631 21.05 3.96567C22.208 3.7436 23.3184 3.31528 24.302 2.72837C23.9212 3.91812 23.1122 4.91748 22.0494 5.55195C23.0805 5.44097 24.0799 5.15537 24.9999 4.75884C24.302 5.77402 23.4295 6.67817 22.4302 7.40791Z"
                  fill="#1A202C"
                />
              </svg>
            </figure>
          </Button>
          <Button
            type="link"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=6285866123403"
            isExternal
          >
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[25px] md:h-[25px] w-4 h-4"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M20.5986 5.17871C18.5527 3.12793 15.8281 2 12.9326 2C6.95605 2 2.09277 6.86328 2.09277 12.8398C2.09277 14.749 2.59082 16.6143 3.53809 18.2598L2 23.875L7.74707 22.3662C9.3291 23.2305 11.1113 23.6846 12.9277 23.6846H12.9326C18.9043 23.6846 23.875 18.8213 23.875 12.8447C23.875 9.94922 22.6445 7.22949 20.5986 5.17871ZM12.9326 21.8584C11.3115 21.8584 9.72461 21.4238 8.34277 20.6035L8.01562 20.4082L4.60742 21.3018L5.51562 17.9766L5.30078 17.6348C4.39746 16.1992 3.92383 14.5439 3.92383 12.8398C3.92383 7.87402 7.9668 3.83105 12.9375 3.83105C15.3447 3.83105 17.6055 4.76855 19.3047 6.47266C21.0039 8.17676 22.0488 10.4375 22.0439 12.8447C22.0439 17.8154 17.8984 21.8584 12.9326 21.8584ZM17.874 15.1104C17.6055 14.9736 16.2725 14.3193 16.0234 14.2314C15.7744 14.1387 15.5938 14.0947 15.4131 14.3682C15.2324 14.6416 14.7148 15.2471 14.5537 15.4326C14.3975 15.6133 14.2363 15.6377 13.9678 15.501C12.376 14.7051 11.3311 14.0801 10.2812 12.2783C10.0029 11.7998 10.5596 11.834 11.0771 10.7988C11.165 10.6182 11.1211 10.4619 11.0527 10.3252C10.9844 10.1885 10.4424 8.85547 10.2178 8.31348C9.99805 7.78613 9.77344 7.85938 9.60742 7.84961C9.45117 7.83984 9.27051 7.83984 9.08984 7.83984C8.90918 7.83984 8.61621 7.9082 8.36719 8.17676C8.11816 8.4502 7.41992 9.10449 7.41992 10.4375C7.41992 11.7705 8.3916 13.0596 8.52344 13.2402C8.66016 13.4209 10.4326 16.1553 13.1523 17.332C14.8711 18.0742 15.5449 18.1377 16.4043 18.0107C16.9268 17.9326 18.0059 17.3564 18.2305 16.7217C18.4551 16.0869 18.4551 15.5449 18.3867 15.4326C18.3232 15.3105 18.1426 15.2422 17.874 15.1104Z"
                  fill="#1A202C"
                />
              </svg>
            </figure>
          </Button>
        </div>
        <div className="wrapper-subscribe hidden">
          <p className="text-sub">Subscribe untuk informasi terbaru</p>
          <div className="group-input">
            <input
              type="email"
              placeholder="email anda"
              className="text-dark"
            />
            <Button
              type="button"
              className="text-white bg-primary2 p-2 rounded-lg font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="wrapper-copyright">
          <span>
            Copyright 2023 | All rights reserved | HALAN2 Power by R1cky
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
