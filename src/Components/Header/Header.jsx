import { NavLink } from "react-router-dom";
import "./Header.scss";
// import {v4 as uuidv4} from 'uuid';

const Header = (props) => {
  const navData = props.data.nav;

  console.log(navData)

  return (
    <header className="Header">
      <div className="container flex_container">
        <div className="Logo">
          <img src={props.data.logo} alt="logo" />
        </div>
        <nav className="Navigation">
          <NavLink to={navData[0].link}>{navData[0].navName}</NavLink>
          <NavLink to={navData[1].link}>{navData[1].navName}</NavLink>
          <NavLink to={navData[2].link}>{navData[2].navName}</NavLink>
          <NavLink to={navData[3].link}>{navData[3].navName}</NavLink>
          <NavLink to={navData[4].link}>{navData[4].navName}</NavLink>
          {/* {navData.map((el) => {
            return (
              <a key={uuidv4()} className="Item" href={el.link}>
                {el.navName}
              </a>
            );
          })} */}
        </nav>
        <button className="button primary">{props.data.button.text}</button>
      </div>
    </header>
  );
};

export default Header;
