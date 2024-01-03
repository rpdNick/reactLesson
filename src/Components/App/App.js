import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App(props) {
  return (
    <div className="App">
      <Header data={props.data.header}/>
      <Main data={props.data.main}/>
    </div>
  );
}

export default App;
