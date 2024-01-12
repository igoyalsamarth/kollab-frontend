import { Link } from "react-router-dom";

export default function InfluencerTile(props: any) {

const convertToKorM = (num: number) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return num;
  }
}
  return (
    <div className="flex flex-col items-center -space-y-[5px] w-full">
      <div className="z-[100] flex bg-slate-500 aspect-square w-[104px] border-[10px] border-white rounded-full shadow-[0px_4px_34px_0px_#D6DFF2]">
      </div>
      <div className="z-[99] w-full gap-4 flex flex-col border-[10px] border-white rounded-[10px] shadow-[0px_4px_34px_0px_#D6DFF2] p-5 items-center bg-gradient-to-b from-[#F2F6FE] to-[#f2f6fe00]">
        <div className="flex flex-col items-center">
          <p className="text-lg text-center line-clamp-1">{props.accountName}</p>
          <p className="text-sm">@{props.instaAccount}</p>
        </div>
        <div className="flex gap-[5px]">
          <p className="text-[11px] tracking-wide uppercase text-[#77777F] border border-[#D0D9F1] rounded-full px-[10px] pt-[3px] pb-[2px]">COMEDY</p>
          <p className="text-[11px] tracking-wide uppercase text-[#77777F] border border-[#D0D9F1] rounded-full px-[10px] pt-[3px] pb-[2px]">FITTNESS</p>
        </div>
        <br className="bg-black h-[1px]" />
        <div className="flex gap-10">
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
        <Link to={props.instaAccount} className="px-5 py-[10px] border border-[#D0D9F1] rounded-[10px] font-moderno">
          View Details
        </Link>
      </div>
    </div>
  );
}