import Baner from "./components/Baner";
import Navbar from "./components/Navbar";
import Garden from "./components/Garden";
import Orange from "./components/Orange";
import Products from "./components/Products";
import Our from "./components/Our";
import Offer from "./components/Offer";
import Where from "./components/Where";
import Fruits from "./components/Fruits";
import News from "./components/News";
import Email from "./components/Email";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar /> 
      <Baner />
      <Garden />
      <Orange />
      <Products />
      <Our maxRange={`%`}/>
      <Offer />
      <Where />
      <Fruits />
      <News />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
