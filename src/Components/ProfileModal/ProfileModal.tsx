import axios from 'axios'
import { useEffect, useState } from 'react';
import { serverEndpoint } from '../../util/endpoint';
import { convertToKorM, getBase64Image } from '../../util/generalFunctions';
import ReelsDetailsInProfileModal from './ReelsDetailsInProfleModal.tsx/ReelsDetailsInProfileModal';
import StaticPostsDetailsInProfileModal from './StaticPostsDetailsInProfileModal/StaticPostsDetailsInProfileModal';

export default function ProfileModal(props: any) {
    const [basicDetails, setBasicDetails] = useState<any | undefined>(undefined)
    const [reelsPosts, setReelsPosts] = useState<boolean>(true)

    useEffect(() => {
        const getBasicDetails = async () => {
            try {
                const res = await axios.get(`${serverEndpoint}/query/get_user/${props.instaAccount}`)
                setBasicDetails(res.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        getBasicDetails()
    }, [props.instaAccount]);


    return (
        <div className="flex fixed top-0 w-full h-full bg-black/60 z-[100] left-0 items-center justify-center">
            <div className="flex flex-col gap-[20px] w-[687px]">
                <div className="flex justify-end">
                    <button onClick={() => props.setProfileModal(false)} className="rounded-full w-12 aspect-square bg-white font-semibold rotate-45 text-[43px] leading-none text-black/60 font-moderno">+</button>
                </div>
                <div className="flex flex-col py-[30px] h-[80vh] px-[10px] overflow-y-auto gap-[30px] bg-white rounded-[20px] border-[10px] border-white shadow-[inset_0px_0px_18px_0px_rgba(0,0,0,0.25)]">
                    <div className="flex justify-between gap-[50px] px-[20px]">
                        <div className="flex flex-col gap-[10px] w-full">
                            <div className="flex flex-col">
                                <p className=" text-[28px] leading-normal">{basicDetails?.user.accountName}</p>
                                <p className=" text-sm underline decoration-dashed underline-offset-[6px] decoration-[#2E3854]">@{basicDetails?.user.instaAccount}</p>
                            </div>
                            <div className="flex gap-[5px]">
                                <p className="px-[10px] pt-[3px] pb-[2px] rounded-full border border-[#D0D9F1] text-[11px] uppercase tracking-wider text-[#77777F]">{basicDetails?.user.category ?? 'Influencer'}</p>
                            </div>
                            <div className="text-[#767676] text-xs">
                                {basicDetails?.user.description}
                            </div>
                        </div>
                        {basicDetails && <div className="flex h-[179px] aspect-square border-[5px] border-white rounded-full shadow-[0px_6.885px_58.519px_0px_#D6DFF2] bg-cover" style={{ backgroundImage: `url(${getBase64Image(basicDetails.user.imgSource)})` }}>
                        </div>}
                    </div>
                    <div className="flex gap-[50px] px-[20px]">
                        <div className="flex flex-col">
                            <p className="text-[28px] leading-none font-semibold uppercase">{basicDetails?.user.posts}</p>
                            <p className="text-[#767676] text-sm">posts</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[28px] leading-none font-semibold uppercase">{convertToKorM(basicDetails?.user.followers)}</p>
                            <p className="text-[#767676] text-sm">followers</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[28px] leading-none font-semibold uppercase">69%</p>
                            <p className="text-[#767676] text-sm">engagement</p>
                        </div>
                        <div className=" flex flex-col">
                            <p className="text-[28px] leading-none font-semibold uppercase">{basicDetails?.brandCollaborations}</p>
                            <p className="text-[#767676] text-sm">collaborations</p>
                        </div>
                    </div>
                    <div className="flex flex-col border-t border-[#D0D9F1] px-[20px] gap-[20px]">
                        <div className="flex gap-[30px] -mt-[5px]">
                            <button onClick={() => setReelsPosts(true)} className="flex flex-col gap-2">
                                <div className={`flex h-[10px] rounded-full w-full ${reelsPosts ? 'bg-[#2E3854]' : ''}`}></div>
                                <div className={`flex flex-col rounded-[10px] gap-[10px] pb-[5px] pt-[10px] px-[10px] ${reelsPosts ? 'bg-gradient-to-b from-[#E3EAFF] to-[rgba(241,244,255,0)]' : 'bg-white'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                        <rect y="3" width="27.8438" height="27" rx="8.4375" fill="#2E3854" />
                                        <path d="M12.3449 14.018C12.2914 13.9863 12.2304 13.9693 12.1682 13.9688C12.1059 13.9682 12.0447 13.9842 11.9906 14.015C11.9365 14.0458 11.8915 14.0903 11.8603 14.1441C11.829 14.1979 11.8125 14.259 11.8125 14.3213V22.4857C11.8125 22.5479 11.829 22.609 11.8603 22.6628C11.8915 22.7166 11.9365 22.7612 11.9906 22.792C12.0447 22.8228 12.1059 22.8387 12.1682 22.8382C12.2304 22.8377 12.2914 22.8206 12.3449 22.7889L19.2336 18.7067C19.2862 18.6755 19.3298 18.6311 19.3601 18.5779C19.3903 18.5248 19.4063 18.4647 19.4063 18.4035C19.4063 18.3423 19.3903 18.2822 19.3601 18.229C19.3298 18.1759 19.2862 18.1315 19.2336 18.1003L12.3449 14.018Z" fill="white" />
                                        <rect y="8.90625" width="28.6875" height="1.6875" fill="white" />
                                        <rect x="5.04993" y="1.797" width="10.2257" height="1.6875" transform="rotate(45 5.04993 1.797)" fill="white" />
                                        <rect x="14.0929" y="0.712646" width="11.7563" height="1.6875" transform="rotate(45 14.0929 0.712646)" fill="white" />
                                    </svg>
                                    <p className={`text-2xl leading-none ${reelsPosts ? 'text-black' : 'text-[#868689]'}`}>Latest Reels</p>
                                </div>
                            </button>
                            <button onClick={() => setReelsPosts(false)} className="flex flex-col gap-2">
                                <div className={`flex h-[10px] rounded-full w-full ${!reelsPosts ? 'bg-[#2E3854]' : ''}`}></div>
                                <div className={`flex flex-col rounded-[10px] gap-[10px] pb-[5px] pt-[10px] px-[10px] ${!reelsPosts ? 'bg-gradient-to-b from-[#E3EAFF] to-[rgba(241,244,255,0)]' : 'bg-white'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                        <rect x="0.84375" y="0.84375" width="26.1562" height="25.3125" rx="6.75" fill="white" stroke="#868689" stroke-width="1.6875" />
                                        <path d="M6.76234 8.71267C7.77031 8.71267 8.58743 7.89555 8.58743 6.88758C8.58743 5.87962 7.77031 5.0625 6.76234 5.0625C5.75437 5.0625 4.93726 5.87962 4.93726 6.88758C4.93726 7.89555 5.75437 8.71267 6.76234 8.71267Z" stroke="#868689" stroke-width="1.82508" stroke-miterlimit="10" />
                                        <path d="M19.5379 20.1216L14.3672 14.9606C14.0382 14.6316 13.596 14.4407 13.1309 14.4269C12.6659 14.4132 12.2131 14.5775 11.8652 14.8864L2.95312 22.3594M14.9752 25.6088L22.0098 18.5742C22.3315 18.2519 22.7621 18.0614 23.217 18.0403C23.672 18.0192 25.8061 19.1151 26.1562 19.4062" stroke="#868689" stroke-width="1.82508" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className={`text-2xl leading-none ${!reelsPosts ? 'text-black' : 'text-[#868689]'}`}>Latest Static Posts</p>
                                </div>
                            </button>
                        </div>
                        {reelsPosts ? <ReelsDetailsInProfileModal instaAccount={props.instaAccount} /> : <StaticPostsDetailsInProfileModal instaAccount={props.instaAccount} />}
                    </div>
                </div>
            </div>
        </div>
    );
}