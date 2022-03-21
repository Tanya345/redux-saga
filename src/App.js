import './App.css'
import Navbar from './components/Navbar';
import Shop from './components/Shop';
// import Shop_Map from './components/Shop_Map'

function App() {
  return (
    <>
      <Navbar />
      <div className=" d-flex flex-wrap justify-content-evenly">
        <Shop />
        {/* <Shop_Map /> */}
      </div>
    </>
  );
}

export default App;
