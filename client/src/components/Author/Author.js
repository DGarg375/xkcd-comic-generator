import './Author.css';
import { useLoadingContext } from 'react-router-loading';

function Author() {
    const loadingContext = useLoadingContext();
    loadingContext.done();
    return(
        <div className="main-container-author">this is author page</div>
    );  
}

export default Author;