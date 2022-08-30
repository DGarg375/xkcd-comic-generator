import './ComicID.css';
import { useLoadingContext } from 'react-router-loading';

function ComicID() {
    const loadingContext = useLoadingContext();
    loadingContext.done();
    return(
        <div>this is comic id page</div>
    );
}

export default ComicID;