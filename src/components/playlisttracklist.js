import React from "react";
import { FiMinusCircle } from "react-icons/fi";


function PlaylistTracklist({ trackName, trackArtist, trackAlbum, removeTrack }) {

    return (
        <div className="flex border-b-2 border-b-[#2F3020]">
            <div className="max-w-[12rem] pb-6 mt-6">
                <h3 className='font-semibold'>{trackName}</h3>
                <p>{trackArtist} | {trackAlbum}</p>
            </div>
            <div className="ml-auto mt-6 pl-4 self-center">
                <button className="hover:opacity-50" type="button" onClick={removeTrack}><FiMinusCircle size={30}/></button>
            </div>
        </div>
    )
};

export default PlaylistTracklist;