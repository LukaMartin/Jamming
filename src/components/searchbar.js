import React, { useState, useCallback } from 'react'


function SearchBar({ Spotify }) {

    const [searchTerm, setSearchTerm] = useState('')

    const handleClick = useCallback(() => {
        console.log('Search for', searchTerm)
        Spotify.search(searchTerm)


    }, [searchTerm])


    return (
        <div className='pb-16'>
            <div className='flex align-middle justify-center p-2'>
                <input className='rounded-xl w-80 h-12 border-[#2F3020] border-2 outline-none pl-2 bg-[#EEEEEE]' type="text" placeholder=" Track name or artist..." onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className='flex align-middle justify-center p-4 text-[#EEEEEE] text-2xl font-bold'>
                <button className='px-8 pb-2 pt-1 bg-[#D96846] hover:bg-[#F48665] border-2 border-[#2F3020] rounded-xl' type='button' onClick={handleClick}>SEARCH</button>
            </div>
        </div>
    )
};


export default SearchBar;