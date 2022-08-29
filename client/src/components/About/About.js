import './About.css';
import { useLoadingContext } from 'react-router-loading';

function About() {
    const loadingContext = useLoadingContext();
    loadingContext.done();
    return(
        <div>this is the about page</div>
    );
}

export default About;