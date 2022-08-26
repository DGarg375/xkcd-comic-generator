import './NavMin.css'

function NavMin() {
    return(
        <div className="navbar-minimized-window">
            <div className="hover-container">
                <div className="dropdown-button">
                    :::
                </div>
                <div className="dropdown-container">
                    <div className="dropdown">
                        <a href="/"><div className="drop-text">ABOUT</div></a>
                        <div className="dropdown-comic">
                            <div className="drop-text" id="drop-get-comics">GET COMIC</div>
                            <div className="hello">
                                <a href="/"><div className="drop-get-item">RANDOMLY</div></a>
                                <a href="/"><div className="drop-get-item">BY COMIC ID</div></a>
                                <a href="/"><div className="drop-get-item">LATEST</div></a>
                            </div>
                        </div>
                        <a href="https://xkcd.com/"><div className="drop-text">XKCD WEBSITE</div></a>
                        <a href="/"><div className="drop-text">AUTHOR</div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavMin;