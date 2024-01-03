import data from "../../data/data";
import "./Footer.scss";

const Footer = (props) => {
    console.log(props)

    return (
        <div className="Footer">
            <div className="copyright_text">{props.data.copyright}</div>
        </div>
    );
}

export default Footer;