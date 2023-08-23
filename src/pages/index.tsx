import { NextPage } from "next"
import Link from "next/link"
import { ReactElement, useState } from "react"
import { Listbox, ListboxItem } from "@nextui-org/listbox"
import MyListBoxItemComponent from "./components/MyListBoxItemComponent"
import Test from "./components/Test"

export const Home: NextPage = function () {

  let [burgerMenu, setBurgerMenu] = useState(true)
  let mySVGs2 = {
    Hero: <div key={"Hero"} className="sidemenu-section-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
        <g clip-path="url(#clip0_271_27)">
          <path d="M39.5833 6.5H10.4167C8.125 6.5 6.25 8.375 6.25 10.6667V39.8333C6.25 42.125 8.125 44 10.4167 44H39.5833C41.875 44 43.75 42.125 43.75 39.8333V10.6667C43.75 8.375 41.875 6.5 39.5833 6.5ZM29.1667 35.6667H14.5833V31.5H29.1667V35.6667ZM35.4167 27.3333H14.5833V23.1667H35.4167V27.3333ZM35.4167 19H14.5833V14.8333H35.4167V19Z" fill="#2E71AE" />
        </g>
        <defs>
          <clipPath id="clip0_271_27">
            <rect width="50" height="50" fill="white" transform="translate(0 0.25)" />
          </clipPath>
        </defs>
      </svg>
    </div>,
    SignUp: <div key={"SignUp"} className="sidemenu-section-icon">
      <svg width="44" height="50" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.4412 3.12012C24.5044 3.12012 18.8824 8.71582 18.8824 15.6201C18.8824 16.5771 18.9903 17.5049 19.1963 18.3984L0 37.5V40.625L3.1397 43.75H9.41911L12.5588 40.625V37.5H15.6985V34.375H18.8382V31.25H25.1176L28.5909 27.793C29.5083 28.0029 30.46 28.1152 31.4412 28.1152C38.378 28.1152 44 22.5195 44 15.6152C44 8.71094 38.3731 3.12012 31.4412 3.12012ZM18.8382 25L3.1397 40.625V37.5L18.8382 21.875V25ZM34.5367 15.625C32.805 15.625 31.397 14.2236 31.397 12.5C31.397 10.7764 32.805 9.375 34.5367 9.375C36.2685 9.375 37.6764 10.7764 37.6764 12.5C37.6764 14.2236 36.2685 15.625 34.5367 15.625Z" fill="#2E71AE" />
      </svg>
    </div>,
    Contact: <div key={"Contact"} className="sidemenu-section-icon">
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
    </div>,
    FAQ: <div key={"FAQ"} className="sidemenu-section-icon">
      <svg width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.54546 26.0661V25.4744C7.55706 23.4444 7.73686 21.8261 8.08487 20.6197C8.44448 19.4132 8.9665 18.4388 9.65092 17.6964C10.3353 16.954 11.159 16.2811 12.1218 15.6779C12.841 15.2139 13.4848 14.7325 14.0533 14.2337C14.6217 13.7348 15.0741 13.1838 15.4105 12.5806C15.7469 11.9658 15.9151 11.2814 15.9151 10.5273C15.9151 9.72692 15.7237 9.02509 15.3409 8.42188C14.9581 7.81865 14.4419 7.35464 13.7923 7.02983C13.1542 6.70502 12.4466 6.54261 11.6694 6.54261C10.9154 6.54261 10.2019 6.71082 9.52912 7.04723C8.8563 7.37204 8.30528 7.85926 7.87607 8.50888C7.44685 9.1469 7.21484 9.94152 7.18004 10.8928H0.0806108C0.138613 8.57268 0.695431 6.65862 1.75107 5.15057C2.8067 3.63092 4.20455 2.49988 5.9446 1.75746C7.68466 1.00343 9.60452 0.626419 11.7042 0.626419C14.0127 0.626419 16.0543 1.00923 17.8292 1.77486C19.604 2.52888 20.9961 3.62512 22.0053 5.06357C23.0146 6.50201 23.5192 8.23627 23.5192 10.2663C23.5192 11.6236 23.293 12.83 22.8406 13.8857C22.3997 14.9297 21.7791 15.8577 20.9787 16.6697C20.1783 17.4702 19.2328 18.1952 18.1424 18.8448C17.226 19.39 16.4719 19.9585 15.8803 20.5501C15.3003 21.1417 14.8653 21.8261 14.5753 22.6033C14.2969 23.3806 14.1519 24.3376 14.1403 25.4744V26.0661H7.54546ZM10.9908 37.2024C9.83073 37.2024 8.8389 36.7964 8.01527 35.9844C7.20324 35.1607 6.80303 34.1747 6.81463 33.0263C6.80303 31.8894 7.20324 30.915 8.01527 30.103C8.8389 29.291 9.83073 28.8849 10.9908 28.8849C12.0928 28.8849 13.0614 29.291 13.8967 30.103C14.7319 30.915 15.1553 31.8894 15.1669 33.0263C15.1553 33.7919 14.9523 34.4937 14.5579 35.1317C14.1751 35.7582 13.6705 36.2628 13.044 36.6456C12.4176 37.0168 11.7332 37.2024 10.9908 37.2024Z" fill="#2E71AE" />
      </svg>
    </div>
  }
  const isOpen = () => {
    setBurgerMenu(!burgerMenu)
  }


  const NavBarItems = ({ hidden = false }: { hidden?: any }) => {
    return <>
      <div className="navbar-items-container">
        <ol className={`navbar-items ${hidden ? " hidden" : "navbar-items-mobile"}`}>
          <li >ABOUT</li>
          <li >ITEM 2</li>
          <li >ITEM 3</li>
          <li >ITEM 4</li>
        </ol>
      </div>
    </>
  }

  return (
    <main className="main-image">

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
      <div className="main-background" onClick={() => setBurgerMenu(() => true)}>

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
        {/* main-body */}
        <div className="sidemenu">
          {/* <button className="bg-[#534] p-[5px] rounded-[5px] [&:active]:bg-[#f00]">POTATO</button> */}
          {/* <ul className="sidemenu-selection">
            <li>
              <svg className={"sidemenu-selection-arrow"} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
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
          </ul> */}
          <div className="sidemenu-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="65" viewBox="0 0 50 65" fill="none">
              <g filter="url(#filter0_d_271_24)">
                <path d="M15.8494 16.0624C15.8494 14.29 17.5181 13.0472 18.7079 13.9334L40.9256 30.4807C42.0127 31.2904 41.8818 33.3073 40.6841 34.1992L18.4665 50.7465C17.2689 51.6385 15.8494 50.7764 15.8494 49.157L15.8494 16.0624Z" fill="#EFF7FF" />
              </g>
              <defs>
                <filter id="filter0_d_271_24" x="6.84937" y="6.64029" width="41.8179" height="53.4649" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="-1" dy="1" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.675 0 0 0 0 0.845238 0 0 0 0 1 0 0 0 1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_271_24" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_271_24" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          {/* <Listbox className="sidemenu-container"> */}

          <MyListBoxItemComponent />


        </div>
        <div className="main-body">
          <div className=" max-md:hidden grow-[1] md:basis-[30%]">

          </div>
          <div className="center-content grow-[2] md:basis-[40%]">
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
          <div className="side-features grow-[1] md:basis-[30%]">
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

export default Home