import Image from "next/image"
import food1 from "/public/food1.jpg"
import food2 from "/public/food2.jpg"
import food3 from "/public/food3.jpg"
import { NextPage } from "next"
import CustomLoader from "./loader/CustomLoader"

const Features: NextPage = () => {

    return <section className="max-md:hidden relative bg-[var(--features-background-color)] shadow-[shadow:var(--features-box-shadow)] z-[1]">
        <ul className="features-list">
            <li>
                <div className=" relative h-full shrink-0 w-[150px]">
                    <CustomLoader
                        src={food1}
                    />
                </div>
                <div className="w-full  h-full flex items-center justify-center">
                    <span>
                        FOOD
                    </span>
                </div>
            </li>
            <li>
                <div className=" relative  h-full shrink-0 w-[150px]">
                    <CustomLoader
                        src={food2}
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center" >
                    <span>
                        SOME LIGHT??? IDK
                    </span>
                </div>
            </li>
            <li>
                <div className=" relative shrink-0 w-[150px] h-full ">
                    <CustomLoader
                        src={food3}
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <span >
                        MORE FOOD!!!
                    </span>
                </div>
            </li>
        </ul>
    </section>



}


export default Features