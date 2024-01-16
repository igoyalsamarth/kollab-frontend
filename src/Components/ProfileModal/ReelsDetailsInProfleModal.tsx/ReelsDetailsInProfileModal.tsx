import axios from 'axios'
import { useEffect, useState } from 'react'
import { serverEndpoint } from '../../../util/endpoint';
import { convertToKorM, getBase64Image } from '../../../util/generalFunctions';

export default function ReelsDetailsInProfileModal(props: any) {

    const [reelDetails, setReelDetails] = useState<any | undefined>(undefined)

    useEffect(() => {
        const getReelsDetails = async () => {
            try {
                const res = await axios.get(`${serverEndpoint}/query/get_user_reels_posts/${props.instaAccount}`)
                setReelDetails(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getReelsDetails()
    }, [props.instaAccount]);

    console.log(reelDetails)

    return (
        <>
            <div className="flex gap-[30px]">
                <div className="flex flex-col">
                    <p className="text-[20px] leading-none font-semibold">{convertToKorM(reelDetails?.averages.views)}</p>
                    <p className="text-[#767676] text-sm">avg. reel views</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[20px] leading-none font-semibold">{convertToKorM(reelDetails?.averages.likes)}</p>
                    <p className="text-[#767676] text-sm">avg. reel likes</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[20px] leading-none font-semibold">{convertToKorM(reelDetails?.averages.comments)}</p>
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
            <div className="flex flex-wrap gap-[10px]">
                {reelDetails?.data.map((Item: any) => <div className="flex w-[140px] h-[237px] bg-gray-500 rounded-[10px] shadow-[0px_4px_14px_0px_#E5ECFF] items-end bg-cover" style={{ backgroundImage: `url(${getBase64Image(Item.imgSource)})` }}>
                    <div className="flex flex-col gap-[1px] bg-gradient-to-t from-black w-full p-[10px]">
                        <div className="flex gap-[2px] items-center leading-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2375 8.53726C17.5576 9.47914 18.5727 10.7872 19.1574 12.2997C19.1969 12.4089 19.1969 12.5286 19.1574 12.6378C18.5727 14.1503 17.5576 15.4584 16.2375 16.4002C14.9175 17.3421 13.3504 17.8766 11.7299 17.9375C10.1094 17.8766 8.54229 17.3421 7.22224 16.4002C5.90219 15.4584 4.88706 14.1503 4.30232 12.6378C4.26283 12.5286 4.26283 12.4089 4.30232 12.2997C4.88706 10.7872 5.90219 9.47914 7.22224 8.53726C8.54229 7.59538 10.1094 7.06094 11.7299 7C13.3504 7.06094 14.9175 7.59538 16.2375 8.53726ZM9.93454 15.1557C10.466 15.5108 11.0907 15.7003 11.7299 15.7003C12.5865 15.699 13.4077 15.3581 14.0135 14.7523C14.6192 14.1466 14.9601 13.3254 14.9614 12.4688C14.9614 11.8296 14.7719 11.2048 14.4168 10.6734C14.0617 10.142 13.557 9.72779 12.9665 9.4832C12.376 9.23861 11.7263 9.17462 11.0994 9.29931C10.4726 9.424 9.89678 9.73177 9.44484 10.1837C8.9929 10.6356 8.68513 11.2115 8.56044 11.8383C8.43575 12.4652 8.49974 13.1149 8.74433 13.7054C8.98892 14.2959 9.40311 14.8006 9.93454 15.1557ZM13.604 12.4688C13.604 13.567 12.7137 14.4574 11.6154 14.4574C10.5171 14.4574 9.62673 13.567 9.62673 12.4688C9.62673 11.3705 10.5171 10.4801 11.6154 10.4801C12.7137 10.4801 13.604 11.3705 13.604 12.4688Z" fill="white" />
                            </svg>
                            <p className="text-sm text-white">{convertToKorM(Item.views)}</p>
                        </div>
                        <div className="flex gap-[2px] items-center leading-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14.9268 5C13.4927 5 12.2293 5.81667 11.5122 7.1C10.7951 5.81667 9.53171 5 8.09756 5C5.8439 5 4 7.1 4 9.66667C4 14.2944 11.5122 19 11.5122 19C11.5122 19 19.0244 14.3333 19.0244 9.66667C19.0244 7.1 17.1805 5 14.9268 5Z" fill="white" />
                            </svg>
                            <p className="text-sm text-white">{convertToKorM(Item.likes)}</p>
                        </div>
                        <div className="flex gap-[2px] items-center leading-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4998 4.00075C16.642 4.00075 19.9998 7.35846 19.9998 11.5007C20.0011 12.6058 19.7575 13.6974 19.2865 14.6971L19.984 18.0998C20.0088 18.2213 20.0032 18.3471 19.9675 18.4658C19.9318 18.5846 19.8672 18.6926 19.7795 18.7803C19.6918 18.868 19.5838 18.9326 19.465 18.9683C19.3463 19.004 19.2205 19.0096 19.099 18.9848L15.6963 18.2873C14.7258 18.7448 13.6413 18.9998 12.4998 18.9998C8.35765 18.9998 4.99994 15.6428 4.99994 11.4999C4.99994 7.35846 8.35765 4 12.4998 4" fill="white" />
                            </svg>
                            <p className="text-sm text-white">{convertToKorM(Item.comments)}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}