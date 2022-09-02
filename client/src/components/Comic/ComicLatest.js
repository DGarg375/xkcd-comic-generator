import './ComicLatest.css';
import { useLoadingContext } from 'react-router-loading';
import axios from 'axios';
import { useEffect, useState } from 'react';

const months = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ComicLatest() {
    const [LatestComic, setLatestComic] = useState([]);
    const [detailPopup, setPopup] = useState(false);

    function toggleButton() {
        setPopup(!detailPopup);
    }

    const loadingContext = useLoadingContext();
    
    useEffect(() => {
        axios.get('/getLatest')
        .then(response => {
            setLatestComic(response.data);
            setTimeout(() => {
                loadingContext.done();
            }, 1500);
        })
    }, []);
    return(
        <div className="home-main-container">
            <div className="main-content">
                <div className="img-component">
                    <img src={LatestComic.img} alt={LatestComic.alt}></img>
                </div>
                <ComicDetRender toggle={detailPopup} comicData={LatestComic} />
                <button type="button" className="randomButtons" onClick={toggleButton}>Details</button>
            </div>
        </div>
    );
}

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
                <a href={img_link} target="_blank">{"{"} LINK FOR IMAGE {"}"}</a>
            </div>
        );
    }
}

export default ComicLatest;