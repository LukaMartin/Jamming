import React from "react";



function PlaylistTracklist({ trackName, trackArtist, trackAlbum, removeTrack }) {

    return (
        <div className="flex border-b-4">
            <div className="max-w-[12rem] pb-6 mt-6">
                <h3 className='font-semibold'>{trackName}</h3>
                <p>{trackArtist} | {trackAlbum}</p>
            </div>
            <div className="ml-auto mt-6 pl-4">
                <button className='text-3xl font-bold' type="button" onClick={removeTrack}>-</button>
            </div>
        </div>
    )
};

export default PlaylistTracklist;