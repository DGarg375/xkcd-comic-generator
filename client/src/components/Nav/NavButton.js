import './NavButton.css'

function NavButton(props) {
    function first() {
        console.log(props.navName);
        if(props.navName === "XKCD OFFICIAL WEBSITE") {
           if(window.confirm("Are you sure? You are leaving this website...") === true) {
            window.location = "https://xkcd.com/";
           }
        }
    }
    return(
        <button className="navButton" type="button" onClick={first}>
            {props.navName}
        </button>
    );
}

export default NavButton;