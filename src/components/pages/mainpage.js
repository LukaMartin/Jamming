import React from "react";
import SearchBar from "../searchbar";
import SearchResults from "../searchresults";
import Playlists from "../playlists";
import Footer from "../footer";

function MainPage({
    Spotify,
    searchResults,
    setPlaylistName,
    playlistName,
    setSelectedPlaylistId,
    selectedPlaylistId,
    playlistTracks,
    setSelectedPlaylistSnapshotId,
    currentPlaylists,
}) {

    return (
        <>
            <div>
                <SearchBar
                    Spotify={Spotify}
                />
            </div>
            <div className='grid grid-flow-col grid-cols-2 grid-rows-1'>
                <div>
                    <SearchResults
                        searchResults={searchResults}
                        Spotify={Spotify}
                    />
                </div>
                <div>
                    <Playlists
                        Spotify={Spotify}
                        setPlaylistName={setPlaylistName}
                        playlistName={playlistName}
                        setSelectedPlaylistId={setSelectedPlaylistId}
                        selectedPlaylistId={selectedPlaylistId}
                        playlistTracks={playlistTracks}
                        setSelectedPlaylistSnapshotId={setSelectedPlaylistSnapshotId}
                        currentPlaylists={currentPlaylists}
                    />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )

};

export default MainPage;