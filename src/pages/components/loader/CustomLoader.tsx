import Image, { type ImageLoader } from "next/image"
import { StaticImageData } from "next/image"

type MyCustomLoaderType = (props: CustomLoader) => React.ReactNode

type CustomLoader = {
    src: StaticImageData,
    // width: number,
    // height: number
}

const MyImageLoader: ImageLoader = ({ src }) => {
    return src
}

const MyCustomLoader: MyCustomLoaderType = (props) => {
    return <Image

        loader={MyImageLoader}
        alt="Custom loader"
        {...props}
        sizes="100vw"
        unoptimized
        // width={150}
        // height={150}
        fill
        className=" rounded-[50%] "
    />
}

export default MyCustomLoader