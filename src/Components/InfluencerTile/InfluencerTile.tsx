import { Link } from "react-router-dom";

export default function InfluencerTile(props:any){
    return(
        <div className="flex flex-col items-center p-5 gap-3 rounded-[20px] bg-[#FCD8DE] border border-[#F7A3B1] shadow-[4px_4px_0px_0px_#E0446F] ">
          <div className="flex w-[113px] aspect-square rounded-full bg-white">
          </div>
          <div className="flex flex-col items-center">
            <p className=" text-lg">{props.accountName}</p>
            <div className="flex">
              <p>@{props.instaAccount}</p>
            </div>
          </div>
          <div className="flex gap-1">
            <p className="bg-white uppercase px-[10px] py-[2px] tracking-wider text-xs rounded-full border-[0.2px] border-black">FITTNESS</p>
            <p className="bg-white uppercase px-[10px] py-[2px] tracking-wider text-xs rounded-full border-[0.2px] border-black">COMEDY</p>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <p className=" font-semibold text-lg leading-none">{props.posts}</p>
              <p className="text-[#767676] text-sm">posts</p>
            </div>
            <div className="flex flex-col items-center">
              <p className=" font-semibold text-lg leading-none">{props.followers}</p>
              <p className="text-[#767676] text-sm">followers</p>
            </div>
          </div>
          <div className="flex items-center gap-[3px] font-moderno ">
            <p className="text-[#E0446F]">{props.links}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M9.02324 12.2205C9.09316 12.2902 9.14864 12.373 9.18649 12.4641C9.22435 12.5553 9.24383 12.653 9.24383 12.7517C9.24383 12.8505 9.22435 12.9482 9.18649 13.0394C9.14864 13.1305 9.09316 13.2133 9.02324 13.283L8.65199 13.6542C7.94851 14.3577 6.99437 14.753 5.99949 14.753C5.00461 14.753 4.05048 14.3577 3.34699 13.6542C2.64351 12.9508 2.24829 11.9966 2.24829 11.0017C2.24829 10.0069 2.64351 9.05274 3.34699 8.34925L4.85449 6.84237C5.53042 6.16478 6.43985 5.77127 7.39651 5.74245C8.35316 5.71363 9.28463 6.05169 10.0001 6.68737C10.074 6.75304 10.1342 6.8326 10.1773 6.92153C10.2204 7.01047 10.2456 7.10702 10.2514 7.20568C10.2572 7.30434 10.2435 7.40318 10.2111 7.49655C10.1787 7.58993 10.1283 7.67601 10.0626 7.74987C9.99696 7.82374 9.91739 7.88396 9.82846 7.92707C9.73953 7.97019 9.64297 7.99537 9.54431 8.00118C9.44565 8.00698 9.34681 7.99329 9.25344 7.9609C9.16006 7.9285 9.07399 7.87804 9.00012 7.81237C8.57107 7.43133 8.01264 7.22861 7.43906 7.24569C6.86549 7.26277 6.32011 7.49835 5.91449 7.90425L4.40824 9.40925C3.98622 9.83128 3.74913 10.4037 3.74913 11.0005C3.74913 11.5973 3.98622 12.1697 4.40824 12.5917C4.83027 13.0138 5.40266 13.2509 5.99949 13.2509C6.59633 13.2509 7.16872 13.0138 7.59074 12.5917L7.96199 12.2205C8.03165 12.1508 8.11436 12.0954 8.20541 12.0577C8.29646 12.02 8.39406 12.0005 8.49262 12.0005C8.59118 12.0005 8.68877 12.02 8.77982 12.0577C8.87087 12.0954 8.95359 12.1508 9.02324 12.2205ZM13.6532 3.3455C12.9492 2.64309 11.9953 2.24863 11.0007 2.24863C10.0062 2.24863 9.0523 2.64309 8.34824 3.3455L7.97699 3.71675C7.8361 3.85765 7.75694 4.04874 7.75694 4.248C7.75694 4.44726 7.8361 4.63835 7.97699 4.77925C8.11789 4.92015 8.30899 4.9993 8.50824 4.9993C8.7075 4.9993 8.8986 4.92015 9.03949 4.77925L9.41074 4.408C9.83277 3.98597 10.4052 3.74888 11.002 3.74888C11.5988 3.74888 12.1712 3.98597 12.5932 4.408C13.0153 4.83003 13.2524 5.40241 13.2524 5.99925C13.2524 6.59608 13.0153 7.16847 12.5932 7.5905L11.0864 9.098C10.6804 9.50373 10.1347 9.73897 9.56099 9.75558C8.98727 9.7722 8.42889 9.56893 8.00012 9.18737C7.92625 9.12171 7.84017 9.07124 7.7468 9.03885C7.65343 9.00646 7.55459 8.99277 7.45592 8.99857C7.35726 9.00438 7.26071 9.02956 7.17178 9.07268C7.08285 9.11579 7.00328 9.17601 6.93762 9.24987C6.87196 9.32374 6.82149 9.40982 6.78909 9.50319C6.7567 9.59657 6.74301 9.69541 6.74882 9.79407C6.75462 9.89273 6.7798 9.98928 6.82292 10.0782C6.86604 10.1671 6.92625 10.2467 7.00012 10.3124C7.71511 10.9479 8.64595 11.2862 9.60215 11.258C10.5584 11.2297 11.4676 10.8371 12.1439 10.1605L13.6514 8.65363C14.3546 7.94974 14.7498 6.99556 14.7501 6.00058C14.7505 5.00559 14.356 4.05114 13.6532 3.34675V3.3455Z" fill="#E0446F" />
            </svg>
            <p className="text-[#E0446F]">found</p>
          </div>
          {props.emailId ? <p className="text-[#767676] text-sm">{props.emailId}</p> :
          <p className="text-[#767676] text-sm">No email found</p>}
          <Link to={props.accountName} className="font-moderno rounded-full text-white border border-[#550A1F] shadow-[4px_4px_0px_0px_#550A1F] bg-[#E0446F] px-[20px] py-[10px]">Open Profile</Link>
        </div>
    );
}