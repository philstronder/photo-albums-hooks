import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Album from '../Album/Album'

export default function AlbumsList() {
    const [photos, setPhotos] = useState([]);
    const url = "https://jsonplaceholder.typicode.com/photos";

    axios.get(url).then(res => {
        //console.log(res.data);
        setPhotos(res.data);
    });

    const uniqueAlbums = [...new Set(photos.map(x => x.albumId))];
    let path;

    const albumsList = uniqueAlbums.map(x => {
        path = '/Album/' + x;

        return(
            <li>
                <Link to={path}>Album {x}</Link>
            </li>
        );
    })

    return(<div>
        <h1>Albums</h1>
        <ul>
            {albumsList}
        </ul>
    </div>);
}