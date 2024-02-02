import instaLogo from '../../assets/insta.png'
import union from '../../assets/union.svg'
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'

const people = [
    "Influencer",
    "Entrepreneur",
    "Fashion Stylist",
    "Digital Creator",
    "Health/Beauty",
    "Artist",
    "Dermatologist",
    "Doctor"
]

export default function Home() {

    const [selected, setSelected] = useState<any>('')
    const [query, setQuery] = useState<string>('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )


    return (
        <div className="flex flex-col items-center w-full gap-[60px]">
            <div className='flex flex-col relative items-center w-full rounded-full'>
                <div className='flex z-[12] absolute top-0 left-[450px] w-[268.784px] aspect-square rotate-[-13.375deg] p-10 items-center justify-center border-[11px] border-white rounded-[20px] bg-gradient-to-b from-[#E2DBED] from-0% via-[#F8FAE2] via-50% to-[#E7FAF6] to-100%'>
                    <img src={union} className=' mix-blend-overlay rotate-[10deg]' />
                </div>
                <div className='flex z-[11] absolute top-0 w-[268.784px] aspect-square rotate-[16.208deg] p-10 items-center justify-center border-[11px] border-white rounded-[20px] bg-gradient-to-b from-[#E2DBED] from-0% via-[#F8FAE2] via-50% to-[#E7FAF6] to-100%'>
                    <img src={union} className=' mix-blend-overlay rotate-[10deg]' />
                </div>
                <div className='flex z-[10] absolute top-0 left-[730px] w-[268.784px] aspect-square rotate-[5.792deg] p-10 items-center justify-center border-[11px] border-white rounded-[20px] bg-gradient-to-b from-[#E2DBED] from-0% via-[#F8FAE2] via-50% to-[#E7FAF6] to-100%'>
                    <img src={union} className=' mix-blend-overlay rotate-[10deg]' />
                </div>
                <div className='flex z-[20] h-[216px] absolute top-32 w-[600px] blur-[22px] backdrop-blur-[2px] aspect-square p-10 items-center justify-center rounded-[1074px] bg-[rgba(255,255,255,0.30]'>
                </div>
                <div className='flex flex-col z-[100] items-center gap-[10px] border-b-[3px] border-[#D0D9F1] w-full pb-[52px] pt-[150px]'>
                    <div className="flex items-center gap-2">
                        <p className='text-[#2B3031] text-[40px] font-moderno'>Discover</p>
                        <img src={instaLogo} />
                        <p className='text-[#2B3031] text-[40px] font-moderno'>Creators in Delhi</p>
                    </div>
                    <p className='text-[#2B3031] text-xl'>Save time in finding influencers for your brand growth</p>
                </div>
                <div className='z-[100] flex relative -mt-[22px]'>
                        <Combobox value={selected} onChange={setSelected}>
                            <div className="">
                                <div className="relative w-full">
                                <Combobox.Button>
                                    <Combobox.Input
                                    placeholder="Search for your brands category"
                                        className="w-[681px] h-[44px]  rounded-full placeholder:text-[#939393] border-[3px] border-[#D0D9F1] px-5 py-[10px] bg-white"
                                        displayValue={(person:any) => person}
                                        onChange={(event) => setQuery(event.target.value)}
                                    />
                                    </Combobox.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    afterLeave={() => setQuery('')}
                                >
                                    <Combobox.Options className="z-[100] p-1 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {filteredPeople.length === 0 && query !== '' ? (
                                            <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                                Nothing found.
                                            </div>
                                        ) : (
                                            filteredPeople.map((person) => (
                                                <Combobox.Option
                                                    key={person}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white rounded' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {person}
                                                            </span>
                                                            {selected ? (
                                                                <span
                                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                        }`}
                                                                >
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))
                                        )}
                                    </Combobox.Options>
                                </Transition>
                            </div>
                        </Combobox>
                    <Link to={`/search/${selected.toLowerCase().replace(/\//g, '-')}`} className='absolute top-[8px] right-[12px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.739 2.125C17.109 2.125 21.477 6.493 21.477 11.863C21.477 14.3965 20.5047 16.7073 18.9136 18.4415L22.0444 21.5657C22.3374 21.8587 22.3384 22.3327 22.0454 22.6257C21.8994 22.7737 21.7064 22.8467 21.5144 22.8467C21.3234 22.8467 21.1314 22.7737 20.9844 22.6277L17.8159 19.468C16.1491 20.8028 14.0357 21.602 11.739 21.602C6.369 21.602 2 17.233 2 11.863C2 6.493 6.369 2.125 11.739 2.125ZM11.739 3.625C7.196 3.625 3.5 7.32 3.5 11.863C3.5 16.406 7.196 20.102 11.739 20.102C16.281 20.102 19.977 16.406 19.977 11.863C19.977 7.32 16.281 3.625 11.739 3.625Z" fill="url(#paint0_radial_160_2228)" />
                            <defs>
                                <radialGradient id="paint0_radial_160_2228" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.5 6.5) rotate(76.6755) scale(19.5256 19.0984)">
                                    <stop stop-color="#839295" />
                                    <stop offset="1" stop-color="#2B3031" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col items-center gap-[30px] z-[99]'>
                <p>Or select a listed category</p>
                <div className='flex flex-wrap gap-[15px]'>
                    <Link to='/search/influencer' className='text-[#2B3031] rounded-full font-moderno px-5 py-[10px] flex gap-1 items-center justify-center border border-[#D0D9F1] shadow-[0px_4px_6px_0px_rgba(208,217,241,0.70)] bg-gradient-to-r from-[#ECDBFF] from-[-9.53%] via-[#FEFFE5] via-48.3% to-[#EAFAF3] to-107.31%'>
                        <p>Influencer</p>
                    </Link>
                    <Link to='/search/entrepreneur' className='text-[#2B3031] rounded-full font-moderno px-5 py-[10px] flex gap-1 items-center justify-center border border-[#D0D9F1] shadow-[0px_4px_6px_0px_rgba(208,217,241,0.70)] bg-gradient-to-r from-[#ECDBFF] from-[-9.53%] via-[#FEFFE5] via-48.3% to-[#EAFAF3] to-107.31%'>
                        <p>Entrepreneure</p>
                    </Link>
                    <Link to='/search/artist' className='text-[#2B3031] rounded-full font-moderno px-5 py-[10px] flex gap-1 items-center justify-center border border-[#D0D9F1] shadow-[0px_4px_6px_0px_rgba(208,217,241,0.70)] bg-gradient-to-r from-[#ECDBFF] from-[-9.53%] via-[#FEFFE5] via-48.3% to-[#EAFAF3] to-107.31%'>
                        <p>Artist</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}