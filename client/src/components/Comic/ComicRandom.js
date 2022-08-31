import './ComicRandom.css';
import { useLoadingContext } from 'react-router-loading';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ComicRandom() {
    const [latestComicNum, setLatestComicNum] = useState(2000);
    const [randomComicNum, setRandomComicNum] = useState(Math.floor(Math.random() * latestComicNum) + 1);
    const [randomComicData, setRandomComicData] = useState([]);

    function getNewComic() {
        setRandomComicNum(Math.floor(Math.random() * latestComicNum) + 1);
    }

    const loadingContext = useLoadingContext();

    useEffect(() => {
        axios.get('/getLatest')
        .then(response => {
            setLatestComicNum(response.data.num);
            setTimeout(() => {
                loadingContext.done(); 
            }, 2000);
        }); 
    }, []);

    useEffect(() => {
        axios.get(`/getById?id=${randomComicNum}`)
        .then(response => {
            setRandomComicData(response.data);
        });
    }, [randomComicNum]);

    return(
        <div className="home-main-container">
            <div className="main-content">
                <button type="button" className="randomButtons" onClick={getNewComic}>GET MORE COMICS</button>
                <ComicImgRender img_url={randomComicData.img}/>
                <button type="button" className="randomButtons">Details</button>
            </div>
            
        </div>
    );
}

function ComicImgRender(props) {
    return(
        <div className="test">
            <img src={props.img_url} alt="Comic Img"></img>
        </div>
    );
}

function ComicDetRender(props) {
    return(
        <div>these are comic details</div>
    );
}

export default ComicRandom;