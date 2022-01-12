import Navbar from './Navbar';
import Meat from './images/smoked.jpg'

function App() {
  return (
    <div>
      <Navbar />
  
      <div className='landing'>
      <h1>Kevs Smoke Shack.</h1>
      <img src={Meat} alt="" />
      </div>
    </div>
  );
}

export default App;
