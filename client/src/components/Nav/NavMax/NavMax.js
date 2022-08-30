import './NavMax.css';

import { Link } from 'react-router-dom';

function NavMax() {
    return(
        <div className="nav-ext-window">
            <Link to="/about" className="nav-ext-links">
                <div className="nav-ext-buttons">
                    <div>ABOUT</div>
                </div>
            </Link>
            <div className="nav-ext-links" id="nav-ext-get-comics">
                <div className="nav-ext-buttons" id="get-comics-title">
                    <div>GET COMIC</div>
                </div>
                <div className="comic-dropdown">
                    <Link to="comic/random">
                        <div className="comic-drop-item">RANDOMLY</div>
                    </Link>
                    <Link to="comic/id">
                        <div className="comic-drop-item">BY COMIC ID</div>
                    </Link>
                    <Link to="comic/latest">
                        <div className="comic-drop-item">LATEST</div>
                    </Link>
                </div>
            </div>
            <a href="https://xkcd.com" className="nav-ext-links">
                <div className="nav-ext-buttons">
                    <div>XKCD WEBSITE</div>
                </div>
            </a>
            <Link to="/author" className="nav-ext-links">
                <div className="nav-ext-buttons">
                    <div>AUTHOR</div>
                </div>
            </Link>
        </div>
    );
}

export default NavMax;