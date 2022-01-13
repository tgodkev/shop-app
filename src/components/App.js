import Navbar from './Navbar';
import Smoke from './images/smoke.jpg'
import { Link } from "react-router-dom";

function App() {
  return (
    <div>

      <div className='landing'>
      <h1>I Want What He's Smoking.</h1>
      <img src={Smoke} alt="" />
      <button> <Link to='/shop'>Enter SHop </Link > </button>
      </div>
    </div>
  );
}

export default App;
