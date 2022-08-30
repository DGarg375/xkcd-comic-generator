import './ComicRandom.css';
import { useLoadingContext } from 'react-router-loading';

function ComicRandom() {
    const loadingContext = useLoadingContext();
    loadingContext.done();
    return(
        <div>this is the random comic page</div>
    );
}

export default ComicRandom;