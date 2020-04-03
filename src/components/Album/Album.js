import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';


export default function Album() {

    const {id} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        Axios.get(url).then(res => {
            const albumPhotos = res.data.filter(x => x.albumId.toString() === id);
            setPhotos(albumPhotos);
        });
    }, []);

    const titles = photos ? 
        <ul>
            {photos.map(x => (
                <li key={x.id}>
                    {x.title}
                    <a href={x.url}>
                        <img src={x.thumbnailUrl}/>
                    </a>
                </li>
            ))}
        </ul>
    : 'Loading...';

    return(
        <>
            <h1>Photos from album {id}</h1>
            {titles}
        </>
    );
}