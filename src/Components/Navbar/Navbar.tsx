import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='flex justify-between py-5 relative w-full'>
            <Link to='/'>
                <p className='font-moderno text-4xl text-[#1F1F1F] font-medium'>kollab</p>
            </Link>
            <div className='hidden items-center gap-7 py-3'>
                <Link to='#' className='font-moderno text-xl text-black'>Login</Link>
                <div className="relative">
                    <div className="bg-[#FDFFEB] -top-[50px] left-[50px] w-[36.467px] h-[122.556px] absolute rotate-[-36deg] blur-[34px]">
                    </div>
                    <Link to='#' className='z-[100] font-moderno bg-[#222D4B] border border-[#D0D9F1] rounded-[10px] px-5 py-[10px] text-xl text-white'>Free Signup</Link>
                </div>
            </div>
        </div>
    );
}