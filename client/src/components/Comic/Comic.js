import './Comic.css';
import ComicID from './ComicID';
import ComicLatest from './ComicLatest';
import ComicRandom from './ComicRandom';
import { useLoadingContext } from 'react-router-loading';

function Comic() {
    const loadingContext = useLoadingContext();
    const pathhello = window.location.pathname;
    loadingContext.done();
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