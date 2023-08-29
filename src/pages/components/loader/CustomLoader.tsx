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
        quality={75}
        sizes="100vw"
        fill
        unoptimized
        className=" object-cover"
    />
}

export default MyCustomLoader