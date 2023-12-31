import Link from "next/link"

const Hero = () => {
    return <section className="main-body">

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
    </section>
}

export default Hero