import './NavMin.css'
import { Link } from 'react-router-dom';

function NavMin() {
    return(
        <div className="navbar-minimized-window">
            <div className="hover-container">
                <div className="dropdown-button">
                    :::
                </div>
                <div className="dropdown-container">
                    <div className="dropdown">
                        <Link to="/about">
                            <div className="drop-text">
                                ABOUT
                            </div>
                        </Link>
                        <div className="dropdown-comic">
                            <div className="drop-text" id="drop-get-comics">
                                GET COMIC
                            </div>
                            <div className="drop-get-comics">
                                <Link to="/comic/random">
                                    <div className="drop-get-item">
                                        RANDOMLY
                                    </div>
                                </Link>
                                <Link to="/comic/id">
                                    <div className="drop-get-item">
                                        BY COMIC ID
                                    </div>
                                </Link>
                                <Link to="/comic/latest">
                                    <div className="drop-get-item">
                                        LATEST
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <a href="https://xkcd.com/" target="_blank">
                            <div className="drop-text">
                                XKCD WEBSITE
                            </div>
                        </a>
                        <Link to="/author">
                            <div className="drop-text">
                                AUTHOR
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavMin;