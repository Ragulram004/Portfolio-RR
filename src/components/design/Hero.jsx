import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};



export const LogoParallax = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem] filter blur-sm">

      {/* Moving background logos */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div
            className={`w-32 h-32 -ml-16 -mt-36 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <svg width="40%" height="200%" viewBox="0 0 292 316" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M74.3568 284.58L1.23047 51.2316L234.326 0.383707L264.988 242.956L175.315 290.246L74.3568 284.58Z" fill="#E44F26"/>
              <path d="M171.403 269.962L243.908 231.736L217.702 24.42L122.376 45.2145L171.403 269.962Z" fill="#F1662A"/>
              <path d="M141.609 133.38L102.685 141.872L93.4964 112.637L135.104 103.561L128.751 74.4386L54.9956 90.5278L57.4058 98.1941L82.1336 176.863L147.962 162.503L141.609 133.38ZM158.107 209.008L157.982 209.074L123.315 207.468L116.155 184.7L86.6244 191.142L100.717 235.956L164.591 239.374L164.716 239.308L158.107 209.008Z" fill="#EBEBEB"/>
              <path d="M140.914 133.535L147.267 162.659L183.179 154.826L188.041 193.336L157.418 209.196L164.029 239.498L220.209 209.9L219.573 204.886L209.698 126.723L208.708 118.747L140.914 133.535ZM128.056 74.5904L134.409 103.714L204.856 88.3471L204.014 81.6803L202.124 66.6256L201.116 58.653L128.056 74.5904Z" fill="white"/>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={`w-40 h-40 -ml-20 -mt-32 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <svg width="70" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.326 0.00927734L156.127 36.3257L119.81 156.127L0.00934526 119.811L36.326 0.00927734Z" fill="#F0DB4F"/>
              <path d="M118.667 124.582C119.446 118.851 117.274 113.18 108.015 105.699C104.859 102.902 101.136 100.456 100.761 97.3075C100.818 95.559 101.037 94.6306 101.608 93.7345C103.356 90.7955 107.449 90.9547 110.179 92.777C111.918 94.0127 113.299 96.0602 113.683 98.7753C119.867 96.9949 119.85 97.0137 124.157 95.8073C123.456 93.3578 123.038 92.1985 122.438 91.0596C120.382 86.6441 116.688 83.5712 109.871 81.6541L106.203 81.0407C102.562 80.8701 98.8004 81.6682 96.1888 83.4753C88.567 88.191 86.7704 99.9432 92.2663 106.67C97.5179 113.833 107.153 118.022 106.982 123.18C106.453 129.398 100.345 129.611 95.0482 127.272C91.2499 125.2 89.6198 122.456 88.3181 117.97C83.0447 119.207 83.0447 119.207 77.6278 120.461C77.9967 123.184 78.8179 124.615 80.0234 127.243C86.0331 138.676 107.88 144.826 115.814 132.684C116.111 132.274 118.084 129.541 118.667 124.582ZM84.7624 74.8129L73.5569 71.4161L64.729 100.372C62.8613 106.533 61.4678 112.278 59.941 113.706C57.2695 116.614 53.1493 114.904 51.4135 113.657C49.7366 112.091 49.1521 110.41 48.5813 108.112C48.4321 107.456 48.324 106.951 48.2537 106.893L37.4518 109.711C38.0242 113.279 39.4378 116.654 41.7649 119.274C45.2581 123.132 50.759 125.657 57.179 126.098C61.4304 126.145 65.5155 124.809 68.3678 121.757C72.345 117.826 73.5234 111.967 75.4094 105.663C78.581 95.4074 81.6383 85.1188 84.7624 74.8129Z" fill="#323330"/>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[5deg]">
        <div
            className={`w-40 h-40 -ml-20 mt-32 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <svg width="50" height="79" viewBox="0 0 147 79" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M145.361 76.3849C143.232 77.0561 140.897 77.007 138.798 76.2468C136.699 75.4865 134.981 74.0678 133.969 72.2588C127.565 63.3321 120.466 54.788 113.654 46.0695L110.697 42.4044C102.173 52.1794 93.6571 61.5577 85.8608 71.3119C84.8368 73.0001 83.1581 74.2958 81.1374 74.9575C79.1166 75.6192 76.8917 75.6019 74.8772 74.9086L106.864 38.1806L78.5118 3.82346C80.6161 3.19274 82.9033 3.23019 84.9873 3.92951C87.0713 4.62883 88.8243 5.94717 89.9503 7.66193C96.5158 16.5926 103.817 25.1409 111.067 34.1931C118.721 25.5174 126.285 17.2367 133.37 8.65762C134.399 6.99723 136.078 5.73515 138.088 5.11155C140.097 4.48795 142.297 4.54637 144.269 5.27568L132.727 18.3778C127.556 24.2198 122.466 30.0998 117.096 35.7939C116.666 36.1231 116.319 36.5299 116.078 36.9877C115.836 37.4456 115.706 37.9442 115.696 38.4509C115.685 38.9577 115.795 39.4612 116.017 39.9285C116.24 40.3958 116.57 40.8165 116.987 41.163C126.407 52.7829 135.745 64.4368 145.361 76.3849ZM0.843205 35.545C1.76535 31.9592 2.37013 28.0421 3.61703 24.3909C11.0578 2.37351 39.7228 -6.26953 59.0327 7.85989C70.34 16.1302 72.9753 27.5751 72.1479 40.3912L7.51988 39.0703C6.00104 61.966 24.2582 76.1815 48.1128 69.6036C51.984 68.4547 55.4692 66.4626 58.2537 63.807C61.0382 61.1514 63.0344 57.9159 64.0622 54.3925C65.3882 50.8149 67.4203 50.2437 71.2361 51.3668C70.5146 55.7406 68.6902 59.9069 65.9001 63.5525C63.11 67.198 59.4268 70.2278 55.1275 72.4141C48.0308 75.6986 39.9413 76.892 32.0157 75.8236C24.0901 74.7552 16.7345 71.4798 11.0008 66.4657C5.34759 60.5589 2.00737 53.173 1.48992 45.4355C1.51496 44.2107 1.01477 42.9745 0.755741 41.8158C0.771726 39.7254 0.800881 37.6351 0.843205 35.545ZM7.70142 34.1351L66.1495 35.3296C66.125 18.7113 54.6117 6.68812 38.942 6.26024C21.4969 5.68716 8.77989 16.9622 7.66221 34.0623L7.70142 34.1351Z" fill="white"/>
            </svg>

          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[75deg]">
          <div
            className={`w-12 h-42 -ml-16 -mt-31 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <svg width="60" height="129" viewBox="0 0 144 129" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.255 76.9293C79.1849 76.9293 84.802 71.3115 84.802 64.3823C84.802 57.4531 79.1849 51.8353 72.255 51.8353C65.3258 51.8353 59.708 57.4531 59.708 64.3823C59.708 71.3115 65.3258 76.9293 72.255 76.9293Z" fill="#00D8FF"/>
            <path d="M72.2557 38.8713C89.1016 38.8713 104.751 41.2885 116.551 45.3513C130.768 50.2454 139.509 57.6642 139.509 64.3823C139.509 71.3828 130.245 79.2643 114.978 84.3225C103.436 88.1466 88.2468 90.1427 72.2557 90.1427C55.8604 90.1427 40.3348 88.269 28.6621 84.2801C13.8944 79.2327 5 71.2496 5 64.3823C5 57.7187 13.3463 50.357 27.3634 45.4703C39.2069 41.3409 55.2424 38.8713 72.253 38.8713H72.2557Z" stroke="#00D8FF" stroke-width="8.911"/>
            <path d="M50.0476 51.7001C58.4639 37.1072 68.3751 24.758 77.7894 16.5664C89.1312 6.69547 99.9255 2.82969 105.744 6.18501C111.809 9.68224 114.009 21.6454 110.764 37.3978C108.312 49.3065 102.452 63.4608 94.4624 77.3139C86.2715 91.5167 76.8929 104.03 67.6071 112.146C55.8571 122.417 44.4971 126.135 38.5485 122.704C32.7761 119.377 30.5688 108.468 33.3383 93.884C35.6781 81.561 41.5501 66.4362 50.045 51.7001H50.0476Z" stroke="#00D8FF" stroke-width="8.911"/>
            <path d="M50.0684 77.3509C41.6287 62.7742 35.8825 48.0172 33.4842 35.7702C30.5969 21.0139 32.6381 9.73202 38.4522 6.36661C44.5112 2.85863 55.9734 6.92751 67.9998 17.6062C77.0926 25.6794 86.4295 37.8235 94.4415 51.6631C102.656 65.8524 108.812 80.228 111.207 92.3258C114.238 107.636 111.785 119.333 105.842 122.773C100.075 126.112 89.5225 122.577 78.2702 112.894C68.7631 104.713 58.5916 92.0729 50.0684 77.3509Z" stroke="#00D8FF" stroke-width="8.911"/>
            </svg>

          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[70deg]">
          <div
            className={`w-40 h-40 -ml-20 -mt-32 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <svg width="70" height="371" viewBox="0 0 303 371" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M262.862 355.021L252.519 357.222C252.519 357.222 228.764 313.398 211.065 319.574C193.755 313.699 -80.7393 -189.409 249.791 294.96C244.611 302.729 242.648 312.131 244.315 321.182C249.267 333.097 255.484 344.439 262.862 355.021Z" fill="url(#paint0_linear_24_52)"/>
            <path d="M242.279 311.479C255.307 281.103 259.436 247.712 254.188 215.19C248.939 182.668 234.528 152.35 212.63 127.763C153.136 63.6314 99.2142 62.3867 89.563 55.5975C82.5289 51.9526 75.8425 47.6809 69.585 42.8344L191.576 246.797C191.576 246.797 221.308 313.488 242.279 311.479Z" fill="url(#paint1_linear_24_52)"/>
            <path d="M225.967 323.206C225.967 323.206 129.745 315.864 85.557 230.114C71.4048 204.742 62.8415 176.641 60.4453 147.709C58.0492 118.777 61.876 89.6878 71.6674 62.4061C72.799 59.2033 73.1929 55.7834 72.8199 52.4015C72.4469 49.0197 71.3166 45.7634 69.5132 42.8758C79.1641 49.6748 153.087 179.328 162.266 194.184C197.963 251.978 224.394 309.315 225.967 323.206Z" fill="url(#paint2_linear_24_52)"/>
            <defs>
            <linearGradient id="paint0_linear_24_52" x1="114.171" y1="232.704" x2="233.787" y2="209.703" gradientUnits="userSpaceOnUse">
            <stop offset="0.231" stop-color="#999875"/>
            <stop offset="0.563" stop-color="#9B9977"/>
            <stop offset="0.683" stop-color="#A09F7E"/>
            <stop offset="0.768" stop-color="#A9A889"/>
            <stop offset="0.837" stop-color="#B7B69A"/>
            <stop offset="0.896" stop-color="#C9C7B0"/>
            <stop offset="0.948" stop-color="#DEDDCB"/>
            <stop offset="0.994" stop-color="#F8F6EB"/>
            <stop offset="1" stop-color="#FBF9EF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_24_52" x1="55.6906" y1="48.8956" x2="255.63" y2="295.44" gradientUnits="userSpaceOnUse">
            <stop stop-color="#48A547"/>
            <stop offset="1" stop-color="#3F9143"/>
            </linearGradient>
            <linearGradient id="paint2_linear_24_52" x1="84.3917" y1="241.8" x2="177.654" y2="136.579" gradientUnits="userSpaceOnUse">
            <stop stop-color="#41A247"/>
            <stop offset="0.352" stop-color="#4BA74B"/>
            <stop offset="0.956" stop-color="#67B554"/>
            <stop offset="1" stop-color="#69B655"/>
            </linearGradient>
            </defs>
            </svg>

          </div>
        </div>

      </MouseParallax>
    </div>
  );
};


export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div
            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div
            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
