import './App.css';
import Header from './components/Header';
import ImageList from './components/ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import Popup from './components/Popup';
import axios from 'axios';
function App() {
    const [showModal, setShowModal] = useState(false);
    const [imageList, setImageList] = useState([]);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);

    useEffect(() => {
      axios.get(`https://api.unsplash.com/photos/?client_id= ${process.env.REACT_APP_API_KEY}`)
      .then(response => console.log(response.data))
    },[])
  return (
    <>
    <Header/>
    <ImageList cardClick={openModal} images={imageList}/>
    <Popup showModal={showModal} closeModal={closeModal}/>
    </>
  );
}

export default App;
