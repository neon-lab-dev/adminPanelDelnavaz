import { ICONS, IMAGES } from "../../assets";


const ViewRecording = () => {
    return (
        <div>
            <img src={IMAGES.banner} alt="banner-img" className="mt-4" />

            <h1 className="text-[#251605] text-xl font-medium leading-6 mt-5">Podcast name</h1>
            <p className="text-[#989898] mt-1">23 Aug 2024</p>
            
            {/* Recording player */}
            <div className="mt-5">
                <div className="bg-[#251605] h-[6px] w-full rounded-3xl"></div>
                <div className="flex items-center justify-between mt-1">
                <p className="text-[#463730] leading-[18px]">0:00</p>
                <p className="text-[#463730] leading-[18px]">15:33</p>
                </div>
            </div>

           <div className="flex items-center justify-between mt-4 w-full">
            <div></div>
           <div className="flex items-center gap-4">
                <img src={ICONS.rewindBack} alt="rewind-back" className="size-5 cursor-pointer" />
                <img src={ICONS.play} alt="play" className="size-12 cursor-pointer" />
                <img src={ICONS.rewindBack} alt="rewind-forward" className="size-5 cursor-pointer" />
            </div>
            <img src={ICONS.pen} alt="pen" className="size-6 cursor-pointer" />
           </div>
        </div>
    );
};

export default ViewRecording;