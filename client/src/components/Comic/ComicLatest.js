import './ComicLatest.css';
import { useLoadingContext } from 'react-router-loading';

function ComicLatest() {
    const loadingContext = useLoadingContext();
    loadingContext.done();
    return(
        <div>this is the latest comic page</div>
    );
}

export default ComicLatest;