import './ComicRandom.css';
import { useLoadingContext } from 'react-router-loading';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ComicRandom() {
    const [latestComicNum, setLatestComicNum] = useState(2000);
    const [randomComicNum, setRandomComicNum] = useState(getRandomNum(latestComicNum));
    const [randomComicData, setRandomComicData] = useState([]);
    const [detailPopup, setPopup] = useState(false);

    function getRandomNum(num) {
        return (Math.floor(Math.random() * num) + 1);
    }

    function toggleButton() {
        setPopup(!detailPopup);
    };

    function getNewComic() {
        setRandomComicNum(getRandomNum(latestComicNum));
        setPopup(false);
    };

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
                <ComicImgRender img_url={randomComicData.img} alt={randomComicData.alt}/>
                <ComicDetRender toggle={detailPopup} comicData = {randomComicData} />
                <button type="button" className="randomButtons" onClick={toggleButton}>Details</button>
            </div>
            
        </div>
    );
}

function ComicImgRender(props) {
    return(
        <div className="test">
            <img src={props.img_url} alt={props.alt}></img>
        </div>
    );
}

const months = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ComicDetRender(props) {
    let title = props.comicData.title;
    let issue_date = `${months[props.comicData.month]} ${props.comicData.day}, ${props.comicData.year}`;
    let img_link = props.comicData.img;
    let comic_num = props.comicData.num;
    if(props.toggle === true) {
        return(
            <div className="details-text">
                <div><span className="detail-headers">Comic Title:</span> {title} </div>
                <div><span className="detail-headers">Issue Date:</span> {issue_date}</div>
                <div><span className="detail-headers">Issue Number:</span> {comic_num}</div>
                <a href={img_link} target="_blank">{"{"} LINK TO IMAGE {"}"}</a>
            </div>
        );
    }
}

export default ComicRandom;