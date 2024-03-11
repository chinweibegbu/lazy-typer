import '../styles/App.css';
import NavBar from './Navigation';
import Selection from './Selection';
import Typer from './Typer';

function App() {
  return (
    <div className='container-fluid App'>
      <NavBar />
      {/* <Selection /> */}
      <Typer />
    </div>

  );
}

export default App;
