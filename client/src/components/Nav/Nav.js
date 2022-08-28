import './Nav.css';
import { Link } from 'react-router-dom';

import NavMin from './NavMin/NavMin.js';
import NavMax from './NavMax/NavMax.js';

function Nav() {
    return (
        <main>
            <div className="header-container">
                <div className="header-title">
                    <Link to="/">
                        <div className="website-title">
                            xkcd COMICS GENERATOR
                        </div>
                    </Link>
                </div>
                <div className="navbar-extended">
                    <NavMax />
                </div>
                <div className="navbar-minimized">
                    <NavMin />
                </div>
            </div>
        </main>
    );
}

export default Nav;