import './Comic.css';
import ComicID from './Sub/ComicID';
import ComicLatest from './Sub/ComicLatest';
import ComicRandom from './Sub/ComicRandom';

function Comic() {
    const pathhello = window.location.pathname;
    if(pathhello === "/comic/random") {
        return(
            <ComicRandom />
        );
    } else if(pathhello === "/comic/id") {
        return(
            <ComicID />
        );
    } else {
        return(
            <ComicLatest />
        );
    }
};

export default Comic;