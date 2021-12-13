import { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Header() {
  const display = {
    display: "none",
  };
  const color = {
    color: "rgb(162,33,146)",
    // transform: "rotate(20deg)",
    fontWeight: "bold",
  };

  const [displayNav, setDisplayNav] = useState();
  const handleToggle = () => {
    setDisplayNav(!displayNav);
  };
  return (
    <header>
      <nav>
        <button onClick={handleToggle}>
          {displayNav ? (
            <i style={color} class="fas fa-plus"></i>
          ) : (
            <i class="fas fa-bars"></i>
          )}
        </button>
        <h2>Trip Tracker</h2>

        <img src="https://i.imgur.com/TzD0ug9.png" alt="logo travel bag" />
      </nav>
      <Fade down>
        <div className={`navBar ${displayNav ? "showNav" : ""}`}>
          <Fade>
          <div>
            <Link to="/trips">Trips</Link>
            <Link to="/new">Add Trip</Link>{" "}
          </div>
          </Fade>
        </div>
      </Fade>
    </header>
  );
}
export default Header;
