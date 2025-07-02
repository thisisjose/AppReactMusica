import React from "react";
import MainContent from "./MainContent";

const MusicList = () => {
    const songs = [
        {title: "Cancion 1", artist: "Artista 1"},
        {title: "Cancion 1", artist: "Artista 2"},
        {title: "Cancion 1", artist: "Artista 3"},

    ]
    return(
        <div>
            <h3>Mi canciones</h3>
            <br />
            <ul>
                {songs.map((song,index) =>(
                    <li key={index}>
                        <span>{song.title}</span>
                        <span>{song.artist}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MusicList;