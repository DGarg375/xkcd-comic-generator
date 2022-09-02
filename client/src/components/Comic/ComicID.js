import './ComicID.css';
import { useLoadingContext } from 'react-router-loading';
import { useEffect, useState } from 'react';
import axios from 'axios';

const months = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ComicID() {
    const [latestComicNum, setLatestNum] = useState(0);
    const [comicIdData, setComicData] = useState([]);
    const [detailPopup, setPopup] = useState(false);

    const latestText = `latest #${latestComicNum}`;
    const loadingContext = useLoadingContext();
    useEffect(() => {
        axios.get('/getLatest')
        .then(response => {
            setLatestNum(response.data.num);
            setTimeout(() => {
                loadingContext.done();
            }, 1500);
        })
    }, []);
    function getComicById() {
        const id = document.getElementById("comic-id-input").value;
        document.getElementById("comic-id-input").value = "";
        axios.get(`/getById?id=${id}`)
        .then(response => {
            setComicData(response.data);
        });
    }
    function toggleButton(comicIdData) {
        setPopup(!detailPopup);
    }
    return(
        <div className="home-main-container">
            <div className="main-content">
                <div className="input-area">
                    <input type="input" id="comic-id-input" placeholder={latestText}></input>
                    <button type="submit" className="comicIdButtons" id="comic-id-submit-button" onClick={getComicById}>GET COMIC</button>
                </div>
                <ComicImgRender img_url={comicIdData.img} alt={comicIdData.alt} />
                <ComicDetRender toggle={detailPopup} comicData={comicIdData} />
                <button type="button" className="comicIdButtons" id="details-button" onClick={toggleButton}>Details</button>
            </div>
        </div>
    );
}

function ComicImgRender(props) {
    if(props.img_url != null) {
        return(
            <div className="img-component">
                <img src={props.img_url} alt={props.alt}></img>
            </div>
        );
    }
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

export default ComicID;