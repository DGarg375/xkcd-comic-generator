import './NavButton.css'

function NavButton(props) {
    function first() {
        console.log(props.navName);
    }
    return(
        <button className="navButton" type="button" onClick={first}>
            {props.navName}
        </button>
    );
}

export default NavButton;