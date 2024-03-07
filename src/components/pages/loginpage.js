import React from "react";

function LoginPage({ Spotify }) {

    return (
        <div className='text-white mt-10'>
            <div className='text-center p-4 font-semibold text-2xl'>
                <h2>Welcome to the Spotify Jamming App</h2>
            </div>

            <div className='p-10 mt-10'>
                <p className='text-xl text-center px-6'>This application allows you to:</p>
                <ul className='grid justify-center pl-2 pt-4 list-disc'>
                    <li>Search for music by track name or artist</li>
                    <li>Display current playlists in your Spotify library</li>
                    <li>Customise your playlists by adding and removing tracks</li>
                    <li>Create new playlists to add to your library</li>
                </ul>
            </div>

            <div className='mt-10 text-center'>
                <p className='text-lg py-6'>Click the button below to login to your Spotify account and access the Jamming app</p>
                <button className='text-2xl border-2 rounded px-2 pb-1' type="button" onClick={Spotify.getAccessToken}>LOGIN</button>
            </div>
        </div>
    )
};

export default LoginPage;