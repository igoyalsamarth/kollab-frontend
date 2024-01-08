import InfluencerTile from "../InfluencerTile/InfluencerTile";
import axios from 'axios'
import { useEffect, useState } from "react";
import { serverEndpoint } from "../../util/endpoint";
import LoadingPageAnimation from "../Loading/LoadingPageAnimation";

export default function ListOfInfluencers() {
  const [data, setData] = useState<undefined | any>(undefined)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${serverEndpoint}/query/get_professionals`)
        console.log(res)
        setData(res.data.data)
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);
  return (
    <div className="flex w-[1440px] flex-col">
      <div className="flex">

      </div>
      {data ? <div className="grid grid-cols-4 gap-9 w-full">
        {data && data.map((Item: any) => { return (<InfluencerTile key={Item.id} instaAccount={Item.instaAccount} accountName={Item.accountName} followers={Item.followers} posts={Item.posts} links={Item.link.length} emailId = {Item.emailId} />) })}
      </div> 
      : <LoadingPageAnimation />}
    </div>
  )
}