import React from "react";


function Track({track, addToPlaylist}) {

    return (
        <div className="flex border-b-4">
            <div className='max-w-80 pb-6 mt-6'>
                <h3 className='font-semibold'>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <div className="ml-auto pl-4 mt-6">
                <button className='text-3xl font-bold' onClick={addToPlaylist}type="button">+</button>
            </div>
        </div>
    )

};

export default Track;