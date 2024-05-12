import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation.jsx';
import HomePage from './customer/Pages/Homepage/HomePage';
import Footer from './customer/components/Footer/Footer.jsx'
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import ProductReviewCard from './customer/components/ProductDetails/ProductReviewCard';
function App() {
  return (
    <div className="">
      <Navigation />
      <div>
      hi
        <ProductDetails/>
       
      </div>
      <Footer/>
    </div>
  );
}

export default App;
