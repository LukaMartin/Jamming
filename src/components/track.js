import React from "react";
import { FiPlusCircle } from "react-icons/fi";


function Track({track, addToPlaylist}) {

    return (
        <div className="flex border-b-2 border-b-[#2F3020]">
            <div className='max-w-80 pb-6 mt-6'>
                <h3 className='font-semibold'>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <div className="ml-auto pl-4 pt-4 self-center">
                <button className="hover:opacity-50" onClick={addToPlaylist} type="button"><FiPlusCircle size={30}/></button>
            </div>
        </div>
    )

};

export default Track;