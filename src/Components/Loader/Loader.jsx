import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader_wrapper">
      <div className="loader"></div>
      <div className="wording">
        <div className="letter">L</div>
        <div className="letter">o</div>
        <div className="letter">a</div>
        <div className="letter">d</div>
        <div className="letter">i</div>
        <div className="letter">n</div>
        <div className="letter">g</div>
        <div className="letter circle"></div>
        <div className="letter circle"></div>
        <div className="letter circle"></div>
      </div>
    </div>
  );
};

export default Loader;
