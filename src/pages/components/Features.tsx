import Image from "next/image"
import food1 from "/public/food1.jpg"
import food2 from "/public/food2.jpg"
import food3 from "/public/food3.jpg"
import { NextPage } from "next"
import CustomLoader from "./loader/CustomLoader"

const Features: NextPage = () => {


    return <div className="max-md:hidden relative bg-[var(--features-background-color)] shadow-[shadow:var(--features-box-shadow)] z-[1]">
        <ul className="features-list">
            <li>
                <div className=" relative w-full h-full min-w-[100px] max-w-[200px]">
                    <CustomLoader
                        src={food1}
                    />
                    {/* <img alt="food1" src="/food1.jpg" /> */}
                </div>

                <div>FOOD</div>
            </li>
            <li>
                <div>Image</div>
                <div>SOME LIGHT??? IDK</div>
            </li>
            <li>
                <div>Image</div>
                <div>MORE FOOD!!!</div>
            </li>
        </ul>
    </div>



}


export default Features