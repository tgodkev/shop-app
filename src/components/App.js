import Navbar from './Navbar';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='landing'>
      <div>
      <h1>I Want What He's Smoking.</h1>

      <button> <Link to='/shop'>Enter SHop </Link > </button>
      </div>
    </div>
  );
}

export default App;
