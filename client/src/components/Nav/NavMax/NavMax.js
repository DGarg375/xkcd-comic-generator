import './NavMax.css';

function NavMax() {
    return(
        <div className="navbar-maximized-window">
            <a href="/" className="buttonLink">
                <div className="navbar-max-buttons">
                    ABOUT
                </div>
            </a>
            <a href="/" className="buttonLink">
                <div className="navbar-max-buttons">
                    GET COMICS
                </div>
            </a>
            <a href="https://xkcd.com/" className="buttonLink">
                <div className="navbar-max-buttons">
                    XKCD WEBSITE
                </div>
            </a>
            <a href="/" className="buttonLink">
                <div className="navbar-max-buttons">
                    AUTHOR
                </div>
            </a>
        </div>
    );
}

export default NavMax;