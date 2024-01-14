import "./Header.scss";
// import {v4 as uuidv4} from 'uuid';

const Header = (props) => {
  // const navData = props.data.nav;

  return (
    <header className="Header">
      <div className="container flex_container">
        <div className="Logo">
          <img src={props.data.logo} alt="logo" />
        </div>
        <nav className="Navigation">
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
