import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="home-main-container">
            <div className="welcome-box">
                <div className="welcome-text">WELCOME TO THE xkcd COMIC GENERATOR!</div>
                <Link to="/comic/random">
                    <button className="get-comic-home-button">GET RANDOM COMIC</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;