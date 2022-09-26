import "./style/App.css";
import "./style/home.css";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Destination from "./component/Destination";
import Whytrekking from "./component/Whytrekking";
import Gallery from "./component/Gallery";
import Testimonals from "./component/Testimonals";
import Ourblog from "./component/Ourblog";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About/>
      <Destination/>
      <Whytrekking/>
      <Gallery/>
      <Testimonals/>
      <Ourblog/>
      
    </>
  );
}

export default App;
