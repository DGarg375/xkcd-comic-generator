import './Home.css';
import { Link } from 'react-router-dom';
import { useLoadingContext } from 'react-router-loading';

function Home() {

    const loadingContext = useLoadingContext();
    setTimeout(() => {
        loadingContext.done();   
    }, 1000);

    return(
        <div className="home-main-container">
        <div className="bgnd-img"></div>
            <div className="welcome-box">
                <div className="welcome-text">WELCOME TO THE xkcd COMIC GENERATOR!</div>
                <Link to="/comic/random">
                    <button className="get-comic-home-button">GET RANDOM COMIC</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;