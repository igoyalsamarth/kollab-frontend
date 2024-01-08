import { Routes, Route, Link } from 'react-router-dom'
import ListOfInfluencers from '../Routes/ListOfInfluencers';
import Home from '../Routes/Home';
export default function Layout() {
    return (
        <div className='flex items-center justify-center'>
            <div className='flex w-[1440px] flex-col'>
                <div className='flex justify-between py-5'>
                <Link to='/'>
                    <p className=' text-4xl'><span className='text-[#E0446F]'>k</span><span className='text-[#12A1CC]'>o</span><span className='text-[#E0446F]'>l</span><span className='text-[#12A1CC]'>l</span><span className='text-[#E0446F]'>a</span><span className='text-[#12A1CC]'>b</span></p>
                </Link>
                <Link to='search'>Search</Link>
                <div className='flex items-center gap-7'>
                    <Link to='#' className=' text-xl text-[#E0446F]'>Login</Link>
                    <Link to='#' className='bg-[#E0446F] text-white px-5 py-[10px] rounded-full border border-[#550A1F] shadow-[4px_4px_0px_0px_#550A1F]'>Free Signup</Link>
                </div>
                </div>
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='search' element={<ListOfInfluencers />} />
                </Routes>
            </div>
        </div>
    );
}