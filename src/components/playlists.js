import React, { useState, useEffect, useCallback } from 'react';
import PlaylistTracklist from './playlisttracklist';
import UserPlaylists from './userplaylists';


function Playlists({
    Spotify,
    setPlaylistName,
    playlistName,
    setSelectedPlaylistId,
    playlistTracks,
    setSelectedPlaylistSnapshotId,
    currentPlaylists
}) {




    const [selectedPlaylist, setSelectedPlaylist] = useState("")



    const handleClick = useCallback(() => {

        Spotify.addPlaylist(playlistName)

    }, [playlistName])




    const setPlaylistId = () => {

        currentPlaylists.map(playlist => {
            if (playlist.name === selectedPlaylist) {
                setSelectedPlaylistId(playlist.id)
            }
        })
    }


    const setPlaylistSnapshotId = () => {

        currentPlaylists.map(playlist => {
            if (playlist.name === selectedPlaylist) {
                setSelectedPlaylistSnapshotId(playlist.snapshot_id)
            }
        })
    }


    useEffect(() => {
        setTimeout(() => {
            setPlaylistId()
            setPlaylistSnapshotId()
        }, 500)
    }, [selectedPlaylist])



    return (
        <div className='bg-[#76885B] border-2 border-[#2F3020] rounded-lg mx-12 h-[872px] overflow-auto'>
            <div className='text-[#EEEEEE]'>
                <h2 className='text-2xl flex justify-center p-4'>Your Playlists</h2>
            </div>

            <div className='flex justify-evenly pt-12 text-[#EEEEEE]'>
                <div id="left">
                    <div className='flex flex-col'>
                        <input className='rounded-lg w-[13rem] text-black pl-2 h-10 mb-2 border-2 border-[#2F3020] bg-[#EEEEEE] outline-none' type="text" placeholder='Playlist Name...' name="playlist-name" onChange={(e) => setPlaylistName(e.target.value)} />
                        <button className='font-bold w-[6.5rem] border-2 border-[#2F3020] rounded-lg px-2 py-1 text-[#EEEEEE] bg-[#D96846] hover:bg-[#F48665]' type="button" onClick={handleClick}>CREATE</button>
                    </div>
                    <div className='pt-6'>
                        <h2 className='font-semibold text-xl pb-8'>Select Playlist</h2>
                        {currentPlaylists.map(playlist => {

                            const setPlaylist = () => {
                                setSelectedPlaylist(playlist.name)
                            }

                            return (
                                <div>
                                    <UserPlaylists
                                        setPlaylist={setPlaylist}
                                        playlistName={playlist.name}
                                        Spotify={Spotify}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div id="right">
                    <h2 className='pt-[6.75rem] font-semibold text-xl pb-4'>Playlist Tracks</h2>
                    {playlistTracks.map(track => {

                        const removeFromPlaylist = () => {

                            Spotify.removeTrack(track.trackUri)
                        }

                        return (
                            <div>
                                <PlaylistTracklist
                                    trackName={track.name}
                                    trackArtist={track.artist}
                                    trackAlbum={track.album}
                                    removeTrack={removeFromPlaylist}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};


export default Playlists;