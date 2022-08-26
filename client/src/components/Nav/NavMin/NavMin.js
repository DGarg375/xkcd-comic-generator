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
                        <a href="/"><div>ABOUT</div></a>
                        <a href="/"><div>GET COMICS</div></a>
                        <a href="/"><div>XKCD WEBSITE</div></a>
                        <a href="/"><div>AUTHOR</div></a>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default NavMin;