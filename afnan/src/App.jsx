import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import HomePage from './pages/home/Home';
import Topheader from './Layout/Topheader/TopHead';
import Sidebar from './Layout/Sidebar/Sidebar';
import MainHeader from './Layout/Header/MainHeader';
import Footer from './Layout/Footer/Footer';
import Product from './pages/Product/Product';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Videos from './pages/Videos/Videos';
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Stores from './pages/Stores/Stores';
import Distributors from './pages/Distributors/Distributors';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Social from './pages/Social/Social';
import WishList from './pages/components/WishList/WishList';

const App = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [wishListOpen, setwishListOpen] = useState(false);
  const handleWishListOpen = () => {
    setwishListOpen(!wishListOpen)
  }
  const handleCheckOut = () => {
    setIsCheckout(!isCheckout)
  }

  // handle menu routes


  return (
    <Router>
      <Topheader />
      <MainHeader handleWishListOpen={handleWishListOpen} handleCheckOut={handleCheckOut} />
      <Sidebar isCheckout={isCheckout} handleIsCheckout={handleCheckOut} />
      <WishList wishListOpen={handleWishListOpen} iswishListOpen={wishListOpen} />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/pages/:slug/:id" element={<Product />} />
        <Route path="/all-products" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/detail/:slug/:id" element={<BlogDetail />} />
        <Route path="/detail/:slug/:id" element={<ProductDetail />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/distributors" element={<Distributors />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/card" element={<Cart />} />
        <Route path="/social-hub" element={<Social />} />
        <Route path="/checkout" element={<Checkout setIsCheckout={setIsCheckout} />} />
      </Routes>
      <Footer />
    </Router>
  );
};















// const App = () => {
//   const [isCheckout, setIsCheckout] = useState(false);

//   return (
//     <Router>
//       {!isCheckout && (
//         <>
//           <Topheader />
//           <MainHeader />
//           <Sidebar />
//         </>
//       )}

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/collection" element={<Product />} />
//         <Route path="/detail" element={<ProductDetail />} />
//         <Route path="/videos" element={<Videos />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/blog/detail" element={<BlogDetail />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/stores" element={<Stores />} />
//         <Route path="/distributors" element={<Distributors />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/card" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout setIsCheckout={setIsCheckout} />} />
//       </Routes>
//       {!isCheckout && <Footer />}
//     </Router>
//   );
// };

export default App;
