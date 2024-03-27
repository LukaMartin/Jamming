import React, { useState } from 'react';



function UserPlaylists({setPlaylist, playlistName, Spotify}) {

    const [hidden, setHidden] = useState(false)

   return (
    <div className='pb-6 pt-2 max-w-48'>
        <div className='pb-2 font-semibold hover:underline'>
            <a href="#!" onClick={() => {setPlaylist(); {hidden === false ? setHidden(true) : setHidden(false)}}}>{playlistName.toUpperCase()}</a>
        </div>

        <div>
            {hidden && <button className='hover:opacity-60 hover:underline' type="button" onClick={Spotify.getPlaylistItems}>TRACKLIST</button>}
        </div>

    </div> 
   )

};

export default UserPlaylists;
