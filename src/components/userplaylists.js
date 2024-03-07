import React, { useState } from 'react';



function UserPlaylists({setPlaylist, playlistName, Spotify}) {

    const [hidden, setHidden] = useState(false)

   return (
    <div className='pb-6 max-w-48'>
        <div className='pb-2 font-medium text-lg underline'>
            <a href="#!" onClick={() => {setPlaylist(); {hidden === false ? setHidden(true) : setHidden(false)}}}>{playlistName}</a>
        </div>

        <div>
            {hidden && <button className='border-2 rounded px-1' type="button" onClick={Spotify.getPlaylistItems}>TRACKLIST</button>}
        </div>

    </div> 
   )

};

export default UserPlaylists;
