import { Routes, Route } from 'react-router-dom'
import ListOfInfluencers from '../Routes/ListOfInfluencers';
import Home from '../Routes/Home';
import Navbar from '../Navbar/Navbar';
export default function Layout() {
    return (
        <div className='flex items-center justify-center'>
            <div className='flex w-[1440px] flex-col'>
                <Navbar />
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='search' element={<ListOfInfluencers />} />
                </Routes>
            </div>
        </div>
    );
}