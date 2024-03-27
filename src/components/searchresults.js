import React from "react";
import TrackList from "./tracklists";


function SearchResults({searchResults, addTrack, Spotify}) {

    return (
        
    <div className='bg-[#76885B] rounded-lg mx-12 overflow-auto border-2 border-[#364429]'>
        <div className='text-[#EEEEEE] flex align-middle justify-center p-4'>
            <h2 className='text-2xl'>Search Results</h2>
        </div>
        <div className='h-[800px] text-white flex align-middle justify-center pt-4'>
            <TrackList 
                tracklist={searchResults}
                addTrack={addTrack}
                Spotify={Spotify}
            />
        </div>
    </div>
    )


};

export default SearchResults