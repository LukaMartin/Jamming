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
        <div className='border-4 rounded-xl mx-12 h-[872px] overflow-auto'>
            <div className='text-white'>
                <h2 className='text-2xl flex justify-center p-4'>Your Playlists</h2>
            </div>

            <div className='flex justify-center space-x-6 pt-4'>

                <input className='rounded w-64 h-8' type="text" placeholder='  Playlist Name...' name="playlist-name" onChange={(e) => setPlaylistName(e.target.value)} />

                <button className='font-bold border-2 rounded px-2 text-white' type="button" onClick={handleClick}>CREATE PLAYLIST</button>

            </div>

            <div className='flex justify-evenly text-white'>
                <div className='pt-6'>
                    <h2 className='font-semibold text-xl pb-4'>Select Playlist</h2>
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

                <div>
                    <h2 className='pt-6 font-semibold text-xl pb-4'>Playlist Tracks</h2>
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