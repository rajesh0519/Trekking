import "./style/App.css";
import "./style/home.css";
import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Destination from "./component/Destination";
import Whytrekking from "./component/Whytrekking";
import Gallery from "./component/Gallery";
import Testimonals from "./component/Testimonals";

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
      
    </>
  );
}

export default App;
