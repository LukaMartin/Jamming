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
                <input className='rounded w-80 h-12' type="text" placeholder="  Track name or artist..." onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className='flex align-middle justify-center p-4 text-white text-2xl font-bold'>
                <button className='px-2 pb-1 border-2 rounded button' onClick={handleClick}>SEARCH</button>
            </div>

        </div>

    )

};


export default SearchBar;