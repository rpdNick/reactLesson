import "./Footer.scss";

const Footer = (props) => {

    return (
        <div className="container">
            <div className="Footer">
                <div className="copyright_text">{props.data.copyright}</div>
            </div>
        </div>
    );
}

export default Footer;