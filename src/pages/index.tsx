import { NextPage } from "next"
import Link from "next/link"
import { ReactElement, useState } from "react"


export default function Home(): ReactElement {

  let [burgerMenu, setBurgerMenu] = useState(false)

  const isOpen = () => {

    setBurgerMenu(!burgerMenu)
  }

  const NavBarItems = ({ hidden = false }: { hidden?: any }) => {
    return <>
      <div className="navbar-items-container">
        <ol className={`navbar-items ${hidden ? " hidden" : "navbar-items-mobile"}`}>
          <li className={""}>ABOUT</li>
          <li>ITEM 2</li>
          <li>ITEM 3</li>
          <li>ITEM 4</li>
        </ol>
      </div>
    </>
  }

  return (
    <main className="main-image">
      <div className="main-background">

        <div className="lines-left">

          <svg xmlns="http://www.w3.org/2000/svg" width="386" height="599" viewBox="0 0 386 599" fill="none">
            <path className="lines-left1" d="M294.043 -113L385.766 -35.6246L-149.277 598.628L-241 521.253L294.043 -113Z" fill="#D9D9D9" />
          </svg>

          <svg width="569" height="680" viewBox="0 0 569 680" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className="lines-left2" x="476.812" y="-82.6993" width="120" height="896.117" transform="rotate(40.1503 476.812 -82.6993)" fill="#D9D9D9" />
          </svg>

        </div>
        <div className="lines-right">
          <svg className="lines-right1" width="533" height="636" viewBox="0 0 533 636" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="535.043" width="120" height="829.788" transform="rotate(40.1503 535.043 0)" fill="#D9D9D9" />
          </svg>

          <svg className="lines-right2" width="393" height="555" viewBox="0 0 393 555" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="535.043" width="120" height="829.788" transform="rotate(40.1503 535.043 0)" fill="#D9D9D9" />
          </svg>
        </div>
        <nav className="main-nav navbar-items-color">
          <div className="home-text">HOME</div>
          {/* <NavBarItems /> */}
          {burgerMenu ? <NavBarItems hidden /> : <NavBarItems />}
          <div onClick={isOpen} className="navbar-burger">
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2H30" stroke="#89C0F2" strokeWidth="3" />
              <path d="M0 11H30" stroke="#89C0F2" strokeWidth="3" />
              <path d="M0 20H30" stroke="#89C0F2" strokeWidth="3" />
            </svg>
          </div>
        </nav>


        {/* main-body */}

        <div className="main-body">
          <div className="sidemenu">

            <ul className="sidemenu-selection">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <g filter="url(#filter0_d_179_51)">
                    <path d="M15.8494 12.6147C15.8494 11.0751 17.516 10.1129 18.8494 10.8827L40.3013 23.2679C41.6346 24.0377 41.6346 25.9622 40.3013 26.732L18.8494 39.1173C17.516 39.8871 15.8494 38.9249 15.8494 37.3853L15.8494 12.6147Z" fill="#EFF7FF" />
                  </g>
                  <defs>
                    <filter id="filter0_d_179_51" x="6.84937" y="3.61176" width="41.4519" height="44.7765" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="-1" dy="1" />
                      <feGaussianBlur stdDeviation="4" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.675 0 0 0 0 0.845238 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_179_51" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_179_51" result="shape" />
                    </filter>
                  </defs>
                </svg>
                <div className="sidemenu-selection-items">
                  <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                    <g clipPath="url(#clip0_24_2)">
                      <path d="M39.734 6.25H10.5673C8.27563 6.25 6.40063 8.125 6.40063 10.4167V39.5833C6.40063 41.875 8.27563 43.75 10.5673 43.75H39.734C42.0256 43.75 43.9006 41.875 43.9006 39.5833V10.4167C43.9006 8.125 42.0256 6.25 39.734 6.25ZM29.3173 35.4167H14.734V31.25H29.3173V35.4167ZM35.5673 27.0833H14.734V22.9167H35.5673V27.0833ZM35.5673 18.75H14.734V14.5833H35.5673V18.75Z" fill="#2E71AE" />
                    </g>
                    <defs>
                      <clipPath id="clip0_24_2">
                        <rect width="50" height="50" fill="white" transform="translate(0.150635)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="sidemenu-selection-text">
                    Hero
                  </span>
                </div>
              </li>
              <li>
                <div className="sidemenu-box">

                </div>
                <div className="sidemenu-selection-items">
                  <svg width="44" height="50" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.4412 3.12012C24.5044 3.12012 18.8824 8.71582 18.8824 15.6201C18.8824 16.5771 18.9903 17.5049 19.1963 18.3984L0 37.5V40.625L3.1397 43.75H9.41911L12.5588 40.625V37.5H15.6985V34.375H18.8382V31.25H25.1176L28.5909 27.793C29.5083 28.0029 30.46 28.1152 31.4412 28.1152C38.378 28.1152 44 22.5195 44 15.6152C44 8.71094 38.3731 3.12012 31.4412 3.12012ZM18.8382 25L3.1397 40.625V37.5L18.8382 21.875V25ZM34.5367 15.625C32.805 15.625 31.397 14.2236 31.397 12.5C31.397 10.7764 32.805 9.375 34.5367 9.375C36.2685 9.375 37.6764 10.7764 37.6764 12.5C37.6764 14.2236 36.2685 15.625 34.5367 15.625Z" fill="#2E71AE" />
                  </svg>
                  <span className="sidemenu-selection-text">
                    SignUp
                  </span>

                </div>

              </li>
              <li>
                <div className="sidemenu-box">

                </div>
                <div className="sidemenu-selection-items">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 51 50" fill="none">
                    <g clipPath="url(#clip0_25_75)">
                      <path d="M29.3172 4.16667H12.6506C10.3589 4.16667 8.48389 6.04167 8.48389 8.33333V41.6667C8.48389 43.9583 10.3589 45.8333 12.6506 45.8333H37.6506C39.9422 45.8333 41.8172 43.9583 41.8172 41.6667V16.6667L29.3172 4.16667ZM25.1506 20.8333C27.4422 20.8333 29.3172 22.7083 29.3172 25C29.3172 27.2917 27.4422 29.1667 25.1506 29.1667C22.8589 29.1667 20.9839 27.2917 20.9839 25C20.9839 22.7083 22.8589 20.8333 25.1506 20.8333ZM33.4839 37.5H16.8172V36.3125C16.8172 34.625 17.8172 33.125 19.3589 32.4583C21.1297 31.6875 23.0881 31.25 25.1506 31.25C27.2131 31.25 29.1714 31.6875 30.9422 32.4583C32.4839 33.125 33.4839 34.625 33.4839 36.3125V37.5Z" fill="#2E71AE" />
                    </g>
                    <defs>
                      <clipPath id="clip0_25_75">
                        <rect width="50" height="50" fill="white" transform="translate(0.150635)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="sidemenu-selection-text">
                    Contact
                  </span>

                </div>

              </li>
              <li>
                <div className="sidemenu-box">

                </div>
                <div className="sidemenu-selection-items">
                  <div className="w-50 h-50 flex justify-center items-center">
                    <span className="text-[#2E71AE] text-5xl font-bold">?</span>
                  </div>
                  <span className="sidemenu-selection-text">
                    FAQ
                  </span>

                </div>

              </li>
            </ul>
          </div>
          <div className="center-content">
            <div className=" center-content-text-container">
              <span className="center-content-title ">YOUR <span className="center-content-text-blue">FUTURE HOME</span> IS RIGHT HERE</span>
              <div className="center-content-container">
                <span className="center-content-text">
                  Lorem ipsum dolor sit amet consectetur. Dolor ac in orci praesent pretium risus quis. Diam blandit arcu et et sapien euismod pulvinar. Urna convallis accumsan imperdiet tincidunt sed ipsum vitae gravida egestas. Maecenas semper fermentum diam tincidunt eget consectetur id ut mus.


                </span>

                <div className="center-content-buttons">
                  <Link href={"https://google.com"}>
                    <div className="center-content-buttons-try">TRY NOW</div>
                  </Link>

                  <Link href={"https://tailwindcss.com"}>
                    <div className="center-content-buttons-learn">LEARN MORE</div>
                  </Link>

                </div>
              </div>
            </div>
            <div className="center-content-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="93" height="93" viewBox="0 0 93 93" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.0175781 39.678C3.00688 19.659 18.621 3.76504 38.4998 0.356201V9.52168C23.602 12.7139 11.9438 24.6388 9.14323 39.678H0.0175781ZM0.360617 55.678C4.05897 74.7492 19.2876 89.7055 38.4998 93V83.8345C24.2687 80.7852 12.9937 69.7673 9.57194 55.678H0.360617ZM83.4277 55.678C80.006 69.7673 68.7309 80.7852 54.4998 83.8345V93C73.7121 89.7055 88.9407 74.7492 92.6391 55.678H83.4277ZM92.9821 39.678C89.9928 19.659 74.3787 3.76504 54.4998 0.356201V9.52168C69.3976 12.7139 81.0559 24.6388 83.8564 39.678H92.9821Z" fill="#274C6D" />
                <path d="M44.3787 69.7994C45.5503 70.971 47.4497 70.971 48.6213 69.7994L67.7132 50.7075C68.8848 49.536 68.8848 47.6365 67.7132 46.4649C66.5416 45.2933 64.6421 45.2933 63.4706 46.4649L46.5 63.4355L29.5294 46.4649C28.3579 45.2933 26.4584 45.2933 25.2868 46.4649C24.1152 47.6365 24.1152 49.536 25.2868 50.7075L44.3787 69.7994ZM43.5 23.6781V67.6781H49.5V23.6781H43.5Z" fill="#86C6FF" />

              </svg>
            </div>
          </div>
          <div className="side-features">
            <div className="side-features-items">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                <g clipPath="url(#clip0_233_26)">
                  <path d="M12.875 22.2337L7.14122 16.5L5.18872 18.4387L12.875 26.125L29.375 9.625L27.4362 7.68625L12.875 22.2337Z" fill="#2E71AE" />
                </g>
                <defs>
                  <clipPath id="clip0_233_26">
                    <rect width="33" height="33" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span className="side-features-text">5 more TB</span>

            </div>
            <div className="side-features-items">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                <g clipPath="url(#clip0_233_26)">
                  <path d="M12.875 22.2337L7.14122 16.5L5.18872 18.4387L12.875 26.125L29.375 9.625L27.4362 7.68625L12.875 22.2337Z" fill="#2E71AE" />
                </g>
                <defs>
                  <clipPath id="clip0_233_26">
                    <rect width="33" height="33" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span className="side-features-text">Free consultation</span>
            </div>
            <div className="side-features-items">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                <g clipPath="url(#clip0_233_26)">
                  <path d="M12.875 22.2337L7.14122 16.5L5.18872 18.4387L12.875 26.125L29.375 9.625L27.4362 7.68625L12.875 22.2337Z" fill="#2E71AE" />
                </g>
                <defs>
                  <clipPath id="clip0_233_26">
                    <rect width="33" height="33" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span className="side-features-text">No extra fees</span>
            </div>
          </div>
        </div>

        {/* End main-body */}
      </div>
    </main>
  )
}
