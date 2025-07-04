import React from "react";

const songs = [
    { title: "Come Together", artist: "The Beatles" },
    { title: "Something", artist: "The Beatles" },
    { title: "Maxwell's Silver Hammer", artist: "The Beatles" },
    { title: "Here Comes the Sun", artist: "The Beatles" }
];

const MusicList = () => (
    <ul className="lista-musica">
        {songs.map((song, index) => (
            <li key={index}>
                <span style={{ fontWeight: "bold", marginRight: 12 }}>{song.title}</span>
                <span style={{ color: "#aaa" }}>{song.artist}</span>
            </li>
        ))}
    </ul>
);

export default MusicList;