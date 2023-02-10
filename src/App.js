import './App.css';
import Apbar from './components/apbar/Apbar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <div className="row g-0">
        <div className="col-3">
          <Apbar />
        </div>
        <div className="col-5">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
