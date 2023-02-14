import './App.css';
import Apbar from './components/apbar/Apbar';
import Header from './components/header/Header';
import Asosiy from './components/asosiy/Asosiy';
import Subscrib from './components/subscrib/Subscrib';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="row g-0">
        <div className="col-3">
          <Apbar />
          <Outlet />
        </div>
        <div className="col-5">
          <Header />
          <Asosiy />
        </div>
        <div className='col-4'>
          <Subscrib />
        </div>
      </div>
    </div>
  );
}

export default App;