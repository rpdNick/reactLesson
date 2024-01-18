import "./Main.scss";
import Counter from '../Counter/Counter';

const Main = (props) => {
  
  return (
    <main className="container">
      <div className="main_content">
        <div className="content_info">
          <button className="button button_get_update">
            {props.data.button.text}
            <img src={props.data.button.icon} alt="icon" />
          </button>
          <div className="title">{props.data.title.text}</div>
          <div className="description">{props.data.description.text}</div>
          <div className="info_panel">
            <div className="info_item location">
              <img className="icon" src={props.data.panel.location.icon} alt="icon" />
              <span>{props.data.panel.location.name}</span>
            </div>
            <div className="info_item date">
              <img className="icon" src={props.data.panel.date.icon} alt="icon" />
              <span>{props.data.panel.date.datetime}</span>
            </div>
          </div>
        </div>
        <div className="content_banner">
          <img className="banner" src={props.data.banner} alt="banner" />
        </div>
      </div>
      <Counter/>
    </main>
  );
};

export default Main;
