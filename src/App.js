import React, { useEffect, useState } from 'react'
import LoginPage from './components/pages/loginpage';
import MainPage from './components/pages/mainpage'


function App() {

  const [searchResults, setSearchResults] = useState([]);

  const [currentPlaylists, setCurrentPlaylists] = useState([])

  const [playlistName, setPlaylistName] = useState('')

  const [selectedPlaylistId, setSelectedPlaylistId] = useState("")

  const [selectedPlaylistSnapshotId, setSelectedPlaylistSnapshotId] = useState("")

  const [playlistTracks, setPlaylistTracks] = useState([])

  const [accessToken, setAccessToken] = useState("")

  const [fullAccessToken, setFullAccessToken] = useState("")



  useEffect(() => {

    if (fullAccessToken !== "") {
      Spotify.userPlaylists()
    }

  }, [fullAccessToken])

  useEffect(() => {

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    if (accessTokenMatch) {
      Spotify.getAccessToken()
    }


  }, [])


  const clientId = '2c7fd96757f94bfda616a4efb6463751';
  const redirectUri = 'https://jamming-sand.vercel.app/';


  const Spotify = {


    getAccessToken() {

      if (accessToken) {
        return accessToken;
      }

      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      const tokenType = window.location.href.match(/token_type=([^&]*)/);
      if (accessTokenMatch && expiresInMatch) {
        setAccessToken(accessTokenMatch[1]);
        const expiresIn = Number(expiresInMatch[1]);
        setFullAccessToken(`"${tokenType[1]} ${accessTokenMatch[1]}"`);
        // Reset access token after token expires
        window.setTimeout(() => setAccessToken(''), expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessTokenMatch[1];
      } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
      }
    },


    search(term) {
      setSearchResults([])
      fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        method: "GET",
        headers: {
          "Authorization": fullAccessToken
        }
      }).then((response) => {
        return response.json();
      }).then((jsonResponse) => {
        console.log('search response', jsonResponse)
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => {
          setSearchResults(prevResults =>
            [...prevResults, {
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              id: track.id,
              uri: track.uri
            }])
        })
      })
    },

    userPlaylists() {

      fetch("https://api.spotify.com/v1/users/l.d.martin1993/playlists", {
        method: "GET",
        headers: {
          Authorization: fullAccessToken
        }
      }).then((response) => {
        return response.json()
      }).then((jsonResponse) => {
        setCurrentPlaylists(jsonResponse.items)
      })
    },


    addPlaylist(name) {

      const bodyData = {
        name: name,
        description: " ",
        public: true
      }

      fetch("https://api.spotify.com/v1/users/l.d.martin1993/playlists", {
        method: "POST",
        headers: {
          Authorization: fullAccessToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
      }).then((response) => {
        return response.json();
      }).then((jsonResponse) => {
        Spotify.userPlaylists()
      })
    },


    getPlaylistItems() {

      setTimeout(() => {
        setPlaylistTracks([])
      }, 150)

      fetch(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}/tracks`, {
        method: "GET",
        headers: {
          Authorization: fullAccessToken
        }
      }).then((response) => {
        return response.json();
      }).then((jsonResponse) => {
        jsonResponse.items.map(tracks => {
          setPlaylistTracks(prev => [...prev, {
            name: tracks.track.name,
            artist: tracks.track.artists[0].name,
            album: tracks.track.album.name,
            trackUri: tracks.track.uri
          }])
        })
      })
    },


    addTrack(trackUri) {

      const bodyData = {
        uris: [trackUri],
        position: 0
      }

      fetch(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}/tracks`, {
        method: "POST",
        headers: {
          Authorization: fullAccessToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
      }).then((response) => {
        return response.json();
      }).then((jsonResponse) => {
        Spotify.getPlaylistItems()
      })
    },


    removeTrack(trackUri) {

      const bodyData = {
        tracks: [{ uri: trackUri }],
        snapshot_id: selectedPlaylistSnapshotId
      }

      fetch(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}/tracks`, {
        method: "DELETE",
        headers: {
          Authorization: fullAccessToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)

      }).then((response) => {
        return response.json();
      }).then((jsonResponse) => {
        Spotify.getPlaylistItems()
      })
    }

  }


  return (
    <>
      <div className='flex align-middle justify-center p-12'>
        <h1 className='text-5xl font-semibold text-[#2F3020] [text-shadow:0px_2px_2px_#2F3020]'>SPOTIFY JAMMING APP</h1>
      </div>
      {accessToken === "" ? (
        <div>
          <LoginPage Spotify={Spotify} />
        </div>
      ) : (
        <div>
          <MainPage
            Spotify={Spotify}
            searchResults={searchResults}
            setPlaylistName={setPlaylistName}
            playlistName={playlistName}
            setSelectedPlaylistId={setSelectedPlaylistId}
            selectedPlaylistId={selectedPlaylistId}
            playlistTracks={playlistTracks}
            setSelectedPlaylistSnapshotId={setSelectedPlaylistSnapshotId}
            currentPlaylists={currentPlaylists}
          />
        </div>
      )}
    </>
  );
}

export default App;



