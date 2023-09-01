import Link from "next/link"

export default function ContactUs() {
    return <section className="flex justify-center items-center relative h-screen max-md:h-fit z-[1]">
        <div className="w-[1334px] justify-between flex items-center max-md:flex-col">
            <div className="w-[370px] h-[405px] flex flex-col p-[10px] justify-between items-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
                    <g clipPath="url(#clip0_560_40)">
                        <path d="M52.1665 3.33325H25.4998C20.8998 3.33325 17.1665 7.06659 17.1665 11.6666V68.3333C17.1665 72.9333 20.8998 76.6666 25.4998 76.6666H52.1665C56.7665 76.6666 60.4998 72.9333 60.4998 68.3333V11.6666C60.4998 7.06659 56.7665 3.33325 52.1665 3.33325ZM38.8332 73.3333C36.0665 73.3333 33.8332 71.0999 33.8332 68.3333C33.8332 65.5666 36.0665 63.3333 38.8332 63.3333C41.5998 63.3333 43.8332 65.5666 43.8332 68.3333C43.8332 71.0999 41.5998 73.3333 38.8332 73.3333ZM53.8332 59.9999H23.8332V13.3333H53.8332V59.9999Z" fill="#FF9900" />
                    </g>
                    <defs>
                        <clipPath id="clip0_560_40">
                            <rect width="80" height="80" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <span className="text-[32px] font-semibold font-[Inter] uppercase">BY PHONE</span>
                <span className="text-[20px] font-light font-[Inter] text-center">(Monday to Friday from 5AM to 9PM EST)</span>
                <span className="text-[24px] font-[Inter] text-center">NA toll fee: 1 800 XXX XXXX <br />
                    International : 1 800 YYY YYYY</span>
            </div>
            <div className="w-[370px] h-[405px] flex flex-col p-[10px] justify-between items-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
                    <g clipPath="url(#clip0_560_27)">
                        <path d="M33.8332 13.3333H13.8332C10.1665 13.3333 7.19984 16.3333 7.19984 19.9999L7.1665 59.9999C7.1665 63.6666 10.1665 66.6666 13.8332 66.6666H67.1665C70.8332 66.6666 73.8332 63.6666 73.8332 59.9999V26.6666C73.8332 22.9999 70.8332 19.9999 67.1665 19.9999H40.4998L33.8332 13.3333Z" fill="#FF9900" />
                    </g>
                    <defs>
                        <clipPath id="clip0_560_27">
                            <rect width="80" height="80" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <span className="text-[32px] font-semibold font-[Inter] uppercase">SUBMIT A CASE</span>
                <span className="text-[20px] font-light font-[Inter] text-center">Send us a question regarding any inconvenience you may encounter and one of our agents will be with you as soon as possible!</span>
                <Link href={"#"} className="text-[24px] font-[Inter] text-center uppercase bg-[#26639A] p-[10px] rounded-[10px]">Start a case</Link>
            </div>
            <div className="w-[370px] h-[405px] flex flex-col p-[10px] justify-between items-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <g clipPath="url(#clip0_560_56)">
                        <path d="M66.6665 6.66675H13.3332C9.6665 6.66675 6.69984 9.66675 6.69984 13.3334L6.6665 73.3334L19.9998 60.0001H66.6665C70.3332 60.0001 73.3332 57.0001 73.3332 53.3334V13.3334C73.3332 9.66675 70.3332 6.66675 66.6665 6.66675ZM19.9998 30.0001H59.9998V36.6667H19.9998V30.0001ZM46.6665 46.6667H19.9998V40.0001H46.6665V46.6667ZM59.9998 26.6667H19.9998V20.0001H59.9998V26.6667Z" fill="#FF9900" />
                    </g>
                    <defs>
                        <clipPath id="clip0_560_56">
                            <rect width="80" height="80" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className="text-[32px] font-semibold font-[Inter] uppercase">Start a chat</span>
                <span className="text-[20px] font-light font-[Inter] text-center">Chat with a member of our team!</span>
                <Link href={"#"} className="text-[24px] font-[Inter] text-center uppercase bg-[#26639A] p-[10px] rounded-[10px]">Start a chat</Link>
            </div>
        </div>
    </section>
}