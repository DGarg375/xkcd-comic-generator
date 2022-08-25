import './Nav.css';
import NavButton from './NavButton.js'

function Nav() {
    return(
        <div id="navEncomp">
            <NavButton navName="ABOUT"></NavButton>
            <NavButton navName="GET COMICS"></NavButton>
            <NavButton navName="XKCD OFFICIAL WEBSITE"></NavButton>
            <NavButton navName="AUTHOR"></NavButton>
        </div>
    );
}

export default Nav;