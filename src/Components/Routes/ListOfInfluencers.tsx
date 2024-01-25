import InfluencerTile from "../InfluencerTile/InfluencerTile";
import axios from 'axios'
import { useEffect, useState } from "react";
import { serverEndpoint } from "../../util/endpoint";
import LoadingPageAnimation from "../Loading/LoadingPageAnimation";
import { useParams } from "react-router-dom";

export default function ListOfInfluencers() {
  const [data, setData] = useState<undefined | any>(undefined)
  const { id } = useParams()
  const [categoryState, setCategortyState] = useState<string | undefined>(id)


  useEffect(() => {
    const getUsers = async () => {
      try {
        const param = id === 'influencer' ? null : id;
        const res = await axios.get(`${serverEndpoint}/query/get_professionals/${param}`);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="flex w-[1440px] flex-col items-center gap-[50px]">
      <div className="flex flex-col items-center gap-[30px]">
        <p className="text-[#2B3031] font-moderno text-[40px]">{data?.length} Creators found</p>
        <div className="relative">
          <input type="text" value={categoryState} className="w-[721px] capitalize text-[#2B3031] active:outline-[#2B3031] focus:outline-[#2B3031] px-5 py-[10px] border-[3px] border-[#D0D9F1] rounded-full" />
          <button onClick={() => setCategortyState('')} className="absolute top-[12px] right-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" className=" w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M6.3184 6.40767L17.441 17.5589M6.29454 17.5685L17.4315 6.43153" stroke="#4A5354" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      {data ? <div className="grid grid-cols-4 gap-[60px] w-[1140px] py-10">
        {data && data.map((Item: any) => { return (<InfluencerTile key={Item.id} instaAccount={Item.instaAccount} accountName={Item.accountName} followers={Item.followers} posts={Item.posts} links={Item.link.length} emailId={Item.emailId} imgSource={Item.imgSource} category={Item.category} />) })}
      </div>
        : <LoadingPageAnimation />}
    </div>
  )
}