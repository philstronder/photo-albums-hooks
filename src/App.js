import React, {useState} from 'react';
import './App.css';
import AlbumsList from './components/AlbumsList/AlbumsList'
import {Route, Switch} from 'react-router-dom';
import Album from './components/Album/Album';


function App() {

  
    return (
      <Switch>
        <Route path='/Album/:id' component={Album}></Route>
        <Route path='/' exact component={AlbumsList} />
      </Switch>
    );

  // const [photos, setPhotos] = useState([]);

  // const url = "https://jsonplaceholder.typicode.com/photos";
  
  // axios.get(url)
  //   .then(res => {
  //     setPhotos(res.data);
  //   });

  //  const photoList = photos.map(photo => (
  //    <li key={photo.id}>
  //     {photo.title}
  //     <a href={photo.url}>
  //       <img src={photo.thumbnailUrl}/>
  //     </a>
  //    </li>
  //  ));

  // return (
  //   <div className="App">
  //     Photo Album
  //     <ul>
  //       {photoList}
  //     </ul>

  //   </div>
  // );
}

export default App;
