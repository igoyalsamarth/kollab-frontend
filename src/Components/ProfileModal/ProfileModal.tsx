export default function ProfileModal(props: any) {
    return (
        <div className="flex fixed top-0 w-full h-full bg-black/60 z-[100] left-0 items-center justify-center">
            <div className="flex flex-col gap-[20px] w-[657px]">
                <div className="flex justify-end">
                    <button onClick={()=>props.setProfileModal(false)} className="rounded-full w-12 aspect-square bg-white font-semibold rotate-45 text-[43px] leading-none text-black/60 font-moderno">+</button>
                </div>
                <div className="flex flex-col py-[30px] h-[700px] px-[10px] overflow-y-auto gap-[30px] bg-white rounded-[20px] border-[10px] border-white shadow-[inset_0px_0px_18px_0px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between gap-[50px] px-[20px]">
                        <div className="flex flex-col gap-[10px] w-full">
                            <div className="flex flex-col">
                            <p className=" text-[28px] leading-normal">Bhuvan Bham</p>
                            <p className=" text-sm underline decoration-dashed underline-offset-[6px] decoration-[#2E3854]">@bbkivines</p>
                            </div>
                            <div className="flex gap-[5px]">
                                <p className="px-[10px] pt-[3px] pb-[2px] rounded-full border border-[#D0D9F1] text-[11px] uppercase tracking-wider text-[#77777F]">COMEDY</p>
                                <p className="px-[10px] pt-[3px] pb-[2px] rounded-full border border-[#D0D9F1] text-[11px] uppercase tracking-wider text-[#77777F]">FITTNESS</p>
                            </div>
                            <div className="text-[#767676] text-xs">
                                description
                            </div>
                        </div>
                        <div className="flex w-[179px] aspect-square border-[10px] border-white rounded-full shadow-[0px_6.885px_58.519px_0px_#D6DFF2]">

                        </div>
                    </div>
                    <div className="flex gap-[50px] px-[20px]">
                        <div className="flex flex-col">
                            <p className="text-[28px] leading-none font-semibold uppercase">500</p>
                            <p className="text-[#767676] text-sm">posts</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[28px] leading-none font-semibold uppercase">1M</p>
                            <p className="text-[#767676] text-sm">followers</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[28px] leading-none font-semibold uppercase">69%</p>
                            <p className="text-[#767676] text-sm">engagement</p>
                        </div>
                        <div className=" flex flex-col">
                            <p className="text-[28px] leading-none font-semibold uppercase">30</p>
                            <p className="text-[#767676] text-sm">collaborations</p>
                        </div>
                    </div>
                    <div className="flex flex-col border-t border-[#D0D9F1] px-[20px] gap-[15px]">
                        <div className="flex gap-[30px] -mt-[5px]">
                            <div className="flex flex-col gap-2">
                                <div className="flex h-[10px] rounded-full w-full bg-[#2E3854]"></div>
                                <div className="flex flex-col rounded-[10px] bg-gradient-to-b from-[#E3EAFF] to-[rgba(241,244,255,0)] gap-[10px] pb-[5px] pt-[10px] px-[10px]">
                                    <p>icon</p>
                                    <p className=" text-2xl leading-none">30 Reels</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex h-[10px] rounded-full w-full bg-[#2E3854]"></div>
                                <div className="flex flex-col gap-[10px] pb-[5px] pt-[10px] px-[10px]">
                                    <p>icon</p>
                                    <p className=" text-2xl leading-none text-[#868689]">60 Static Posts</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[30px]">
                            <div className="flex flex-col">
                                <p className="text-[20px] leading-none font-semibold">5M</p>
                                <p className="text-[#767676] text-sm">avg. reel views</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[20px] leading-none font-semibold">1M</p>
                                <p className="text-[#767676] text-sm">avg. reel likes</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[20px] leading-none font-semibold">69K</p>
                                <p className="text-[#767676] text-sm">avg. reel comments</p>
                            </div>
                        </div>
                        <div className="flex gap-[15px]">
                            <button className=" font-moderno px-5 py-[10px] rounded-full border border-[#D0D9F1] bg-[#FFFDFD] shadow-[0px_4px_6px_0px_rgba(208,217,241,0.7)]">
                                    Top 5
                            </button>
                            <button className=" font-moderno px-5 py-[10px] rounded-full border border-[#D0D9F1] bg-[#FFFDFD] shadow-[0px_4px_6px_0px_rgba(208,217,241,0.7)]">
                                    {'Views > 10K'}
                            </button>
                            <button className=" font-moderno px-5 py-[10px] rounded-full border border-[#D0D9F1] bg-[#FFFDFD] shadow-[0px_4px_6px_0px_rgba(208,217,241,0.7)]">
                                    Collaborations
                            </button>
                            <button className=" font-moderno px-5 py-[10px] rounded-full border border-[#D0D9F1] bg-[#FFFDFD] shadow-[0px_4px_6px_0px_rgba(208,217,241,0.7)]">
                                    {'Likes > 10K'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}