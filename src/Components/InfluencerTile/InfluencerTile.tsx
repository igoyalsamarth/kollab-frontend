import { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import { convertToKorM, getBase64Image } from "../../util/generalFunctions";

export default function InfluencerTile(props: any) {
const [profileModal, setProfileModal] = useState(false)

return (
    <>
    <div className="flex flex-col items-center -space-y-[5px] w-full">
      <button onClick={() => setProfileModal(true)} className={`z-[50] flex aspect-square w-[104px] border-[5px] border-white rounded-full shadow-[0px_4px_34px_0px_#D6DFF2] bg-cover`} style={{backgroundImage: `url(${getBase64Image(props.imgSource)})`}}>
      </button>
      <button onClick={() => setProfileModal(true)} className="z-[49] w-full gap-4 flex flex-col border-[5px] overflow-clip border-white rounded-[10px] shadow-[0px_4px_34px_0px_#D6DFF2] p-5 items-center bg-gradient-to-b from-[#F2F6FE] to-[#f2f6fe00]">
        <div className="flex flex-col items-center">
          <p className="text-lg text-center line-clamp-1">{props.accountName}</p>
          <p className="text-sm">@{props.instaAccount}</p>
        </div>
        <div className="flex gap-[5px] w-fit">
          <p className="text-[11px] tracking-wide uppercase text-[#77777F] border border-[#D0D9F1] w-full rounded-full px-[10px] pt-[3px] pb-[2px] overflow-ellipsis">{props.category ?? 'Influencer'}</p>
        </div>
        <div className="flex gap-10 border-t border-[#D0D9F1] pt-[15px] w-full justify-center">
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold uppercase leading-none">{props.posts}</p>
            <p className="text-[#767676] text-sm">posts</p>
          </div>
          <div className="flex flex-col items-center">
          <p className="text-lg font-semibold uppercase leading-none">{convertToKorM(props.followers)}</p>
            <p className="text-[#767676] text-sm">followers</p>
          </div>
        </div>
        <div className="flex flex-col w-[100%] items-center">
          <div className="flex w-full rounded-[10px] bg-[#E4EBF8] overflow-clip">
            <div className="flex w-[10%] p-[10px] bg-[#A2E3A8]">
              <p className="text-lg font-semibold uppercase">10%</p>
            </div>
          </div>
          <p className="text-[#767676] text-sm">Engagment rate</p>
        </div>
        <div className="px-5 py-[10px] border border-[#D0D9F1] rounded-[10px] font-moderno">
          View Details
        </div>
      </button>
    </div>
    {
      profileModal && <ProfileModal setProfileModal={setProfileModal} instaAccount={props.instaAccount} />
    }
    </>
  );
}