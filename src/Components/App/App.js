import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App(props) {
  return (
    <div className="App">
      <Header data={props.data.header}/>
      <Main data={props.data.main}/>
      <Footer data={props.data.footer}/>
    </div>
  );
}

export default App;
