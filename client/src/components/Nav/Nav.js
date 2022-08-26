import './Nav.css';
import NavMin from './NavMin/NavMin.js';
import NavMax from './NavMax/NavMax.js';

function Nav() {
    return (
        <main>
            <div className="header-container">
                <div className="header-title">
                    <div className="website-title">xkcd comics generator</div>
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