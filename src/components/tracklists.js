import React from "react";

import Track from "./track";


function TrackList({tracklist, addTrack, Spotify}) {

    return (
        <div>
            {tracklist.map((track) => {

                const addToPlaylist = () => {

                    Spotify.addTrack(track.uri)
        
                }
                return (
                <div>
                    <div>
                        <Track 
                            key={track.id} 
                            track={track}
                            addToPlaylist={addToPlaylist}
                        />
                    </div>
                </div>
                )
            })}
        </div>
    )

};

export default TrackList;