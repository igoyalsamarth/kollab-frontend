import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='flex justify-between py-5'>
            <Link to='/'>
                <p className='font-moderno text-4xl'><span className='text-[#E0446F]'>k</span><span className='text-[#12A1CC]'>o</span><span className='text-[#E0446F]'>l</span><span className='text-[#12A1CC]'>l</span><span className='text-[#E0446F]'>a</span><span className='text-[#12A1CC]'>b</span></p>
            </Link>
            <Link to='search'>Search</Link>
            <div className='flex items-center gap-7'>
                <Link to='#' className='font-moderno text-xl text-[#E0446F]'>Login</Link>
                <Link to='#' className='font-moderno bg-[#E0446F] text-white px-5 py-[10px] rounded-full border border-[#550A1F] shadow-[4px_4px_0px_0px_#550A1F]'>Free Signup</Link>
            </div>
        </div>
    );
}