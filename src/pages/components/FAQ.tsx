export default function FAQ() {

    return <section id="FAQ" className="h-screen flex flex-col gap-[10%] justify-center items-center relative z-[1] max-md:h-fit">
        <h1 className=" text-[48px] max-md:w-[40%] w-[20%] text-center border-b-solid border-b-[1px] border-white font-bold">FAQ</h1>
        <ul className=" w-[50%] text-[32px] max-md:text-[18px] max-md:w-[70%]">
            <li className=" border-b border-white border-solid p-[10px] gap-[10px]"><span>Where should I build my house?</span></li>
            <li className=" border-b border-white border-solid p-[10px] gap-[10px]"><span>Who should build my house?</span></li>
            <li className=" border-b border-white border-solid p-[10px] gap-[10px]"><span>Can I have dogs in my house?</span></li>
            <li className=" border-b border-white border-solid p-[10px] gap-[10px]"><span>Have there been any alien sightings near my house?</span></li>
            <li className=" border-b border-white border-solid p-[10px] gap-[10px]"><span>Who is the closest superhero near my house?</span></li>
            <li className=" border-b border-white border-solid p-[10px] gap-[10px]"><span>What are the environmental damages that I should expect?</span></li>
        </ul>
    </section>
}