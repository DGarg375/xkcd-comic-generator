import './Comic.css';
import ComicID from './Sub/ComicID';
import ComicLatest from './Sub/ComicLatest';
import ComicRandom from './Sub/ComicRandom';
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