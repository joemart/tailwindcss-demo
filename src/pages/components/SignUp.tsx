import React from "react"
import Link from "next/link"

export default function SignUp() {
    return <section className="h-full relative flex justify-center items-center ">

        <div className="absolute rounded-[50%] blur-[92px] w-[1000px] h-[1000px] bg-[image:var(--sign-up-radial-gradient)]"></div>
        <div className="w-[595px]  h-[740px] bg-white rounded-[10px] shadow-[shadow:var(--sign-up-box-shadow)] flex justify-center items-center z-[1]">
            <form className="w-[415px] h-[650px] flex flex-col justify-center gap-[40px] text-[#000]" action="" method="get" >
                <div className="flex justify-center items-center self-stretch text-[31px] font-semibold py-[6px] border-b-[1px] border-solid border-[#000]/50">Sign Up</div>
                <fieldset className="flex flex-col gap-[40px] text-[#000]/50 text-[20px] font-semibold">
                    <label className="flex flex-col gap-[10px] h-[110px] justify-between">E-mail
                        <input placeholder="Type your e-mail" className=" inline-flex items-center rounded-[20px] py-[4px] px-[20px] border-[1px] border-solid border-[#000]  mx-[2px] opacity-50" type="text" name="email" />
                    </label>
                    <div className="flex flex-col gap-[10px]">
                        <label className="flex flex-col gap-[10px] h-[110px] justify-between">Password
                            <input placeholder="Type your password" className=" inline-flex items-center rounded-[20px] py-[4px] px-[20px] border-[1px] border-solid border-[#000]  mx-[2px] opacity-50" type="text" name="email" />
                        </label>
                        <div className="flex flex-col justify-center self-stretch opacity-50 text-right items-end">
                            <Link className="w-fit text-[14px]" href={"#"}>Forgot your password?</Link>
                        </div>
                    </div>

                    <button className="flex flex-col w-full bg-[image:var(--sign-up-linear-gradient)] py-[10px] justify-center items-center gap-[10px] rounded-[20px]" type="submit" id="submit">Sign Up</button>
                </fieldset>
                <div className="flex flex-col h-[82px] w-fit justify-between items-center self-center text-[#000]/50">
                    <div>or Sign Up using</div>
                    <div className="flex w-[200px] justify-between items-center">
                        <Link href={'#'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 48 49" fill="none">
                                <g clipPath="url(#clip0_264_107)">
                                    <path d="M44 24.5C44 13.46 35.04 4.5 24 4.5C12.96 4.5 4 13.46 4 24.5C4 34.18 10.88 42.24 20 44.1V30.5H16V24.5H20V19.5C20 15.64 23.14 12.5 27 12.5H32V18.5H28C26.9 18.5 26 19.4 26 20.5V24.5H32V30.5H26V44.4C36.1 43.4 44 34.88 44 24.5Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_264_107">
                                        <rect width="48" height="48" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link href={'#'}>
                            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect x="0.5" y="0.5" width="48" height="48" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_264_117" transform="scale(0.0208333)" />
                                    </pattern>
                                    <image id="image0_264_117" width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACR0lEQVR4nO3YTYiNURzH8Y+XTHkJkZdkIXlZKKNoyltNGTasFSuJjaZshJQFFkqKomSwxcKKUpOFl80skCYxJjUsGS9hRuNl5uqpo26TuXPvfc5zn9LzrX+dbvec8/ud8z/nOedQUFBQUFDQOLbiCl5hIERS7kBbhXoTsB0n5cRyPERpnHiAZWX1ZmMfuvELLbV0ehgLI4jfjE9ViC+FSP57Ap0YKvv9YK0dJ66fYlYK8StqFF8aI07V0/mXUPkJ5tZpoJq0KVWIZAbasRJHcKDajidhpKyhntBILbRFGPn3+BrKjzClFgO/RzWWzMjuGgx0RDBQCvEY82ocQM/HaOxuyO3x6Ikk/jamqYOjFRodxg1sCHv0v/gWQfzPkA11MQN9VXTyFhexB81YhKmRRn9YStbgY8RcrmcXEsNEf04GPqQRvq2sPB/XczDQncbAa3SFz3ryATmNNw02cCuNgXM55n4pxLE0Bhbjc84GNkrJDvzISXw/Jot0CXmXg4FLIpKcQy6MOp9nHc2xxE8sK88JO1JXxuI7ReRe2D6T4+x9vAjXu6zED2NtTAMt4VDVqNS5KgN2NchEH2bKiHXhjpyV+CGslzHJ2X8LLocLz/dI4kfCLDeUxMx+DEYQ395o8a1hR0o78oPYmZXIpvAytgSrwhSfCUfcGGnTi9VZCE9y/FmGizXZzc5jugxJLtJ7I74s/BV+DUs1eKG24maKxZrM5qFw2c+VJmzC8fA21Fv27jkQTqwvcQdnw5pZkLfogoKCgoL/mz/VO/jhDCgFxAAAAABJRU5ErkJggg==" />
                                </defs>
                            </svg>
                        </Link>
                        <Link href={'#'}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="49px" width="49px" version="1.1" id="Capa_1" viewBox="0 0 210 210" xmlSpace="preserve">
                                <path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40  c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105  S0,162.897,0,105z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </section>

}