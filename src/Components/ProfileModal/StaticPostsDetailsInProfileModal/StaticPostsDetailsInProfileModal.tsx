import axios from 'axios'
import { useEffect, useState } from 'react'
import { serverEndpoint } from '../../../util/endpoint';
import { convertToKorM, getBase64Image } from '../../../util/generalFunctions';

export default function StaticPostsInProfileModal(props: any) {

    const [reelDetails, setReelDetails] = useState<any | undefined>(undefined)

    useEffect(() => {
        const getReelsDetails = async () => {
            try {
                const res = await axios.get(`${serverEndpoint}/query/get_user_static_posts/${props.instaAccount}`)
                setReelDetails(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getReelsDetails()
    }, [props.instaAccount]);

    return (
        <>
            <div className="flex gap-[30px]">
                <div className="flex flex-col">
                    <p className="text-[20px] leading-none font-semibold">{convertToKorM(reelDetails?.likes)}</p>
                    <p className="text-[#767676] text-sm">avg. static posts likes</p>
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
                {reelDetails?.data.map((Item: any) => <div className="flex w-[190px] h-[190px] bg-gray-500 rounded-[10px] overflow-clip shadow-[0px_4px_14px_0px_#E5ECFF] items-end bg-cover" style={{ backgroundImage: `url(${getBase64Image(Item.imgSource)})` }}>
                    <div className="flex flex-col gap-[1px] bg-gradient-to-t from-black w-full p-[10px]">
                        <div className="flex gap-[2px] items-center leading-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14.9268 5C13.4927 5 12.2293 5.81667 11.5122 7.1C10.7951 5.81667 9.53171 5 8.09756 5C5.8439 5 4 7.1 4 9.66667C4 14.2944 11.5122 19 11.5122 19C11.5122 19 19.0244 14.3333 19.0244 9.66667C19.0244 7.1 17.1805 5 14.9268 5Z" fill="white" />
                            </svg>
                            <p className="text-sm text-white">{convertToKorM(Item.likes)}</p>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}